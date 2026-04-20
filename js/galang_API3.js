const myToken = document.getElementById("myToken");
let lastSearchTerm = '';
let lastSearchResults = [];
let lastSearchCategory = '';
let errorLog = [];
let ultimoDataRecibido = null;

async function buscar(page = 1) {
    const loadingStatusSearch = document.getElementById("loadingStatusSearch");
    const baseUrl = "https://api.discogs.com/database/search";
    const queryValue = document.getElementById("query").value.trim();
    const token = document.getElementById("myToken").value.trim();
    lastSearchTerm = queryValue;
    if (!token) return alert("Completá el token.");
    if (!queryValue) return alert("Completá la búsqueda.");
    const searchTypes = {
        artistSearch: { type: "artist", param: "title" },
        releaseSearch: { type: "release", param: "release_title" },
        labelSearch: { type: "label", param: "q" }, // Cambiado de 'label' a 'q'
        mastersSearch: { type: "master", param: "q" }, // PUEDE QUE NO SEA Q masters
        trackSearch: { type: "release", param: "track" },  // Se busca en releases que contengan ese track
        genreSearch: { type: "release", param: "genre" },
        styleSearch: { type: "release", param: "style" },
        yearSearch: { type: "release", param: "year" }
    }
    const selectedId = Object.keys(searchTypes).find(id => document.getElementById(id)?.checked);
    if (!selectedId) { return alert("Seleccioná una opción de búsqueda."); }
    const config = searchTypes[selectedId];
    const params = new URLSearchParams({
        type: config.type,
        per_page: "5",
        page: page, // <--- Nueva línea
        [config.param]: queryValue
    });
    console.log("BUSCAR params" + params);
    loadingStatusSearch.style.display = "block";
    ["container", "containerReleases", "resultsList"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
    try {
        const response = await fetch(`${baseUrl}?${params}`, {
            headers: {
                'Authorization': `Discogs token=${token}`,
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });

        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${queryValue})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} (ID: ${queryValue})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.results.length === 0) {
            return alert("No hay resultados.");
        }
        ultimoDataRecibido = {
            termino: queryValue,
            categoria: selectedId,
            data: data
        };
        if (data.results.length > 0) {
            const pauto = document.getElementById("paginationControls");
            const btnPrev = document.getElementById("prevBtn");
            const btnNext = document.getElementById("nextBtn");
            const info = document.getElementById("pageInfo");
            pauto.classList.remove("hidden");
            info.innerText = ` Página ${data.pagination.page} de ${data.pagination.pages} `;
            btnPrev.disabled = !data.pagination.urls.prev;
            btnPrev.onclick = () => buscar(data.pagination.page - 1);
            btnNext.disabled = !data.pagination.urls.next;
            btnNext.onclick = () => buscar(data.pagination.page + 1);
            window.currentPage = data.pagination.page;
        }
        const promesas = data.results.map(item => procesarResultado(item, config.type));
        await Promise.all(promesas);

        lastSearchResults = data.results;
        lastSearchCategory = queryValue;
        console.log(`Buscar: `);
        console.log(`Total de resultados: ${data.pagination.items}`);
        console.log(`Página actual: ${data.pagination.page} de ${data.pagination.pages}`);
        console.log(`Resultados por página: ${data.pagination.per_page}`);
        const results = data.results;
        return results;
    } catch (error) {
        console.error("Error en la búsqueda:", error);
        console.log("bUSCAR Error al conectar con Discogs.");
    } finally {
        // 3. Ocultar Spinner al finalizar (éxito o error)
        loadingStatusSearch.style.display = "none";
    }
}
// Función auxiliar para no bloquear el bucle principal
async function procesarResultado(item, type) {
    try {
        if (type === "artist" || type === "artistSearch") {
            await verArtistSmall(item, "resultsList");
        } else if (type === "label" || type === "labelSearch") {
            await verLabelSmall(item, "resultsList");
        } else if (type === "release" || type === "releaseSearch") {
            await verReleaseSmall(item, "resultsList");
        } else if (type === "master" || type === "masterSearch") {
            // Discogs mezcla master y release en los resultados de búsqueda
            //hay que hacer esto tambien para masters
            await verMasterSmall(item, "resultsList");
        }
    } catch (e) {
        console.error("Error cargando detalle:", e);
    }
}

async function verArtistSmall(data, containerId) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.style.border = "2px solid #0066cc";
    div.style.margin = "15px 0";
    div.style.padding = "15px";
    div.style.borderRadius = "8px";
    div.style.backgroundColor = "#f9f9f9";
    div.style.overflow = "hidden"; // Para limpiar el float de la imagen
    // 1. Corregido: Validación de imagen (Discogs no siempre devuelve imágenes)
    if (data.thumb) {
        const img = document.createElement('img');
        img.src = data.thumb;
        img.style.maxWidth = "160px";
        img.style.maxHeight = "160px";
        img.style.marginRight = "15px";
        img.style.float = "left";
        div.appendChild(img);
    }
    // 2. Nombre
    const nombre = document.createElement('h3');
    nombre.textContent = data.title;
    div.appendChild(nombre);
    // 3. ID
    const idInfo = document.createElement('p');
    idInfo.innerHTML = `<strong>ID:</strong> ${data.id}`;
    div.appendChild(idInfo);

    const btn = document.createElement('button');
    btn.textContent = "Ver artista";
    btn.style.marginTop = "10px";
    btn.style.padding = "8px 16px";
    btn.style.backgroundColor = "#0066cc";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.onclick = () => obtenerDetalleArtista(data.id);
    div.appendChild(btn);

    container.appendChild(div);
}

async function verArtist(value) {
    const artist_id = value.toString();
    const token = document.getElementById("myToken").value.trim();
    const URL = `https://api.discogs.com/artists/${artist_id}`;

    try {
        const resultsList = document.getElementById("resultsList");
        const response = await fetch(URL, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });

        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${artist_id})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${artist_id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${queryValue})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        // console.log(`VER: ${data.name} (ID: ${data.id})`);

        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";
        div.style.overflow = "hidden"; // Para limpiar el float de la imagen

        // 1. Corregido: Validación de imagen (Discogs no siempre devuelve imágenes)
        if (data.images && data.images.length > 0) {
            const img = document.createElement('img');
            img.src = data.images[0].resource_url;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }
        // 2. Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = data.name;
        div.appendChild(nombre);
        // 3. ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${data.id}`;
        div.appendChild(idInfo);

        const btn = document.createElement('button');
        btn.textContent = "Ver artista";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => obtenerDetalleArtista(data.id);
        div.appendChild(btn);
        resultsList.appendChild(div);
    } catch (error) {
        console.error('Error al buscar VER:', error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu token o conexión. VER ARTIST');
    }
}

