var lista = [];

async function cargarLink() {
    var carpeta = document.getElementById("carpeta");
    var carpeta_trim = carpeta.value.trim();
    var urlFinal = "";

    // 1. Limpieza de URL (Soporta links de ver, embed e iframes completos)
    if (carpeta_trim.includes("list=")) {
        urlFinal = carpeta_trim;
    } else if (carpeta_trim.includes("https://youtu.be")) {
        urlFinal = carpeta_trim.replace("https://youtu.be", "https://youtube.com");
    } else if (carpeta_trim.includes("://youtube.com")) {
        urlFinal = carpeta_trim.replace("watch?v=", "embed/");
    } else {
        const match = carpeta_trim.match(/https?:\/\/[^"']+/);
        urlFinal = match ? match[0] : "";
    }

    if (urlFinal !== "") {
        let titulo = "Cargando título...";
        
        try {
            // Extraer ID para el título (funciona con /embed/ o watch?v=)
            let videoId = urlFinal.includes('embed/') ? urlFinal.split('embed/')[1] : urlFinal.split('v=')[1];
            if (videoId) {
                const response = await fetch(`https://noembed.com/embed?url=https://www.://youtube.com${videoId.split('&')[0]}`);
                const data = await response.json();
                titulo = data.title || "Video de YouTube";
            }
        } catch (error) {
            titulo = "Video " + (lista.length + 1);
        }

        lista.push({ url: urlFinal, titulo: titulo });
        muestraLista(lista);
        carpeta.value = ""; 
    }
}

function cambiarVideo(url) {
    document.getElementById("frame").src = url;
}

// Nueva función para borrar
function borrarVideo(indice) {
    lista.splice(indice, 1); // Quita el elemento del array
    muestraLista(lista);     // Refresca la lista visual
}

function muestraLista(lista) {
    var playlist = document.getElementById("playlist");
    var html = "";

    lista.forEach((item, i) => {
        html += `
            <div style="display: flex; gap: 5px; margin-bottom: 10px; align-items: stretch;">
                <button onclick="cambiarVideo('${item.url}')" style="
                    flex-grow: 1;
                    padding: 10px;
                    text-align: left;
                    background: #f8f9fa;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 13px;
                ">
                    <strong>${i + 1}.</strong> ${item.titulo}
                </button>
                <button onclick="borrarVideo(${i})" style="
                    background: #dc3545;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 0 12px;
                    cursor: pointer;
                    font-weight: bold;
                " title="Eliminar">
                    X
                </button>
            </div>`;
    });
    playlist.innerHTML = html || "<p style='color:gray'>Lista vacía</p>";
}
