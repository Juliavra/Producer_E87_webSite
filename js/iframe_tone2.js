// 1. Cargar la API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let audioSource;
const playBtn = document.getElementById('playBtn');

// 2. Esta función se ejecuta cuando la API de YouTube está lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // ID del video
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    playBtn.addEventListener('click', () => {
        // Inicializar contexto de audio de Tone.js
        Tone.start();
        player.playVideo();
        
        // 3. Capturar el audio del iframe
        // NOTA: Esto suele fallar por CORS en dominios reales
        if (!audioSource) {
            const iframe = document.getElementById('player');
            const audioCtx = Tone.getContext().rawContext;
            // Intentar conectar el elemento de audio del iframe
            audioSource = audioCtx.createMediaElementSource(iframe);
            
            // 4. Conectar a Tone.js (ejemplo: agregar un filtro)
            const filter = new Tone.Filter(1000, "lowpass").toDestination();
            audioSource.connect(filter);
        }
    });
}