var listado_Total = [];

const myToken = document.getElementById("myToken");
const strToken = `${myToken.value.toString()}`;

// ====================== FUNCIÓN PRINCIPAL ======================
async function buscarArtistas(value) {

    if (!value || value.trim() === "") {
        alert("Por favor ingresa el nombre del artista o palabras clave");
        return;
    }
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(value)}&type=artist&per_page=50`;

    console.log("Buscando:", url);

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `<h2>Resultados para "${value}" (${data.results.length} artistas)</h2>`;

        if (data.results && data.results.length > 0) {
            mostrarListaArtistas(data.results, resultsList);
        } else {
            resultsList.innerHTML += `<p>No se encontraron artistas con "${value}".</p>`;
        }

    } catch (error) {
        console.error('Error al buscar artistas:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function buscarReleases(value) {

    if (!value || value.trim() === "") {
        alert("Por favor ingresa el nombre del release o palabras clave");
        return;
    }
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(value)}&type=releases&per_page=50`;

    console.log("Buscando release:", url);

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`

            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `<h2>Resultados para "${value}" (${data.results.length} RELEASES)</h2>`;

        if (data.results && data.results.length > 0) {
            mostrarListaReleases(data.results, resultsList);
            //alert("data.results: " + data.results[0].id + "\ndata.title: " + data.results[0].title)
        } else {
            resultsList.innerHTML += `<p>No se encontraron RELEASES con "${value}".</p>`;
        }

    } catch (error) {
        console.error('Error al buscar RELEASES:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function buscarTracks(value) {

    if (!value || value.trim() === "") {
        alert("Por favor ingresa el nombre del release o palabras clave");
        return;
    }
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(value)}&type=releases&per_page=50`;
    console.log("Buscando release:", url);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `<h2>Resultados para "${value}" (${data.results.length} RELEASES)</h2>`;
        if (data.results && data.results.length > 0) {
            mostrarListaReleases(data.results, resultsList);
            //alert("data.results: " + data.results[0].id + "\ndata.title: " + data.results[0].title)
        } else {
            resultsList.innerHTML += `<p>No se encontraron RELEASES con "${value}".</p>`;
        }
    } catch (error) {
        console.error('Error al buscar RELEASES:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function buscarLabels(value) {
    //alert("labelSearch.value en buscarLabels : " + value);
    if (!value || value.trim() === "") {
        alert("Por favor ingresa el nombre del release o palabras clave");
        return;
    }
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(value)}&type=labels&per_page=50`;
    console.log("Buscando labels:", url);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `<h2>Resultados para "${value}" (${data.results.length} LABELS)</h2>`;
        if (data.results && data.results.length > 0) {
            mostrarListaLabels(data.results, resultsList);
            //alert("data.results: " + data.results[0].id + "\ndata.title: " + data.results[0].title)
        } else {
            resultsList.innerHTML += `<p>No se encontraron RELEASES con "${value}".</p>`;
        }
    } catch (error) {
        console.error('Error al buscar RELEASES:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function buscarGenres(value) {
    //alert("GenreSearch.value en buscarGenres : " + value);

    if (!value || value.trim() === "") {
        alert("Por favor ingresa el nombre del Genre o palabras clave");
        return;
    }
    //const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(value)}&type=releases&per_page=50`;
    const url = `https://api.discogs.com/database/search?q=${value}&{?genre,style}`
    console.log("Buscando Genres:", url);




    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = `<h2>Resultados para "${value}" (${data.results.length} GENRES)</h2>`;
        if (data.results && data.results.length > 0) {
            mostrarListaGenres(data.results, resultsList);
            //alert("data.results: " + data.results[0].id + "\ndata.title: " + data.results[0].title)
        } else {
            resultsList.innerHTML += `<p>No se encontraron GENRES con "${value}".</p>`;
        }
    } catch (error) {
        console.error('Error al buscar GENRES:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

async function buscar() {
    buscarPRO();
    //console.log("token: " + `${myToken.value.toString()}`);
    //console.log("token2: " + myToken);

    /*
        const artistSearch = document.getElementById("artistSearch");
        const releaseSearch = document.getElementById("releaseSearch");
        const trackSearch = document.getElementById("trackSearch");
        const labelSearch = document.getElementById("labelSearch");
        const genreSearch = document.getElementById("genreSearch");
        const styleSearch = document.getElementById("styleSearch");
        const yearSelect = document.getElementById("yearSelect");
        /*
            alert("artistSearch: " + artistSearch.value + "\n" + "releaseSearch: " + releaseSearch.value + "\n"
                + "trackSearch: " + trackSearch.value + "\n" + "labelSearch: " + labelSearch.value + "\n"
                + "genreSearch: " + genreSearch.value + "\n" + "styleSearch: " + styleSearch.value + "\n"
                + "yearSelect: " + yearSelect.value + "\n");
     */
    /*
        if (artistSearch.value != null && artistSearch.value != "" && artistSearch.value != "undefined") {
            //  alert("DENTRO DE artistSearch");
            buscarArtistas(artistSearch.value);
        }
        else if (releaseSearch.value != null && releaseSearch.value != "" && releaseSearch.value != "undefined") {
            //alert("DENTRO DE releaseSearch");
            buscarReleases(releaseSearch.value);
        }
        else if (trackSearch.value != null && trackSearch.value != "" && trackSearch.value != "undefined") {
            //alert("DENTRO DE trackSearch");
            buscarTracks(trackSearch.value);
        }
        else if (labelSearch.value != null && labelSearch.value != "" && labelSearch.value != "undefined") {
            buscarLabels(labelSearch.value);
        }
        else if (genreSearch.value != null && genreSearch.value != "" && genreSearch.value != "undefined") {
            buscarGenres(genreSearch.value);
            alert("DENTRO DE buscarGenres");
    
        }
        else if (styleSearch.value != null && styleSearch.value != "" && styleSearch.value != "undefined") {
            buscarStyles(styleSearch.value);
            alert("DENTRO DE styleSearch");
    
        }
        else if (yearSelect.value != null && yearSelect.value != "" && yearSelect.value != "undefined") {
            buscarYears(styleSearch.value);
            alert("DENTRO DE buscarYears");
    
        }
        else (alert(" ERROR SALGO POR ABAJO "));
        */
}

async function buscarPRO() {

    //Si ya tienes el ID del artista, el fetch debe dirigirse a:
    //GET https://api.discogs.com/artists/{artist_id}/releases

    //Para obtener los IDs de un sello discográfico, utiliza:
    //GET https://discogs.com{label_id}/releases
    const baseUrl = "https://api.discogs.com/database/search";
    /*
     Información Principal
     item.id: El identificador único de Discogs.
     item.title: El título completo (generalmente "Artista - Título").
     item.type: El tipo de resultado (release, master, artist o label).
     item.year: Año de lanzamiento (solo para releases y masters).
     item.country: País de la edición.
     item.uri: El path relativo de la página en Discogs (ej: /release/12345).
     item.resource_url: La URL completa de la API para obtener el detalle de ese ítem.
     Información de Identificación y Sellos
     item.catno: Número de catálogo.
     item.barcode: Array con los códigos de barras asociados.
     item.label: Array con los nombres de los sellos discográficos involucrados.
     item.master_id: El ID del "Master" al que pertenece (si es una release).
     Contenido Musical
     item.genre: Array de géneros (ej: ["Reggae"]).
     item.style: Array de estilos (ej: ["Dub", "Roots Reggae"]).
     item.format: Array de descripciones de formato (ej: ["Vinyl", "LP", "Album"]).
     Multimedia y Comunidad
     item.thumb: URL de la imagen en miniatura (50x50 aprox).
     item.cover_image: URL de la imagen de portada más grande.
     item.community: Objeto que contiene estadísticas de want (lo quieren) y have (lo tienen).
     */

    const artistSearch = document.getElementById("artistSearch");
    const artistString = `${artistSearch.value.toString()}`;
    alert(artistString);

    const releaseSearch = document.getElementById("releaseSearch");
    const releaseString = `${releaseSearch.value.toString()}`;
    alert(releaseString);

    const trackSearch = document.getElementById("trackSearch");
    const trackString = `${trackSearch.value.toString()}`;
    alert(trackString);

    const labelSearch = document.getElementById("labelSearch");
    const labelString = `${labelSearch.value.toString()}`;
    alert(labelString);

    const params = new URLSearchParams({
        //track: "version",
        //style: "dub",
        // artist: "aswad",
        artist: `${artistString}`,
        release: `${releaseString}`,
        //format: "Vinyl",
        //track: "the wall",
        //country: "jamaica",
        //year: "1970",      // Podés probar con "197*" para toda la década
        type: "release",   // Solo ediciones individuales, no artistas o sellos
        per_page: "100",     // Control de cantidad
        //page: "15",         // Control de página
        token: `${myToken.value.toString()}`  // Autenticación  
    });

    const url = `${baseUrl}?${params.toString()}`;
    //alert(url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken.value}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        const data = await response.json();

        // REEMPLAZO DEL forEach POR for...of
        for (const item of data.results) {
            // Ahora podés usar await aquí dentro si muestralista es asíncrona
            await muestralista(item.resource_url);

            // Opcional: Agregar un pequeño delay si muestralista hace un fetch
            // await new Promise(resolve => setTimeout(resolve, 1100));
        }

        //const data = await response.json();
        // Imprimimos los títulos de los resultados encontrados
        /*
        data.results.forEach(item => {
         //   console.log(` ${item.resource_url} "\n"${item.title}"\n" (${item.year || 'N/A'})"\n" ID: ${item.id}"\n" catno: ${item.catno} "\n" type: ${item.type} "\n" track: ${item.track} "\n"`);
            muestralista(`${item.resource_url}`);
        });
        */
        return data.results;

    } catch (error) {
        console.error("Hubo un error al buscar:", error);
    }
}

// ====================== MOSTRAR LISTA DE RESULTADOS ======================

async function muestralista(item) {
    const url = `${item}`;
    //console.log(url);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        const data = await response.json();
        printsData(data);
    } catch (error) {
        console.error(error);
        //alert("Error al cargar el perfil del RELEASE muestralista");
    }
}

