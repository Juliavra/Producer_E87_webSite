const secret_token = document.getElementById("secret_token");

//var ListadoCabeza = [10196996, 4272497, 1486213];
/*
var ListadoCabeza = [
10196996,
4272497,
1486213,
31490654,
3454299,
5689313,
8321804,
14104857,
8321789
];
*/
/*
var ListadoCabeza = [
10196996,
4272497,
1486213,
31490654,
3454299,
5689313,
8321804,
14104857,
8321789,
16110084,
1404531,
22985429,
2315608,
5607771,
2033763,
5707793,
9550137,
3402015,
4865952,
8005820,
10174882,
5595705,
14728355,
5056552,
31216216,
15686032,
4215387,
13648339,
4644006,
9820679,
18265390,
14259898,
6729851,
3808531,
3713929,
11374228,
10115636,
2073282,
30888723,
8750296,
21360442,
11600834,
4862090,
4079686,
5464870,
17541484,
8496493,
13079633,
3995466,
11180572,
11468705,
7599310,
17852374,
31217338,
31155104,
9421763,
8786433,
12556839,
8164295,
14729034,
36153139,
7782909,
5650827,
31269695,
13801830,
11275796,
5828596,
5411139,
5396509,
36098917,
6059167,
4466540,
5782403,
10557503,
11072836,
8750316,
5852681,
6124907,
6849618,
6339198,
1161521,
7637219,
10489736,
9395326,
31497818,
9764731,
5146923,
31319967,
17248324,
4853195,
2183473,
10557571,
2448918,
4763374,
9305215,
4694540,
9285119,
4460253,
9338662,
5075940,
14238501,
13310833,
11834259,
10389738,
16130380,
34361572,
10075145,
2344249,
929050,
4436759,
3778433,
6701791,
12287757,
7602356,
4269271,
5012817,
6731147,
10723402,
8750276,
3158871,
2814963,
36795310,
3055380,
26294321,
14774714,
10569752,
5361811,
3288707,
7062726,
34264750,
6152333,
609438,
15654245,
7681002,
3297057,
36153520,
4971613,
13926671,
2223448,
23033033,
14894544,
5205814,
7519299,
11074702,
6788779,
11500795,
4417137,
24869516,
5644699,
9655831,
3344346,
23031791,
10980480,
4014669,
29113198,
10952629,
31890127,
15744698,
8696122,
5837019,
13584711,
2320230,
6716765,
11079785,
14998655,
13669451,
15125281,
13938853,
4984570
];
*/

/*
for (i = 0; i < ListadoCabeza.length; i++) {
    muestraListado(ListadoCabeza[i]);
    console.log("i: " + i + " - " + ListadoCabeza[i])
}
*/
const token = ''; // Generate at ://discogs.com
//const url = 'https://api.discogs.com/releases/509137';
//const url = 'https://api.discogs.com/releases/2681099';

/*
fetch(url, {
    headers: {
        'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
        'Authorization': `Discogs token=${token}`
    }
})
    .then(response => response.json())
    .then(data => printsData(data))
    .catch(error => console.error('Error:', error));
*/