async function obtenerDetalleArtista(artistId) {
    const url = `https://api.discogs.com/artists/${artistId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });
        const data = await response.json();
        // Limpiar contenedor y mostrar TODOS los datos
        const container = document.getElementById('container');
        printsArtista(data);
        const btn = document.createElement('button');
        btn.textContent = "Ver discografia ";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => printsArtistaReleases(data.id, "containerReleases", btn);
        container.appendChild(btn);
    } catch (error) {
        console.error(error);
        console.log("Error al cargar el perfil del artista");
    }
}

function printsArtista(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";
    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = data.name;
    newDiv.appendChild(nombre);
    // Imagen principal
    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        newDiv.appendChild(img);
    }
    // Biografía / Perfil
    if (data.profile) {
        const perfil = document.createElement('p');
        perfil.innerHTML = `<strong>Biografía:</strong><br>${data.profile}`;
        newDiv.appendChild(perfil);
    }
    // Miembros (si es un grupo)
    if (data.members && data.members.length > 0) {
        const miembrosP = document.createElement('p');
        miembrosP.innerHTML = `<strong>Miembros:</strong> `;
        data.members.forEach(m => {
            miembrosP.innerHTML += `${m.name} `;
        });
        newDiv.appendChild(miembrosP);
    }
    // Grupos en los que participa
    if (data.groups && data.groups.length > 0) {
        const gruposP = document.createElement('p');
        gruposP.innerHTML = `<strong>Grupos:</strong> `;
        data.groups.forEach(g => {
            gruposP.innerHTML += `${g.name} `;
        });
        newDiv.appendChild(gruposP);
    }
    // Real name
    if (data.realname) {
        const real = document.createElement('p');
        real.innerHTML = `<strong>Nombre real:</strong> ${data.realname}`;
        newDiv.appendChild(real);
    }
    container.appendChild(newDiv);
}

function pupi(data, targetDiv, btn) {
    if (btn) btn.remove();
    if (!targetDiv) {
        console.error("Error: El contenedor no existe.");
        return;
    }
    if (data.tracklist) {
        const trackDiv = document.createElement("div");
        trackDiv.style.clear = "both";
        trackDiv.style.marginTop = "10px";
        trackDiv.innerHTML = "<strong>Tracklist:</strong>";

        data.tracklist.forEach(track => {
            const p = document.createElement("div");
            p.style.fontSize = "0.9em";
            p.textContent = `${track.position} - ${track.title} ${track.duration ? '(' + track.duration + ')' : ''}`;
            trackDiv.appendChild(p);
        });
        targetDiv.appendChild(trackDiv);
    }
    const btnMore = document.createElement('button');
    btnMore.textContent = "Más detalles";
    btnMore.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
    btnMore.onclick = () => detalleRestanteMaster(data, targetDiv, btnMore);
    targetDiv.appendChild(btnMore);
}

async function printsArtistaReleases(artist_id, containerInput, btn) {
    if (btn) btn.remove();
    const container = (typeof containerInput === 'string')
        ? document.getElementById(containerInput)
        : containerInput;
    if (!container) {
        console.error(`Error: No se encontró el contenedor con ID "${containerId}"`);
        return;
    }
    const token = document.getElementById("myToken").value.trim();
    const url = `https://api.discogs.com/artists/${artist_id}/releases?sort=year&sort_order=asc&per_page=100`;
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const newDiv = document.createElement('div');
    //const container = document.getElementById(containerId);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });
        const remaining = response.headers.get("X-Discogs-Ratelimit-Remaining");
        console.log(`Peticiones restantes: ${remaining}`);
        alert(`Peticiones restantes: ${remaining}`);
        if (remaining && parseInt(remaining) < 5) {
            console.warn("Límite casi alcanzado. Ralentizando...");
            await delay(2000); // Pausa de 2 segundos si quedan pocas peticiones
        }
        if (response.status === 429) {
            alert("Too Many Requests")
            console.warn("Límite excedido. Esperando 60 segundos...");
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            await delay(60000);
            return /*printsArtistaReleases(data, containerId); // Reintenta*/
        }
        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${queryValue})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        const releases = data.releases;
        if (!releases || releases.length === 0) {
            return console.log("El artista no tiene lanzamientos registrados.");
        }
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>Discografia ordenada por año </strong>`;
        container.appendChild(idInfo);
        for (const release of releases) {
            if (release.type === "master") {
                await verMaster(release.id, "containerReleases");
                //console.log(`--- Release #${index + 1} ---`);
                console.log(`Título: ${release.title}`);
                console.log(`Año: ${release.year || 'N/A'}`);
                console.log(`Sello: ${release.label || 'N/A'}`);
                console.log(`Tipo: ${release.type}`); // puede ser 'release' o 'master'
                console.log(`ID: ${release.id}`);
                console.log(`URL API: ${release.resource_url}`);
            }
        }
        container.appendChild(newDiv);
    } catch (error) {
        console.error("Error al obtener los releases:", error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}






async function verLabelSmall(data, containerId) {
    if (!data) {
        console.error('ID de label no proporcionado');
        return;
    }
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = "label-card";
    div.style = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";
    // Placeholder genérico si no hay imagen
    const imgUrl = data.thumb || 'https://placeholder.com';
    const name = data.title || 'Nombre no disponible';
    div.innerHTML = `
            <img src="${imgUrl}" style="max-width: 160px; max-height: 160px; margin-right: 15px; float: left; border-radius: 4px;">
            <div style="display: flow-root;">
                <h3 style="margin-top: 0;">${name}</h3>
                <p><strong>ID:</strong> ${data.id}</p>
                <button id="btn-${data.id}" style="margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Ver sello
                </button>
            </div>
        `;
    //resource_url aca tengo todo la info 
    // del label para hacer mas busquedas
    container.appendChild(div);
    document.getElementById(`btn-${data.id}`).onclick = () => obtenerDetalleLabel(data.id, container);
}

async function verReleaseSmall(data, containerInput) {
    const container = (typeof containerInput === 'string')
        ? document.getElementById(containerInput)
        : containerInput;
    if (!container) {
        console.error(`Error: No se encontró el contenedor con ID "${containerInput}"`);
        return;
    }
    if (!data) {
        console.error('ID de release no proporcionado');
        return;
    }
    try {
        const div = document.createElement('div');
        div.style.cssText = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";
        // Imagen (Validación segura)
        if (data.thumb) {
            const img = document.createElement('img');
            img.src = data.thumb;
            img.style.cssText = "max-width: 160px; max-height: 160px; margin-right: 15px; float: left;";
            div.appendChild(img);
        }

        // Título
        const titulo = document.createElement('h3');
        titulo.textContent = data.title || "Sin título";
        div.appendChild(titulo);

        //Year
        const year = document.createElement('h3');
        year.textContent = `(${data.year || 'N/A'})`;
        div.appendChild(year);

        // Format (Validación de array y join para descripciones)
        const formatInfo = document.createElement('p');
        const descripciones = data.formats?.[0]?.descriptions?.join(", ") || "No especificado";
        formatInfo.innerHTML = `<strong>Format:</strong> ${descripciones}`;
        div.appendChild(formatInfo);

        // Label
        const labelInfo = document.createElement('p');
        labelInfo.innerHTML = `<strong>Label:</strong> ${data.labels?.[0]?.name || "N/A"}`;
        div.appendChild(labelInfo);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${data.id || 'N/A'}`;
        div.appendChild(idInfo);

        // Botón (Validación del ID del artista para la función posterior)
        const artistaId = data.artists?.[0]?.id;
        if (artistaId) {
            const btn = document.createElement('button');
            btn.textContent = "Ver artista";
            btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
            //ARREGLAR ESTO 
            btn.onclick = () => obtenerDetalleRelease(artistaId);
            div.appendChild(btn);
        }

        const btn = document.createElement('button');
        btn.textContent = "Ver Album";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => printsRelease(data.id, "containerReleases");
        div.appendChild(btn);






        container.appendChild(div);
    } catch (error) {
        console.error('Error al buscar VER:', error);
        console.log('Hubo un error al procesar los datos de Discogs.');
    }
}

async function verMasterSmall(data, containerId) {
    const container = document.getElementById(containerId);
    try {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";
        div.style.overflow = "hidden";
        // Imagen (si existe)
        if (data.thumb) {
            const img = document.createElement('img');
            img.src = data.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }
        // Titulo + year
        const titulo = document.createElement('h3');
        titulo.textContent = `(${data.year || 'N/A'}) ${data.title}`;
        div.appendChild(titulo);
        /*
                if (data.styles) {
                    const styles = document.createElement("p");
                    styles.style.clear = "both";
                    styles.style.marginTop = "10px";
                    styles.innerHTML = `<strong>Styles:</strong> ${data.styles.join(", ")}`;
                    div.appendChild(styles);
                }
        */
        // ID
        const idInfo = document.createElement('h3');
        idInfo.textContent = "ID " + "(" + data.id + ")";
        div.appendChild(idInfo);

        const btn = document.createElement('button');
        btn.textContent = "Ver detalle del album";
        btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
        btn.onclick = () => verMaster(data, "resultsList", btn);
        div.appendChild(btn);

        container.appendChild(div);
    } catch (error) {
        console.error('Error al usar verMaster:', error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
    /**/
}

async function verRelease(value, containerId) {
    alert("verRelease value: " + value);
    const token = document.getElementById("myToken").value.trim();
    if (!value) {
        console.error('ID de release no proporcionado');
        return;
    }
    try {
        const resultsList = document.getElementById("resultsList");
        const response = await fetch(value, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });

        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${value})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${value})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${value})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${value})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.style.cssText = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";

        // Imagen (Validación segura)
        if (data.thumb) {
            const img = document.createElement('img');
            img.src = data.thumb;
            img.style.cssText = "max-width: 160px; max-height: 160px; margin-right: 15px; float: left;";
            div.appendChild(img);
        }

        // Nombre Artista (Uso de ?. y valor por defecto)
        const nombre = document.createElement('h3');
        nombre.textContent = data.artists?.[0]?.name || "Artista desconocido";
        div.appendChild(nombre);

        // Título
        const titulo = document.createElement('h3');
        titulo.textContent = data.title || "Sin título";
        div.appendChild(titulo);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${data.id || 'N/A'}`;
        div.appendChild(idInfo);

        const styleInfo = document.createElement('p');
        styleInfo.innerHTML = `<strong>Style:</strong> ${data.styles || 'N/A'}`;
        div.appendChild(styleInfo);

        // Format (Validación de array y join para descripciones)
        const formatInfo = document.createElement('p');
        const descripciones = data.formats?.[0]?.descriptions?.join(", ") || "No especificado";
        formatInfo.innerHTML = `<strong>Format:</strong> ${descripciones}`;
        div.appendChild(formatInfo);

        // Label
        const labelInfo = document.createElement('p');
        labelInfo.innerHTML = `<strong>Label:</strong> ${data.labels?.[0]?.name || "N/A"}`;
        div.appendChild(labelInfo);

        // Botón (Validación del ID del artista para la función posterior)
        const artistaId = data.artists?.[0]?.id;
        if (artistaId) {
            const btn = document.createElement('button');
            btn.textContent = "Ver artista";
            btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
            btn.onclick = () => obtenerDetalleRelease(data.id);
            div.appendChild(btn);
        }
        //HAY QUE CORREGIR ESTO TIENE QUE MOSTRAR EL ALBUM POR ID 
        //EN EL CONTAINER

        const btn2 = document.createElement('button');
        btn2.textContent = "Ver Album";
        btn2.style.cssText = "margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
        btn2.onclick = () => printsRelease(data.id, containerId);
        div.appendChild(btn2);

        resultsList.appendChild(div);

    } catch (error) {
        console.error('Error al buscar VER:', error);
        console.log('Hubo un error al procesar los datos de Discogs.');
    }
}

async function verReleaseNoFetch(release, containerId) {
    const container = document.getElementById(containerId);
    if (!release) {
        console.error('ID de release no proporcionado');
        return;
    }
    const div = document.createElement('div');
    div.style.cssText = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";

    // Imagen (Validación segura)
    if (release.thumb) {
        const img = document.createElement('img');
        img.src = release.thumb;
        img.style.cssText = "max-width: 160px; max-height: 160px; margin-right: 15px; float: left;";
        div.appendChild(img);
    }
    // Título
    const titulo = document.createElement('h3');
    titulo.textContent = release.title || "Sin título";
    div.appendChild(titulo);
    // Nombre Artista 
    const nombre = document.createElement('h3');
    nombre.textContent = release.artist || "Artista desconocido";
    div.appendChild(nombre);
    //Year
    const year = document.createElement('h3');
    year.textContent = release.year || 'N/A';
    div.appendChild(year);
    // ID
    const idInfo = document.createElement('p');
    idInfo.innerHTML = `<strong>ID:</strong> ${release.id || 'N/A'}`;
    div.appendChild(idInfo);
    const styleInfo = document.createElement('p');
    styleInfo.innerHTML = `<strong>Style:</strong> ${release.styles || 'N/A'}`;
    div.appendChild(styleInfo);
    // Botón (Validación del ID del artista para la función posterior)
    const artistaId = release.artists?.[0]?.id;
    if (artistaId) {
        const btn = document.createElement('button');
        btn.textContent = "Ver artista";
        btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
        //ARREGLAR ESTO 
        btn.onclick = () => printsRelease(artistaId);
        div.appendChild(btn);
    }
    const btn = document.createElement('button');
    btn.textContent = "Ver tracklist";
    btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
    btn.onclick = () => releaseTracklist(release, div, btn);
    div.appendChild(btn);
    container.appendChild(div);
}

async function verMaster(value, containerId) {
    const master_id = value.toString();
    const token = document.getElementById("myToken").value.trim();
    const container = document.getElementById(containerId);
    const URL = `https://api.discogs.com/masters/${master_id}`;
    try {
        const response = await fetch(URL, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });
        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${queryValue})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${queryValue})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";
        div.style.overflow = "hidden";
        div.style.clear = "both";
        // Imagen (si existe)
        if (data.images && data.images.length > 0) {
            const img = document.createElement('img');
            img.src = data.images[0].resource_url;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }
        // Titulo + year
        const titulo = document.createElement('h3');
        titulo.textContent = `(${data.year || 'N/A'}) ${data.title}`;
        div.appendChild(titulo);
        // nombre
        const nombre = document.createElement('p');
        nombre.style.fontWeight = "bold";
        nombre.textContent = "Artista: " + data.artists.map(a => a.name).join(", ");
        div.appendChild(nombre);
        // ID
        const idInfo = document.createElement('h3');
        idInfo.textContent = "ID " + "(" + data.id + ")";
        div.appendChild(idInfo);
        if (data.styles) {
            const styles = document.createElement("p");
            styles.style.clear = "both";
            styles.style.marginTop = "10px";
            styles.innerHTML = `<strong>Styles:</strong> ${data.styles.join(", ")}`;
            div.appendChild(styles);
        }
        const btn = document.createElement('button');
        btn.textContent = "Ver tracklist";
        btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
        // Pasamos el div para inyectar info y el botón para borrarlo
        btn.onclick = () => pupi(data, div, btn);
        div.appendChild(btn);
        container.appendChild(div);
    } catch (error) {
        console.error('Error al usar verMaster:', error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function releaseTracklist(data, targetDiv, btn) {
    if (btn) btn.remove();
    if (!targetDiv) return;

    let tracklist = data.tracklist;

    // Si no hay tracklist (común en búsquedas de labels), lo pedimos a la API
    if (!tracklist) {
        const loading = document.createElement("p");
        loading.textContent = "Cargando tracks...";
        targetDiv.appendChild(loading);

        try {
            const token = document.getElementById("myToken").value.trim();
            const response = await fetch(`https://api.discogs.com/releases/${data.id}`, {
                headers: {
                    'User-Agent': 'Galang/1.0',
                    'Authorization': `Discogs token=${token}`
                }
            });
            const fullData = await response.json();
            tracklist = fullData.tracklist;
            loading.remove();
        } catch (error) {
            loading.textContent = "Error al cargar tracks.";
            return;
        }
    }

    // Renderizado del tracklist
    if (tracklist && tracklist.length > 0) {
        const trackDiv = document.createElement("div");
        trackDiv.style.cssText = "clear: both; margin-top: 15px; padding: 10px; background: #eee; border-radius: 5px;";
        trackDiv.innerHTML = "<strong>Tracklist:</strong><br>";

        tracklist.forEach(track => {
            const p = document.createElement("div");
            p.style.fontSize = "0.85em";
            p.style.borderBottom = "1px dotted #ccc";
            p.textContent = `${track.position} - ${track.title} ${track.duration ? '(' + track.duration + ')' : ''}`;
            trackDiv.appendChild(p);
        });
        targetDiv.appendChild(trackDiv);
    } else {
        const p = document.createElement("p");
        p.textContent = "No hay tracklist disponible.";
        targetDiv.appendChild(p);
    }

    // Botón de más detalles
    const btnMore = document.createElement('button');
    btnMore.textContent = "Más detalles";
    btnMore.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
    btnMore.onclick = () => detalleRestanteLabel(data, targetDiv, btnMore);
    targetDiv.appendChild(btnMore);
}

async function detalleRestanteMaster(data, div, btn) {
    const token = document.getElementById("myToken").value.trim();
    if (btn) btn.remove();

    const url_mainRelease = `https://api.discogs.com/releases/${data.main_release}`;
    try {
        const response = await fetch(url_mainRelease, {
            headers: {
                'User-Agent': 'Galang/1.0',
                'Authorization': `Discogs token=${token}`
            }
        });
        if (!response.ok) throw new Error("No se pudo obtener el detalle");
        const mainRelease = await response.json(); // Ahora sí tenemos los datos completos
        // 1. COMPANIES
        if (mainRelease.companies && mainRelease.companies.length > 0) {
            const companies = document.createElement("p");
            // Mapeamos el array para crear una lista de líneas
            const listaCompanies = mainRelease.companies
                .map(c => `${c.entity_type_name}: ${c.name}`)
                .join("<br>");

            companies.innerHTML = `<strong>Companies:</strong><br>${listaCompanies}`;
            div.appendChild(companies);
        }
        // 2. EXTRA ARTISTS (CRÉDITOS)
        if (mainRelease.extraartists && mainRelease.extraartists.length > 0) {
            const credits = document.createElement("p");
            const listaCredits = mainRelease.extraartists
                .map(e => `<strong>${e.role}</strong>: ${e.name}`)
                .join("<br>");

            credits.innerHTML = `<strong>Credits:</strong><br>${listaCredits}`;
            div.appendChild(credits);
        }
        // 3. NOTES
        if (mainRelease.notes) {
            const notes = document.createElement("p");
            // Reemplazamos los saltos de línea (\n) por <br> para que se vean en el HTML
            const notasFormateadas = mainRelease.notes.replace(/\n/g, "<br>");
            notes.innerHTML = `<strong>Notes:</strong><br>${notasFormateadas}`;
            div.appendChild(notes);
        }
        // 4. VIDEOS (Con links a nueva ventana)
        if (mainRelease.videos && mainRelease.videos.length > 0) {
            const videosP = document.createElement("p");
            videosP.innerHTML = `<strong>Videos (YouTube):</strong><br>`;
            mainRelease.videos.forEach(v => {
                const link = document.createElement("a");
                link.href = v.uri;
                link.target = "_blank"; // Abre en nueva ventana
                link.rel = "noopener noreferrer"; // Seguridad
                link.textContent = `▶ ${v.title}`;
                link.style.display = "block"; // Uno debajo del otro
                link.style.color = "#0066cc";
                link.style.textDecoration = "none";
                link.style.marginBottom = "5px";
                // Efecto simple al pasar el mouse
                link.onmouseover = () => link.style.textDecoration = "underline";
                link.onmouseout = () => link.style.textDecoration = "none";
                videosP.appendChild(link);
            });
            div.appendChild(videosP);
        }
    } catch (error) {
        console.error("Error en la búsqueda:", error);
        console.log("bUSCAR Error al conectar con Discogs.");
    }
}

async function detalleRestanteLabel(data, div, btn) {
    const token = document.getElementById("myToken").value.trim();
    if (btn) btn.remove();

    // Determinamos la URL: si es master usamos main_release, si no, el ID del release
    const releaseId = data.type === 'master' ? data.main_release : data.id;
    const url = `https://api.discogs.com/releases/${releaseId}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0',
                'Authorization': `Discogs token=${token}`
            }
        });

        if (!response.ok) throw new Error("No se pudo obtener el detalle del release");
        const fullData = await response.json();

        // 1. COMPANIES
        if (fullData.companies && fullData.companies.length > 0) {
            const companies = document.createElement("p");
            const listaCompanies = fullData.companies
                .map(c => `${c.entity_type_name}: ${c.name}`)
                .join("<br>");
            companies.innerHTML = `<strong>Companies:</strong><br>${listaCompanies}`;
            div.appendChild(companies);
        }

        // 2. EXTRA ARTISTS (CRÉDITOS)
        if (fullData.extraartists && fullData.extraartists.length > 0) {
            const credits = document.createElement("p");
            const listaCredits = fullData.extraartists
                .map(e => `<strong>${e.role}</strong>: ${e.name}`)
                .join("<br>");
            credits.innerHTML = `<strong>Credits:</strong><br>${listaCredits}`;
            div.appendChild(credits);
        }

        // 3. NOTES
        if (fullData.notes) {
            const notes = document.createElement("p");
            const notasFormateadas = fullData.notes.replace(/\n/g, "<br>");
            notes.innerHTML = `<strong>Notes:</strong><br>${notasFormateadas}`;
            div.appendChild(notes);
        }

        // 4. VIDEOS (YouTube)
        // Dentro de detalleRestanteLabel, reemplazamos el bloque de videos:
        if (fullData.videos && fullData.videos.length > 0) {
            const videoContainer = document.createElement("div");
            videoContainer.style.marginTop = "20px";
            videoContainer.innerHTML = `<strong>Previsualización de Audio (YouTube):</strong>`;

            // Tomamos el primer video para incrustar (o podés hacer un bucle para todos)
            const firstVideo = fullData.videos[0];

            // Extraemos el ID del video de la URL de Discogs (usualmente es v=ID o /embed/ID)
            const videoId = firstVideo.uri.split('v=')[1] || firstVideo.uri.split('/').pop();

            const iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "315";
            iframe.src = `https://youtube.com{videoId}`;
            iframe.title = "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = "8px";
            iframe.style.marginTop = "10px";

            videoContainer.appendChild(iframe);
            div.appendChild(videoContainer);
        }
    } catch (error) {
        console.error("Error al obtener detalles adicionales:", error);
        const errorMsg = document.createElement("p");
        errorMsg.style.color = "red";
        errorMsg.textContent = "Error al conectar con la API para cargar detalles.";
        div.appendChild(errorMsg);
    }
}