function mostrarListaArtistas(artistas, container) {
    artistas.forEach(artista => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        // Imagen (si existe)
        if (artista.thumb) {
            const img = document.createElement('img');
            img.src = artista.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        // Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = artista.title;
        div.appendChild(nombre);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${artista.id}`;
        div.appendChild(idInfo);

        // Botón para ver TODOS los datos completos
        const btn = document.createElement('button');
        btn.textContent = "Ver perfil completo del artista";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => obtenerDetalleArtista(artista.id);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

function mostrarListaReleases(releases, container) {
    releases.forEach(release => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        // Imagen (si existe)
        if (release.thumb) {
            //alert("release.thumb")
            const img = document.createElement('img');
            img.src = release.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        // Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = release.title;
        div.appendChild(nombre);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${release.id}`;
        div.appendChild(idInfo);

        // Botón para ver TODOS los datos completos
        const btn = document.createElement('button');
        btn.textContent = "Ver release";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => obtenerDetalleRelease(release.id);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

function mostrarListaLabels(labels, container) {
    labels.forEach(label => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        // Imagen (si existe)
        if (label.thumb) {
            //alert("label.thumb")
            const img = document.createElement('img');
            img.src = label.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        // Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = label.name;
        div.appendChild(nombre);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${label.id}`;
        div.appendChild(idInfo);

        // Botón para ver TODOS los datos completos
        const btn = document.createElement('button');
        btn.textContent = "Ver label";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => obtenerDetalleLabel(label.id);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

function mostrarListaGenres(genres, container) {
    genres.forEach(genre => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        // Imagen (si existe)
        if (genre.thumb) {
            //alert("genre.thumb")
            const img = document.createElement('img');
            img.src = genre.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        // Nombre
        const nombre = document.createElement('h3');
        nombre.textContent = genre.title;
        div.appendChild(nombre);

        // ID
        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${genre.id}`;
        div.appendChild(idInfo);

        // Botón para ver TODOS los datos completos
        const btn = document.createElement('button');
        btn.textContent = "Ver genre";
        btn.style.marginTop = "10px";
        btn.style.padding = "8px 16px";
        btn.style.backgroundColor = "#0066cc";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.cursor = "pointer";
        btn.onclick = () => obtenerDetalleGenre(genre.id);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

// ====================== OBTENER Y MOSTRAR DETALLE COMPLETO ======================
async function obtenerDetalleArtista(artistId) {
    const url = `https://api.discogs.com/artists/${artistId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        const data = await response.json();
        // Limpiar contenedor y mostrar TODOS los datos
        const container = document.getElementById('container');
        container.innerHTML = `<h2>Perfil completo: ${data.name}</h2>`;
        printsArtista(data);
    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del artista");
    }
}

async function obtenerDetalleRelease(releaseId) {
    const url = `https://api.discogs.com/releases/${releaseId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        const data = await response.json();
        printsData(data);
    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del RELEASE  obtenerDetalleRelease");
    }
}

async function obtenerDetalleLabel(labelId) {
    const url = `https://api.discogs.com/labels/${labelId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        const data = await response.json();
        printsLabel(data);
    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del RELEASE obtenerDetalleLabel");
    }
}

async function obtenerDetalleGenres(releaseId) {
    const url = `https://api.discogs.com/releases/${releaseId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
                'Authorization': `Discogs token=${myToken}`
            }
        });
        const data = await response.json();
        printsGenre(data);   // ← Función que muestra todos los datos (ver abajo)
    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del RELEASE obtenerDetalleGenres");
    }
}
// ====================== FUNCIÓN QUE MUESTRA TODOS LOS DATOS DEL ARTISTA ======================
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

function printsRelease(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";
    //alert("data title: " + data.title)
    //alert("data artist: " + data.artists_sort)

    // Release
    const release_title = document.createElement('h2');
    release_title.textContent = data.title;
    newDiv.appendChild(release_title);


    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = data.artists_sort;
    newDiv.appendChild(nombre);

    // Imagen principal
    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        newDiv.appendChild(img);
    }
    container.appendChild(newDiv);
}