function printsData(data) {
    console.log(data)

    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";

    function addBreak(parent) {
        const br = document.createElement("br");
        parent.appendChild(br);
    }

    const imgAlbum = document.createElement('img');
    imgAlbum.src = data.thumb;
    newDiv.appendChild(imgAlbum);

    addBreak(newDiv);

    const paragraph = document.createElement("p");
    const text = document.createTextNode(data.artists[0].name + " - ");
    paragraph.appendChild(text);
    newDiv.appendChild(paragraph);

    const title = document.createElement("p");
    const albumTitle = document.createTextNode(" " + data.title);
    title.appendChild(albumTitle);
    newDiv.appendChild(title);

addBreak(newDiv);

const labels = document.createElement("p");
    const labelsHead = document.createTextNode("Labels: ");
    labels.appendChild(labelsHead);

    for (i = 0; i < data.labels.length; i++) {
        const labelTitle = document.createTextNode(data.labels[i].name + " - " + data.labels[i].catno + ", ");
        labels.appendChild(labelTitle);
    };
    newDiv.appendChild(labels);

    addBreak(newDiv);
    const formats = document.createElement("p");
    const formatsHead = document.createTextNode("Formats: ");
    formats.appendChild(formatsHead);

    for (i = 0; i < data.formats.length; i++) {
        //const formatTitle = document.createTextNode(data.formats[i].name + ", ");
        const formatTitle = document.createTextNode(`${data.formats[i].qty} ${data.formats[i].name} ${data.formats[i].descriptions} ${data.formats[i].text} ${", "}`);
        formats.appendChild(formatTitle);
    };
    newDiv.appendChild(formats);

addBreak(newDiv);
    const country = document.createElement("p");
    const countryTitle = document.createTextNode("Country: " + data.country);
    country.appendChild(countryTitle);
    newDiv.appendChild(country);
  addBreak(newDiv);
    const year = document.createElement("p");
    const yearTitle = document.createTextNode("Published: " + data.year);
    year.appendChild(yearTitle);
    newDiv.appendChild(year);

    addBreak(newDiv);
  
    const genres = document.createElement("p");
    const genresHead = document.createTextNode("Genre: ");
    genres.appendChild(genresHead);
    for (i = 0; i < data.genres.length; i++) {
        const genresTitle = document.createTextNode(data.genres[i] + ", ");
        genres.appendChild(genresTitle);
    };
    newDiv.appendChild(genres);
    addBreak(newDiv);
  
    const styles = document.createElement("p");
    const stylesHead = document.createTextNode("Styles: ");
    styles.appendChild(stylesHead);
    for (i = 0; i < data.styles.length; i++) {
        const stylesTitle = document.createTextNode(data.styles[i] + ", ");
        styles.appendChild(stylesTitle);
    };
    newDiv.appendChild(styles);
addBreak(newDiv);
    const tracklist = document.createElement("p");
    const tracklistHead = document.createTextNode("Tracklist");
    tracklist.appendChild(tracklistHead);
    addBreak(tracklist);
    for (i = 0; i < data.tracklist.length; i++) {
        const tracklistTitle = document.createTextNode(`${data.tracklist[i].position} ${data.tracklist[i].title} ${data.tracklist[i].duration}`);
        tracklist.appendChild(tracklistTitle);
        addBreak(tracklist);
    };
    newDiv.appendChild(tracklist);
    addBreak(newDiv);
    if (data.extraartists != null) {
        const companies = document.createElement("p");
        for (i = 0; i < data.companies.length; i++) {
            const companiesTitle = document.createTextNode(`${data.companies[i].entity_type_name} ${": "} ${data.companies[i].name}`);
            addBreak(companies);
            companies.appendChild(companiesTitle);
        };
        newDiv.appendChild(companies);
    }
addBreak(newDiv);
    if (data.extraartists != null) {
        const CREDITOS = document.createElement("p");
        const CREDITOSHead = document.createTextNode("CREDITOS: ");
        CREDITOS.appendChild(CREDITOSHead);
        newDiv.appendChild(CREDITOS);
addBreak(newDiv);
        const extraartists = document.createElement("p");
        for (i = 0; i < data.extraartists.length; i++) {
            const extraartistsTitle = document.createTextNode(`${data.extraartists[i].role} ${' - '} ${data.extraartists[i].name}`);
            extraartists.appendChild(extraartistsTitle);
            addBreak(extraartists);
        };
        newDiv.appendChild(extraartists);
    }

    if (data.notes != "undefined" && data.notes != null) {
        const notes = document.createElement("p");
        const notesHead = document.createTextNode("Notes: ");
        notes.appendChild(notesHead);
        addBreak(notes);
        const notesFull = document.createTextNode(`${data.notes}`);
        notes.appendChild(notesFull);
        newDiv.appendChild(notes);
    }
    addBreak(newDiv);    
    document.getElementById('container').appendChild(newDiv);
}//CLOSES PrintsData

/*
const request = require('request');
const options = {
url: 'https://api.discogs.com/oauth/identity',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Authorization': 'OAuth oauth_consumer_key="OAUTH_CONSUMER_KEY",
oauth_nonce="' + Date.now() + '",oauth_token="OAUTH_TOKEN_RECEIVED_FROM_STEP_4",
oauth_signature="YOUR_CONSUMER_SECRET&OAUTH_TOKEN_SECRET_RECEIVED_FROM_STEP_4", 
oauth_signature_method="PLAINTEXT",  oauth_timestamp="' + Date.now() +'" ', 
'User-Agent': 'YOUR_USER_AGENT/1.0'
} 
};

request(options, (err, res, body)=>{
    if(!err && res.statusCode == 200){
    console.log(JSON.parse(body));
    }
});
*/

