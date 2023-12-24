// Obtener el elemento de entrada de archivo y el botón
const fileInput = document.getElementById('fileInput');
const playButton = document.querySelector('button');

// Crear un contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Crear un nodo fuente
const sourceNode = audioContext.createBufferSource();

// Manejar la carga del archivo cuando se selecciona
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        // Crear un objeto FileReader para leer el archivo
        const reader = new FileReader();

        reader.onload = function(e) {
            // Decodificar el archivo y asignarlo al buffer de audio
            audioContext.decodeAudioData(e.target.result, function(buffer) {
                sourceNode.buffer = buffer;
            });
        };

        reader.readAsArrayBuffer(file);
    }
});

// Manejar el clic en el botón de reproducción
function playAudio() {
    // Conectar el nodo fuente al contexto de audio
    sourceNode.connect(audioContext.destination);

    // Iniciar la reproducción
    sourceNode.start();
}