//-----------------------------------------------------------------

//hay que armar esta foo para que muestre un album desde 
//resultsList
async function obtenerDetalleAlbum(releaseId) {
    const url = `https://api.discogs.com/releases/${releaseId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });
        const data = await response.json();
        const container = document.getElementById('container');
        container.innerHTML = `<h2> ${data.name}</h2>`;
        verRelease(data);
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>Discografia ordenada por </strong>`;
        container.appendChild(idInfo);
    } catch (error) {
        console.error(error);
        console.log("Error al cargar el perfil del artista");
    }
}

async function obtenerDetalleLabel(labelId) {
    const url = `https://api.discogs.com/labels/${labelId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });
        const data = await response.json();
        // Limpiar contenedor y mostrar TODOS los datos
        const container = document.getElementById('container');
        container.innerHTML = `<h2> ${data.name}</h2>`;
        printsLabel(data);
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>Discografia ordenada por año </strong>`;
        container.appendChild(idInfo);

        const btn = document.createElement('button');
        btn.textContent = "Ver albumes editados por año";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => printsLabelReleases(data.id, "container", btn);
        container.appendChild(btn);
    } catch (error) {
        console.error(error);
        console.log("Error al cargar el perfil del Label");
    }
}

function printsLabel(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";

    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = data.name;
    newDiv.appendChild(nombre);

    // Imagen principal
    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        newDiv.appendChild(img);
    }

    // Biografía / Perfil
    if (data.profile) {
        const perfil = document.createElement('p');
        perfil.innerHTML = `<strong>Biografía:</strong><br>${data.profile}`;
        newDiv.appendChild(perfil);
    }

    container.appendChild(newDiv);
}