// Tus credenciales de Discogs
const TOKEN = 'TU_PERSONAL_ACCESS_TOKEN';
const URL = 'https://api.discogs.com';
/*
async function buscarEnDiscogs(query) {
    try {
        const response = await fetch(`${URL}/database/search?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                // La autenticación se pasa en la cabecera Authorization
                'Authorization': `Discogs token=${TOKEN}`,
                'Content-Type': 'application/json',
                // Discogs requiere un User-Agent personalizado
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al consultar Discogs:', error);
    }
}
*/
// Uso de la función
//buscarEnDiscogs('Nirvana Nevermind');

function releaseSearch() {
    const release_number = document.getElementById("release_number");
    var release_number_trim = release_number.value.trim();
    //    console.log(release_number_trim);
    const newURL = "https://api.discogs.com/releases/" + release_number_trim;
    console.log(newURL);
    fetch(newURL, {
        headers: {
            'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
            'Authorization': `Discogs token= `
        }
    })
        .then(response => response.json())
        .then(data => printsData(data))
        .catch(error => console.error('Error:', error));

}

function muestraListado(number) {
    const newURL = "https://api.discogs.com/releases/" + number;
    console.log(newURL);
    fetch(newURL, {
        headers: {
            'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
            'Authorization': `Discogs token= `
        }
    })
        .then(response => response.json())
        .then(data => printsData(data))
        .catch(error => console.error('Error:', error));

}

