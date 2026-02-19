// 1. Cargar la API de YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let tonePlayer;

// 2. Esta función crea el iframe cuando la API está lista
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
    console.log("Video listo");
}

// 3. Configurar Tone.js
const vol = new Tone.Volume(-10).toDestination();
player.connect(vol);
// Si quisieras aplicar un efecto:
// const filter = new Tone.Filter(200, "lowpass").connect(vol);

document.getElementById('playBtn').addEventListener('click', () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
        // A partir de aquí, el video se reproduce en el iframe
    }
});