function printsRelease(data, containerInput) {
    console.log("DATA: " + data)
    const container = (typeof containerInput === 'string')
        ? document.getElementById(containerInput)
        : containerInput;
    if (!container) {
        console.error(`Error: No se encontró el contenedor con ID "${containerInput}"`);
        return;
    }
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";
    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = data.name;
    newDiv.appendChild(nombre);


    console.log(`Título: ${data.title}`);
    console.log(`Año: ${data.year || 'N/A'}`);
    console.log(`Sello: ${data.label || 'N/A'}`);
    console.log(`Tipo: ${data.type}`); // puede ser 'data' o 'master'
    console.log(`ID: ${data.id}`);
    console.log(`URL API: ${data.resource_url}`);

    // Imagen principal
    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        newDiv.appendChild(img);
    }
    // Biografía / Perfil
    if (data.profile) {
        const perfil = document.createElement('p');
        perfil.innerHTML = `<strong>Biografía:</strong><br>${data.profile}`;
        newDiv.appendChild(perfil);
    }
    container.appendChild(newDiv);
}

async function obtenerDetalleRelease(release_id) {
    const url = `https://api.discogs.com/releases/${release_id}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });
        const data = await response.json();
        // Limpiar contenedor y mostrar TODOS los datos
        const container = document.getElementById('container');
        container.innerHTML = `<h2> ${data.name}</h2>`;
        printsRelease(data);
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>Discografia ordenada por año </strong>`;
        container.appendChild(idInfo);

        const btn = document.createElement('button');
        btn.textContent = "Ver albumes editados por año";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => printsLabelReleases(data.id, "container", btn);
        container.appendChild(btn);
    } catch (error) {
        console.error(error);
        console.log("Error al cargar el perfil del Label");
    }
}