/*
function printsData(data) {
    console.log(data);

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

    // Artist + Title (simple)
    addSection(newDiv, data.artists[0].name + " - ");
    addSection(newDiv, " " + data.title);
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
    document.getElementById('container').appendChild(newDiv);
}
*/
//GROK
/*
// ====================== FUNCIÓN PRINCIPAL ======================
async function buscarArtistas(termino) {
    if (!termino || termino.trim() === "") {
        alert("Por favor ingresa el nombre del artista o palabras clave");
        return;
    }

    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(termino)}&type=artist&per_page=50`;

    console.log("Buscando:", url);

    try {
        const response = await fetch(url, {
            headers: {
                // ←←← Usa tu User-Agent personalizado (obligatorio)
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        const container = document.getElementById('container');
        container.innerHTML = `<h2>Resultados para "${termino}" (${data.results.length} artistas)</h2>`;

        if (data.results && data.results.length > 0) {
            mostrarListaArtistas(data.results, container);
        } else {
            container.innerHTML += `<p>No se encontraron artistas con "${termino}".</p>`;
        }

    } catch (error) {
        console.error('Error al buscar artistas:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

// ====================== MOSTRAR LISTA DE RESULTADOS ======================
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

// ====================== OBTENER Y MOSTRAR DETALLE COMPLETO ======================
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
        container.innerHTML = `<h2>Perfil completo: ${data.name}</h2>`;

        printsArtista(data);   // ← Función que muestra todos los datos (ver abajo)

    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del artista");
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
*/
/////////////////////////////////////////////////////////
/*
// ====================== VARIABLES GLOBALES ======================
let lastSearchTerm = '';
let lastSearchResults = [];

// ====================== LOCALSTORAGE HELPERS ======================
function saveToLocalStorage() {
    localStorage.setItem('lastSearchTerm', lastSearchTerm);
    localStorage.setItem('lastSearchResults', JSON.stringify(lastSearchResults));
}

function loadFromLocalStorage() {
    const savedTerm = localStorage.getItem('lastSearchTerm');
    const savedResultsStr = localStorage.getItem('lastSearchResults');

    if (savedTerm && savedResultsStr) {
        lastSearchTerm = savedTerm;
        lastSearchResults = JSON.parse(savedResultsStr);

        const container = document.getElementById('container');
        container.innerHTML = `
            <h2>✅ Resultados guardados para "${lastSearchTerm}" 
                (${lastSearchResults.length} artistas)</h2>
            <button onclick="clearLocalStorage()" 
                    style="margin-bottom:15px; padding:8px 16px; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer;">
                🗑️ Borrar resultados guardados
            </button>
        `;

        if (lastSearchResults.length > 0) {
            mostrarListaArtistas(lastSearchResults, container);
        }
    }
}

function clearLocalStorage() {
    if (confirm("¿Estás seguro de borrar los resultados guardados?")) {
        localStorage.removeItem('lastSearchTerm');
        localStorage.removeItem('lastSearchResults');
        lastSearchTerm = '';
        lastSearchResults = [];
        const container = document.getElementById('container');
        container.innerHTML = `<p style="color:#666;">✅ Resultados borrados. Realiza una nueva búsqueda.</p>`;
    }
}

// ====================== FUNCIÓN PRINCIPAL DE BÚSQUEDA ======================
async function buscarArtistas(termino) {
    if (!termino || termino.trim() === "") {
        alert("Por favor ingresa el nombre del artista o palabras clave");
        return;
    }

    lastSearchTerm = termino;
    
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(termino)}&type=artist&per_page=50`;

    console.log("Buscando artistas:", url);

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        lastSearchResults = data.results || [];

        // ←←← GUARDAMOS en localStorage
        saveToLocalStorage();

        const container = document.getElementById('container');
        container.innerHTML = `<h2>Resultados para "${termino}" (${lastSearchResults.length} artistas encontrados)</h2>`;

        if (lastSearchResults.length > 0) {
            mostrarListaArtistas(lastSearchResults, container);
        } else {
            container.innerHTML += `<p>No se encontraron artistas con "${termino}".</p>`;
        }

    } catch (error) {
        console.error('Error al buscar artistas:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

// ====================== MOSTRAR LISTA DE RESULTADOS ======================
function mostrarListaArtistas(artistas, container) {
    artistas.forEach(artista => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        if (artista.thumb) {
            const img = document.createElement('img');
            img.src = artista.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        const nombre = document.createElement('h3');
        nombre.textContent = artista.title;
        div.appendChild(nombre);

        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${artista.id}`;
        div.appendChild(idInfo);

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

// ====================== OBTENER DETALLE DEL ARTISTA ======================
async function obtenerDetalleArtista(artistId) {
    const url = `https://api.discogs.com/artists/${artistId}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });

        const data = await response.json();

        const container = document.getElementById('container');
        container.innerHTML = '';   

        printsArtista(data);

    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del artista");
    }
}

// ====================== MOSTRAR RESULTADOS GUARDADOS ======================
function mostrarResultadosGuardados() {
    const container = document.getElementById('container');
    
    container.innerHTML = `
        <h2>Resultados para "${lastSearchTerm}" (${lastSearchResults.length} artistas encontrados)</h2>
        <button onclick="clearLocalStorage()" 
                style="margin-bottom:15px; padding:8px 16px; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer;">
            🗑️ Borrar resultados guardados
        </button>
    `;

    if (lastSearchResults && lastSearchResults.length > 0) {
        mostrarListaArtistas(lastSearchResults, container);
    } else {
        container.innerHTML += `<p>No hay resultados guardados.</p>`;
    }
}

// ====================== PRINTSARTISTA (CON BOTÓN DE VOLVER) ======================
function printsArtista(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "20px";
    newDiv.style.borderRadius = "8px";
    newDiv.style.backgroundColor = "#f9f9f9";

    // Botón de volver
    const backBtn = document.createElement('button');
    backBtn.textContent = "← Volver a los resultados de búsqueda";
    backBtn.style.marginBottom = "15px";
    backBtn.style.padding = "10px 20px";
    backBtn.style.backgroundColor = "#ff6600";
    backBtn.style.color = "white";
    backBtn.style.border = "none";
    backBtn.style.borderRadius = "6px";
    backBtn.style.cursor = "pointer";
    backBtn.style.fontSize = "16px";
    
    backBtn.onclick = () => {
        mostrarResultadosGuardados();
    };
    
    newDiv.appendChild(backBtn);

    // Información del artista
    const nombre = document.createElement('h2');
    nombre.textContent = data.name;
    newDiv.appendChild(nombre);

    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        img.style.display = "block";
        img.style.margin = "15px 0";
        newDiv.appendChild(img);
    }

    if (data.profile) {
        const perfil = document.createElement('p');
        perfil.innerHTML = `<strong>Biografía:</strong><br>${data.profile}`;
        newDiv.appendChild(perfil);
    }

    if (data.realname) {
        const real = document.createElement('p');
        real.innerHTML = `<strong>Nombre real:</strong> ${data.realname}`;
        newDiv.appendChild(real);
    }

    if (data.members && data.members.length > 0) {
        const miembrosP = document.createElement('p');
        miembrosP.innerHTML = `<strong>Miembros:</strong> `;
        data.members.forEach(m => miembrosP.innerHTML += `${m.name} `);
        newDiv.appendChild(miembrosP);
    }

    if (data.groups && data.groups.length > 0) {
        const gruposP = document.createElement('p');
        gruposP.innerHTML = `<strong>Grupos:</strong> `;
        data.groups.forEach(g => gruposP.innerHTML += `${g.name} `);
        newDiv.appendChild(gruposP);
    }

    container.appendChild(newDiv);
}

// ====================== CARGAR RESULTADOS AL INICIAR LA PÁGINA ======================
loadFromLocalStorage();
*/