function printsData(data) {
    //console.log(data);
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";

    // ======================
    // HELPERS
    // ======================
    const addBreak = (parent) => {
        parent.appendChild(document.createElement("br"));
    };

    // ←←← REFINED addSection (handles arrays automatically!)
    const addSection = (parent, label = '', content = '', options = {}) => {
        const { separator = ', ', formatter = null } = options;

        const p = document.createElement("p");
        if (label) p.appendChild(document.createTextNode(label));

        if (content != null && content !== '') {
            let finalText = '';
            if (Array.isArray(content)) {
                if (formatter && typeof formatter === 'function') {
                    finalText = content.map(formatter).join(separator);
                } else {
                    finalText = content.join(separator);
                }
            } else {
                finalText = String(content);
            }
            if (finalText) p.appendChild(document.createTextNode(finalText));
        }

        parent.appendChild(p);
        return p;
    };

    // ======================
    // CONTENT STARTS HERE
    // ======================
    const imgAlbum = document.createElement('img');
    imgAlbum.src = data.thumb;
    newDiv.appendChild(imgAlbum);
    addBreak(newDiv);

    // Artist ID
    /*
    addSection(newDiv, "data.artists[0].id: -- " + data.artists[0].name + " - ");
    addSection(newDiv, "data.id" + " " + data.id);
    addBreak(newDiv);
*/
    // Artist + Title (simple)
    addSection(newDiv, "(" + data.year + ")" + data.title + " - " + data.artists[0].name);
    //addSection(newDiv, " " + data.title);
    addBreak(newDiv);

    // Labels (array of objects)
    addSection(newDiv, "Labels: ", data.labels, {
        formatter: l => `${l.name} - ${l.catno}`
    });
    addBreak(newDiv);

    // Formats (array of objects)
    addSection(newDiv, "Formats: ", data.formats, {
        formatter: f => `${f.qty} ${f.name} ${f.descriptions || ''} ${f.text || ''}`.trim()
    });
    addBreak(newDiv);

    // Simple fields
    addSection(newDiv, "Country: ", data.country);
    addSection(newDiv, "Published: ", data.year);

    // Genres + Styles (simple string arrays)
    addSection(newDiv, "Genre: ", data.genres);
    addBreak(newDiv);
    addSection(newDiv, "Styles: ", data.styles);
    addBreak(newDiv);

    // ======================
    // TRACKLIST (still needs per-line breaks)
    // ======================
    const tracklistP = addSection(newDiv, "Tracklist");
    addBreak(tracklistP);

    data.tracklist.forEach(t => {
        tracklistP.appendChild(document.createTextNode(
            `${t.position} ${t.title} ${t.duration}`
        ));
        addBreak(tracklistP);
    });
    addBreak(newDiv);

    // ======================
    // COMPANIES (multi-line)
    // ======================
    if (data.companies?.length) {
        const companiesP = addSection(newDiv);
        data.companies.forEach(c => {
            companiesP.appendChild(document.createTextNode(
                `${c.entity_type_name}: ${c.name}`
            ));
            addBreak(companiesP);
        });
        addBreak(newDiv);
    }

    // ======================
    // CREDITS / EXTRA ARTISTS (multi-line)
    // ======================
    if (data.extraartists?.length) {
        addSection(newDiv, "CREDITOS: ");
        addBreak(newDiv);

        const creditsP = addSection(newDiv);
        data.extraartists.forEach(e => {
            creditsP.appendChild(document.createTextNode(`${e.role} - ${e.name}`));
            addBreak(creditsP);
        });
        addBreak(newDiv);
    }

    // ======================
    // NOTES
    // ======================
    if (data.notes != null && data.notes !== "undefined") {
        const notesP = addSection(newDiv, "Notes: ");
        addBreak(notesP);
        notesP.appendChild(document.createTextNode(data.notes));
        addBreak(newDiv);
    }

    // Final break + append to page
    addBreak(newDiv);
    //document.getElementById('container').innerHTML = '';
    document.getElementById('container').appendChild(newDiv);
}

function printsLabel(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";
    //alert("data title: " + data.name)

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
    container.appendChild(newDiv);
}

function printsgenre(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "15px";

    // genre
    const genre_title = document.createElement('h2');
    genre_title.textContent = data.title;
    newDiv.appendChild(genre_title);


    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = data.artists_sort;
    newDiv.appendChild(nombre);

    // Imagen principal
    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        newDiv.appendChild(img);
    }
    container.appendChild(newDiv);
}