async function printsLabelReleases(label_id, containerInput, btn) {
    if (btn) btn.remove();
    const container = (typeof containerInput === 'string')
        ? document.getElementById(containerInput)
        : containerInput;
    if (!container) {
        console.error(`Error: No se encontró el contenedor con ID "${containerId}"`);
        return;
    }
    const token = document.getElementById("myToken").value.trim();
    const url = `https://api.discogs.com/labels/${label_id}/releases?sort=year&sort_order=asc&per_page=100`;
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const newDiv = document.createElement('div');

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });

        const remaining = response.headers.get("X-Discogs-Ratelimit-Remaining");
        console.log(`Peticiones restantes: ${remaining}`);
        alert(`Peticiones restantes: ${remaining}`);

        if (remaining && parseInt(remaining) < 5) {
            console.warn("Límite casi alcanzado. Ralentizando...");
            await delay(2000); // Pausa de 2 segundos si quedan pocas peticiones
        }
        if (response.status === 429) {
            alert("Too Many Requests")
            console.warn("Límite excedido. Esperando 60 segundos...");
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            await delay(60000);
            return;
        }
        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${queryValue})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        const releases = data.releases;
        if (!releases || releases.length === 0) {
            return console.log("El artista no tiene lanzamientos registrados.");
        }
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>Discografia ordenada por año </strong>`;
        container.appendChild(idInfo);
        for (const release of releases) {
            await verReleaseNoFetch(release, "containerReleases");
            // await verRelease(release.id, "containerReleases");

            //console.log(`--- Release #${index + 1} ---`);
            console.log(`Título: ${release.title}`);
            console.log(`Año: ${release.year || 'N/A'}`);
            console.log(`Sello: ${release.label || 'N/A'}`);
            console.log(`Tipo: ${release.type}`); // puede ser 'release' o 'master'
            console.log(`ID: ${release.id}`);
            console.log(`URL API: ${release.resource_url}`);
            console.log(`Style: ${release.styles}`);
        }
        container.appendChild(newDiv);
    } catch (error) {
        console.error("Error al obtener los releases:", error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

function printErrorLog() {
    console.log("errorLog: \n" + errorLog);
}

function exportarHistorialTXT() {
    const historial = JSON.parse(localStorage.getItem('misFavoritos')) || [];

    if (historial.length === 0) return alert("No hay elementos para exportar.");

    // Formateamos el contenido del texto
    let contenidoTxt = "HISTORIAL DE BÚSQUEDAS DISCOGS\n";
    contenidoTxt += "================================\n\n";

    historial.forEach((busqueda, index) => {
        contenidoTxt += `${index + 1}. TÉRMINO: ${busqueda.termino.toUpperCase()}\n`;
        contenidoTxt += `   Categoría: ${busqueda.categoria}\n`;
        contenidoTxt += `   Fecha: ${busqueda.fecha}\n`;
        contenidoTxt += `   Resultados encontrados: ${busqueda.resultados.length}\n`;
        contenidoTxt += `   --------------------------\n`;
    });

    // Creamos el archivo "virtual" (Blob)
    const blob = new Blob([contenidoTxt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Creamos un link invisible para forzar la descarga
    const link = document.createElement("a");
    link.href = url;
    link.download = `historial_discogs_${new Date().getTime()}.txt`;
    link.click();

    // Limpiamos la memoria
    URL.revokeObjectURL(url);
}
//----------------------------------------------------------------
//----------------------------------------------------------------

function guardarBusquedaActual() {
    if (!ultimoDataRecibido) {
        return alert("Primero realizá una búsqueda para poder guardarla.");
    }

    // 1. Obtener el historial existente del localStorage (o un array vacío si no hay nada)
    let historial = JSON.parse(localStorage.getItem('historialBusquedas')) || [];

    // 2. Crear el objeto de la nueva búsqueda
    const nuevaBusqueda = {
        id: crypto.randomUUID(), // Generamos un ID único por búsqueda
        termino: ultimoDataRecibido.termino,
        categoria: ultimoDataRecibido.categoria,
        timestamp: new Date().toLocaleString(), // Formato legible
        resultados: ultimoDataRecibido.data.results,
        paginacion: ultimoDataRecibido.data.pagination
    };

    // 3. Agregar al principio del array (para que la más reciente aparezca arriba)
    historial.unshift(nuevaBusqueda);

    // 4. Opcional: Limitar el historial (ej. guardar solo las últimas 10 búsquedas)
    if (historial.length > 10) {
        historial.pop(); // Borra la más vieja
    }

    // 5. Guardar el array completo de nuevo en localStorage
    localStorage.setItem('historialBusquedas', JSON.stringify(historial));

    alert(`¡Búsqueda de "${nuevaBusqueda.termino}" guardada! (Total: ${historial.length})`);
}

function mostrarHistorial() {

    ["container", "containerReleases", "resultsList"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });

    const historial = JSON.parse(localStorage.getItem('historialBusquedas')) || [];
    const container = document.getElementById("containerReleases");
    container.innerHTML = "<h3>Historial de Búsquedas</h3>";
    if (historial.length === 0) {
        container.innerHTML += "<p>No hay búsquedas guardadas.</p>";
        return;
    }
    historial.forEach(busqueda => {
        const item = document.createElement("div");
        item.style.cssText = "border: 1px solid #ddd; padding: 10px; margin-bottom: 5px; border-radius: 5px; background: #fff; display: flex; justify-content: space-between; align-items: center;";
        item.innerHTML = `
            <div>
                <strong>${busqueda.termino}</strong> <small>(${busqueda.categoria})</small><br>
                <span style="font-size: 0.8em; color: #666;">${busqueda.timestamp}</span>
            </div>
            <div id="acciones-historial"></div>
        `;
        const acciones = item.querySelector("#acciones-historial");
        // Botón Cargar (Verde)
        const btnCargar = document.createElement("button");
        btnCargar.textContent = "Cargar";
        btnCargar.style.cssText = "padding: 5px 10px; cursor: pointer; background: #28a745; color: white; border: none; border-radius: 3px; margin-right: 5px;";
        btnCargar.onclick = () => restaurarBusqueda(busqueda);
        // Botón Borrar Individual (Rojo)
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Eliminar";
        btnBorrar.style.cssText = "padding: 5px 10px; cursor: pointer; background: #dc3545; color: white; border: none; border-radius: 3px;";
        btnBorrar.onclick = () => eliminarBusquedaIndividual(busqueda.id);
        acciones.appendChild(btnCargar);
        acciones.appendChild(btnBorrar);
        container.appendChild(item);
    });
    // Botón para borrar todo el historial (al final)
    const btnBorrarTodo = document.createElement("button");
    btnBorrarTodo.textContent = "Limpiar Todo el Historial";
    btnBorrarTodo.style.cssText = "margin-top: 15px; color: #dc3545; background: none; border: 1px solid #dc3545; cursor: pointer; padding: 5px; width: 100%;";
    btnBorrarTodo.onclick = () => {
        if (confirm("¿Borrar TODO el historial?")) {
            localStorage.removeItem('historialBusquedas');
            mostrarHistorial();
        }
    };
    container.appendChild(btnBorrarTodo);
}

function restaurarBusqueda(busquedaGuardada) {
    // 1. Recomponemos el objeto global para que tus otras funciones sigan funcionando
    ultimoDataRecibido = {
        termino: busquedaGuardada.termino,
        categoria: busquedaGuardada.categoria,
        data: {
            results: busquedaGuardada.resultados,
            pagination: busquedaGuardada.paginacion
        }
    };
    container.innerHTML = "";
    // 2. Llamamos a la función que normalmente renderiza tus resultados de búsqueda
    // Suponiendo que tenés una función llamada 'renderizarResultados'
    renderizarResultados(busquedaGuardada.resultados);

    alert(`Restaurada búsqueda: ${busquedaGuardada.termino}`);
}

function renderizarResultados(resultados) {
    const container = document.getElementById("containerReleases");

    // 1. Limpiamos el contenedor para quitar lo que haya (o el historial)
    container.innerHTML = "";

    // 2. Verificamos si hay resultados para mostrar
    if (!resultados || resultados.length === 0) {
        container.innerHTML = "<p>No se encontraron resultados para esta búsqueda.</p>";
        return;
    }

    // 3. Iteramos sobre los resultados guardados
    // Usamos la categoría almacenada en el objeto global 'ultimoDataRecibido'
    resultados.forEach(item => {
        procesarResultado(item, ultimoDataRecibido.categoria);
    });

    // 4. (Opcional) Si tenés controles de paginación, podrías actualizarlos aquí
    actualizarInterfazPaginacion(ultimoDataRecibido.data.pagination);
}

function actualizarInterfazPaginacion(paginacion) {
    const pauto = document.getElementById("paginationControls");
    const btnPrev = document.getElementById("prevBtn");
    const btnNext = document.getElementById("nextBtn");
    const info = document.getElementById("pageInfo");

    // 1. Si no hay paginación o solo hay 0 items, ocultamos los controles
    if (!paginacion || paginacion.items === 0) {
        pauto.classList.add("hidden");
        return;
    }

    // 2. Mostramos el contenedor de paginación
    pauto.classList.remove("hidden");

    // 3. Actualizamos el texto de "Página X de Y"
    info.innerText = ` Página ${paginacion.page} de ${paginacion.pages} `;

    // 4. Configuramos el botón "Anterior"
    // Se deshabilita si no hay una URL previa en la data de la API
    btnPrev.disabled = !paginacion.urls.prev;
    btnPrev.onclick = () => {
        if (paginacion.page > 1) {
            buscar(paginacion.page - 1);
        }
    };

    // 5. Configuramos el botón "Siguiente"
    // Se deshabilita si no hay una URL siguiente
    btnNext.disabled = !paginacion.urls.next;
    btnNext.onclick = () => {
        if (paginacion.page < paginacion.pages) {
            buscar(paginacion.page + 1);
        }
    };

    // 6. Sincronizamos la variable global de página (si la usas en tu app)
    window.currentPage = paginacion.page;
}

function eliminarBusquedaIndividual(id) {
    if (confirm("¿Estás seguro de eliminar esta búsqueda del historial?")) {
        // 1. Obtener historial actual
        let historial = JSON.parse(localStorage.getItem('historialBusquedas')) || [];

        // 2. Filtrar para excluir el ID seleccionado
        historial = historial.filter(busqueda => busqueda.id !== id);

        // 3. Guardar la nueva lista y refrescar la vista
        localStorage.setItem('historialBusquedas', JSON.stringify(historial));
        mostrarHistorial();
    }
}

//----------------------------------------------------------------
/*
{
  "pagination": {
    "items": 4,
    "page": 1,
    "pages": 1,
    "per_page": 50
  },
  "results": [
    {
      "id": 112,
      "type": "artist",
      "title": "Nirvana",
      "resource_url": "https://discogs.com",
      "thumb": "https://discogs.com"
    },
    {
      "id": 358,
      "type": "label",
      "title": "Sub Pop",
      "resource_url": "https://discogs.com",
      "thumb": "https://discogs.com"
    },
    {
      "id": 13814,
      "type": "master",
      "title": "Nirvana - Nevermind",
      "year": "1991",
      "resource_url": "https://discogs.com",
      "genre": ["Rock"],
      "style": ["Grunge"]
    },
    {
      "id": 154784,
      "type": "release",
      "title": "Nirvana - Nevermind",
      "year": "1991",
      "resource_url": "https://discogs.com",
      "format": ["Vinyl", "LP", "Album"],
      "catno": "DGC-24425",
      "label": ["DGC"]
    }
  ]
}



*/

//------------------------------------------------------------
//------------------------------------------------------------
/* VIEJO
async function verReleaseSmall(value) {
    const token = document.getElementById("myToken").value.trim();
    if (!value) {
        console.error('ID de release no proporcionado');
        return;
    }
    const url = `https://api.discogs.com/releases/${value}`;
    try {
        const resultsList = document.getElementById("resultsList");
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });

        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${queryValue})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${queryValue})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${id})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        const div = document.createElement('div');
        div.style.cssText = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";

        // Imagen (Validación segura)
        if (data.thumb) {
            const img = document.createElement('img');
            img.src = data.thumb;
            img.style.cssText = "max-width: 160px; max-height: 160px; margin-right: 15px; float: left;";
            div.appendChild(img);
        }

        // Nombre Artista (Uso de ?. y valor por defecto)
        const nombre = document.createElement('h3');
        nombre.textContent = data.artists?.[0]?.name || "Artista desconocido";
        div.appendChild(nombre);

        // Título
        const titulo = document.createElement('h3');
        titulo.textContent = data.title || "Sin título";
        div.appendChild(titulo);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${data.id || 'N/A'}`;
        div.appendChild(idInfo);

        // Botón (Validación del ID del artista para la función posterior)
        const artistaId = data.artists?.[0]?.id;
        if (artistaId) {
            const btn = document.createElement('button');
            btn.textContent = "Ver artista";
            btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";
            //ARREGLAR ESTO 
            //      btn.onclick = () => obtenerDetalleRelease(artistaId);
            div.appendChild(btn);
        }

        resultsList.appendChild(div);

    } catch (error) {
        console.error('Error al buscar VER:', error);
        console.log('Hubo un error al procesar los datos de Discogs.');
    }
}
*/

/* VIEJO
async function verLabelSmall(value) {
    const URL = value.toString();
    const token = document.getElementById("myToken").value.trim();
    const resultsList = document.getElementById("resultsList");
    try {
        const response = await fetch(URL, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });

        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${id})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${id})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.className = "label-card";
        div.style = "border: 2px solid #0066cc; margin: 15px 0; padding: 15px; border-radius: 8px; background-color: #f9f9f9; overflow: hidden;";

        // Placeholder genérico si no hay imagen
        const imgUrl = data.images?.[0]?.resource_url || 'https://placeholder.com';
        const name = data.name || 'Nombre no disponible';

        // Limpiar un poco el perfil (Discogs usa tags como [l=...] o [a=...])
        const profile = data.profile ? `<p>${data.profile.substring(0, 250)}...</p>` : '<p>Sin descripción.</p>';

        div.innerHTML = `
            <img src="${imgUrl}" style="max-width: 160px; max-height: 160px; margin-right: 15px; float: left; border-radius: 4px;">
            <div style="display: flow-root;">
                <h3 style="margin-top: 0;">${name}</h3>
                <p><strong>ID:</strong> ${data.id}</p>
                ${profile}
                <button id="btn-${data.id}" style="margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Ver sello
                </button>
            </div>
        `;

        resultsList.appendChild(div);
        document.getElementById(`btn-${data.id}`).onclick = () => obtenerDetalleLabel(data.id, container);

    } catch (error) {
        console.error('Error al buscar sello:', error);
        console.log('No se pudo cargar la información del sello. Verifica el ID.');
    }
}

*/

/* VIEJO

async function verMasterSmall(value, "resultsList") {
    const token = document.getElementById("myToken").value.trim();
    const container = document.getElementById(containerId);
    try {
        const response = await fetch(value, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${token}`
            }
        });
        if (response.status === 404) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`Aviso: ${errorData.message} "\n" (ID: ${id})`);
            errorLog.push(`ERROR 404: ${errorData.message} "\n" (ID: ${id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (response.status === 429) {
            const errorData = await response.json(); // Leemos {"message": "Artist not found."}
            console.log(`429 Aviso: ${errorData.message} (ID: ${id})`);
            errorLog.push(`ERROR 429: ${errorData.message} "\n" (ID: ${id})\n`);
            return; // Salimos de la función sin lanzar un error "grave" al catch
        }
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";
        div.style.overflow = "hidden";
        // Imagen (si existe)
        if (data.images && data.images.length > 0) {
            const img = document.createElement('img');
            img.src = data.images[0].resource_url;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }
        // Titulo + year
        const titulo = document.createElement('h3');
        titulo.textContent = `(${data.year || 'N/A'}) ${data.title}`;
        div.appendChild(titulo);
        // nombre
        const nombre = document.createElement('p');
        nombre.style.fontWeight = "bold";
        nombre.textContent = "Artista: " + data.artists.map(a => a.name).join(", ");
        div.appendChild(nombre);
        // ID
        const idInfo = document.createElement('h3');
        idInfo.textContent = "ID " + "(" + data.id + ")";
        div.appendChild(idInfo);

        const btn = document.createElement('button');
        btn.textContent = "Ver detalle del album";
        btn.style.cssText = "margin-top: 10px; padding: 8px 16px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer;";

        // Pasamos el div para inyectar info y el botón para borrarlo
        btn.onclick = () => verMaster(data, "resultsList", btn);
        div.appendChild(btn);

        // ESTA ES LA ÚNICA VEZ QUE SE HACE APPEND AL CONTAINER
        container.appendChild(div);

    } catch (error) {
        console.error('Error al usar verMaster:', error);
        console.log('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
    
}
/**/