///////////////////////////////////////////////////////
//GROKI
///////////////////////////////////////////
/*

// ====================== VARIABLES GLOBALES ======================
let lastSearchTerm = '';
let lastSearchResults = [];

// ====================== LOCALSTORAGE HELPERS ======================
function saveToLocalStorage() {
    localStorage.setItem('lastSearchTerm', lastSearchTerm);
    localStorage.setItem('lastSearchResults', JSON.stringify(lastSearchResults));
}

function loadFromLocalStorage() {
    const savedTerm = localStorage.getItem('lastSearchTerm');
    const savedResultsStr = localStorage.getItem('lastSearchResults');

    if (savedTerm && savedResultsStr) {
        lastSearchTerm = savedTerm;
        lastSearchResults = JSON.parse(savedResultsStr);

        const container = document.getElementById('container');
        container.innerHTML = `
            <h2>✅ Resultados guardados para "${lastSearchTerm}" 
                (${lastSearchResults.length} artistas)</h2>
            <button onclick="clearLocalStorage()" 
                    style="margin-bottom:15px; padding:8px 16px; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer;">
                🗑️ Borrar resultados guardados
            </button>
        `;

        if (lastSearchResults.length > 0) {
            mostrarListaArtistas(lastSearchResults, container);
        }
    }
}

function clearLocalStorage() {
    if (confirm("¿Estás seguro de borrar los resultados guardados?")) {
        localStorage.removeItem('lastSearchTerm');
        localStorage.removeItem('lastSearchResults');
        lastSearchTerm = '';
        lastSearchResults = [];
        const container = document.getElementById('container');
        container.innerHTML = `<p style="color:#666;">✅ Resultados borrados. Realiza una nueva búsqueda.</p>`;
    }
}

// ====================== FUNCIÓN PRINCIPAL DE BÚSQUEDA ======================
async function buscarArtistas(termino) {
    if (!termino || termino.trim() === "") {
        alert("Por favor ingresa el nombre del artista o palabras clave");
        return;
    }

    lastSearchTerm = termino;
    
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(termino)}&type=artist&per_page=50`;

    console.log("Buscando artistas:", url);

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra'
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();

        lastSearchResults = data.results || [];

        // ←←← GUARDAMOS en localStorage
        saveToLocalStorage();

        const container = document.getElementById('container');
        container.innerHTML = `<h2>Resultados para "${termino}" (${lastSearchResults.length} artistas encontrados)</h2>`;

        if (lastSearchResults.length > 0) {
            mostrarListaArtistas(lastSearchResults, container);
        } else {
            container.innerHTML += `<p>No se encontraron artistas con "${termino}".</p>`;
        }

    } catch (error) {
        console.error('Error al buscar artistas:', error);
        alert('Hubo un error al conectar con Discogs. Revisa tu User-Agent o conexión.');
    }
}

// ====================== MOSTRAR LISTA DE RESULTADOS ======================
function mostrarListaArtistas(artistas, container) {
    artistas.forEach(artista => {
        const div = document.createElement('div');
        div.style.border = "2px solid #0066cc";
        div.style.margin = "15px 0";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#f9f9f9";

        if (artista.thumb) {
            const img = document.createElement('img');
            img.src = artista.thumb;
            img.style.maxWidth = "160px";
            img.style.maxHeight = "160px";
            img.style.marginRight = "15px";
            img.style.float = "left";
            div.appendChild(img);
        }

        const nombre = document.createElement('h3');
        nombre.textContent = artista.title;
        div.appendChild(nombre);

        const idInfo = document.createElement('p');
        idInfo.innerHTML = `<strong>ID:</strong> ${artista.id}`;
        div.appendChild(idInfo);

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

// ====================== OBTENER DETALLE DEL ARTISTA ======================
async function obtenerDetalleArtista(artistId) {
    const url = `https://api.discogs.com/artists/${artistId}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Galang/1.0 +https://github.com/juliavra',
            }
        });

        const data = await response.json();

        const container = document.getElementById('container');
        container.innerHTML = '';   

        printsArtista(data);

    } catch (error) {
        console.error(error);
        alert("Error al cargar el perfil del artista");
    }
}

// ====================== MOSTRAR RESULTADOS GUARDADOS ======================
function mostrarResultadosGuardados() {
    const container = document.getElementById('container');
    
    container.innerHTML = `
        <h2>Resultados para "${lastSearchTerm}" (${lastSearchResults.length} artistas encontrados)</h2>
        <button onclick="clearLocalStorage()" 
                style="margin-bottom:15px; padding:8px 16px; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer;">
            🗑️ Borrar resultados guardados
        </button>
    `;

    if (lastSearchResults && lastSearchResults.length > 0) {
        mostrarListaArtistas(lastSearchResults, container);
    } else {
        container.innerHTML += `<p>No hay resultados guardados.</p>`;
    }
}

// ====================== PRINTSARTISTA (CON BOTÓN DE VOLVER) ======================
function printsArtista(data) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";
    newDiv.style.padding = "20px";
    newDiv.style.borderRadius = "8px";
    newDiv.style.backgroundColor = "#f9f9f9";

    // Botón de volver
    const backBtn = document.createElement('button');
    backBtn.textContent = "← Volver a los resultados de búsqueda";
    backBtn.style.marginBottom = "15px";
    backBtn.style.padding = "10px 20px";
    backBtn.style.backgroundColor = "#ff6600";
    backBtn.style.color = "white";
    backBtn.style.border = "none";
    backBtn.style.borderRadius = "6px";
    backBtn.style.cursor = "pointer";
    backBtn.style.fontSize = "16px";
    
    backBtn.onclick = () => {
        mostrarResultadosGuardados();
    };
    
    newDiv.appendChild(backBtn);

    // Información del artista
    const nombre = document.createElement('h2');
    nombre.textContent = data.name;
    newDiv.appendChild(nombre);

    if (data.images && data.images.length > 0) {
        const img = document.createElement('img');
        img.src = data.images[0].uri;
        img.style.maxWidth = "300px";
        img.style.display = "block";
        img.style.margin = "15px 0";
        newDiv.appendChild(img);
    }

    if (data.profile) {
        const perfil = document.createElement('p');
        perfil.innerHTML = `<strong>Biografía:</strong><br>${data.profile}`;
        newDiv.appendChild(perfil);
    }

    if (data.realname) {
        const real = document.createElement('p');
        real.innerHTML = `<strong>Nombre real:</strong> ${data.realname}`;
        newDiv.appendChild(real);
    }

    if (data.members && data.members.length > 0) {
        const miembrosP = document.createElement('p');
        miembrosP.innerHTML = `<strong>Miembros:</strong> `;
        data.members.forEach(m => miembrosP.innerHTML += `${m.name} `);
        newDiv.appendChild(miembrosP);
    }

    if (data.groups && data.groups.length > 0) {
        const gruposP = document.createElement('p');
        gruposP.innerHTML = `<strong>Grupos:</strong> `;
        data.groups.forEach(g => gruposP.innerHTML += `${g.name} `);
        newDiv.appendChild(gruposP);
    }

    container.appendChild(newDiv);
}

// ====================== CARGAR RESULTADOS AL INICIAR LA PÁGINA ======================
loadFromLocalStorage();
*/
//buscarArtistas("Dub");


/*
const secret_token = document.getElementById("secret_token");

const artist_load_text = document.getElementById("artist_load_text");
const album_load_text = document.getElementById("album_load_text");
const anio_load_text = document.getElementById("anio_load_text");
const tracklist_load = document.getElementById("tracklist_load");
const imgAlbum = document.getElementById("imgAlbum");
const notes_load = document.getElementById("notes_load");
const label_load_text = document.getElementById("label_load_text");
const country_load_text = document.getElementById("country_load_text");
const genres_load_text = document.getElementById("genres_load_text");
const styles_load_text = document.getElementById("styles_load_text");
const format_text = document.getElementById("format_text");

const recorded_load = document.getElementById("recorded_load");
const mixed_load = document.getElementById("mixed_load");
const cuted_load = document.getElementById("cuted_load");

const credits_load = document.getElementById("credits_load");


const token = ''; // Generate at ://discogs.com
const url = 'https://api.discogs.com/releases/509137';
//[m182514]
fetch(url, {
    headers: {
        'User-Agent': 'MyDiscogsApp/1.0',
        'Authorization': `Discogs token=${token}`
    }
})
    .then(response => response.json())
    .then(data => printsData(data))
    .catch(error => console.error('Error:', error));

function printsData(data) {
    console.log(data)
    imgAlbum.src = data.images[0].uri;

    artist_load_text.innerHTML = data.artists[0].name;
    album_load_text.innerHTML = data.title;

    for (i = 0; i < data.labels.length; i++) {
        label_load_text.append(`${data.labels[i].name} ${data.labels[i].catno} `);
        //label_load_text.append(document.createElement('br'));
        label_load_text.append(", ");
    };

    for (i = 0; i < data.formats.length; i++) {
        format_text.append(`${data.formats[i].name}`);
        format_text.append(", ");
    };
    country_load_text.innerHTML = "Country: " + data.country;
    anio_load_text.innerHTML = "Published: " + data.year;

    for (i = 0; i < data.genres.length; i++) {
        genres_load_text.append(`${data.genres[i]}`);
        genres_load_text.append(", ");
    };

    for (i = 0; i < data.styles.length; i++) {
        styles_load_text.append(`${data.styles[i]}`);
        styles_load_text.append(", ");
    };

    for (i = 0; i < data.tracklist.length; i++) {
        tracklist_load.append(`${data.tracklist[i].position} ${data.tracklist[i].title} ${data.tracklist[i].duration}`);
        tracklist_load.append(document.createElement('br'));
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Recorded At") {
            recorded_load.append(`${data.companies[i].name}`);
            recorded_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Mixed At") {
            mixed_load.append(`${data.companies[i].name}`);
            mixed_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.companies.length; i++) {
        if (data.companies[i].entity_type_name === "Lacquer Cut At") {
            cuted_load.append(`${data.companies[i].name}`);
            cuted_load.append(document.createElement('br'));
        }
    };

    for (i = 0; i < data.extraartists.length; i++) {
        credits_load.append(`${data.extraartists[i].role} ${' - '} ${data.extraartists[i].name}`);
        credits_load.append(document.createElement('br'));
    };

    notes_load.innerHTML = data.notes;

}//CLOSES PrintsData

const request = require('request');
const options = {
url: 'https://api.discogs.com/oauth/identity',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Authorization': 'OAuth oauth_consumer_key="OAUTH_CONSUMER_KEY",
oauth_nonce="' + Date.now() + '",oauth_token="OAUTH_TOKEN_RECEIVED_FROM_STEP_4",
oauth_signature="YOUR_CONSUMER_SECRET&OAUTH_TOKEN_SECRET_RECEIVED_FROM_STEP_4", 
oauth_signature_method="PLAINTEXT",  oauth_timestamp="' + Date.now() +'" ', 
'User-Agent': 'YOUR_USER_AGENT/1.0'
} 
};

request(options, (err, res, body)=>{
    if(!err && res.statusCode == 200){
    console.log(JSON.parse(body));
    }
});

// Tus credenciales de Discogs
const TOKEN = 'TU_PERSONAL_ACCESS_TOKEN';
const URL = 'https://api.discogs.com';

async function buscarEnDiscogs(query) {
    try {
        const response = await fetch(`${URL}/database/search?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                // La autenticación se pasa en la cabecera Authorization
                'Authorization': `Discogs token=${TOKEN}`,
                'Content-Type': 'application/json',
                // Discogs requiere un User-Agent personalizado
                'User-Agent': 'MiAplicacionMusical/1.0'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error al consultar Discogs:', error);
    }
}

// Uso de la función
//buscarEnDiscogs('Nirvana Nevermind');

function releaseSearch(value){
let nombre = 'https://api.discogs.com/releases/';
let edad = value;
let url = `${nombre}${edad}`;

console.log(value);
fetch(url, {
    headers: {
        'User-Agent': 'MyDiscogsApp/1.0',
        'Authorization': `Discogs token=${token}`
    }
})
    .then(response => response.json())
    .then(data => printsData(data))
    .catch(error => console.error('Error:', error));
}
*/
