// audio.js

// Crear contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Crear oscilador y nodo de ganancia
const osc1 = audioContext.createOscillator();
const gainNode = audioContext.createGain();

// Conectar el oscilador al nodo de ganancia y este a la salida de audio
osc1.connect(gainNode);
gainNode.connect(audioContext.destination);

// Obtener elementos del DOM
const frequencySlider = document.getElementById('frequency');
const frequencyValue = document.getElementById('frequencyValue');
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Configurar el oscilador
osc1.type = 'sine'; // Puedes cambiar esto a 'square', 'sawtooth', o 'triangle'
osc1.frequency.value = frequencySlider.value;

// Configurar el nodo de ganancia
gainNode.gain.value = volumeSlider.value;

// Actualizar la frecuencia y el volumen en tiempo real
frequencySlider.addEventListener('input', () => {
  osc1.frequency.value = frequencySlider.value;
  frequencyValue.textContent = `${frequencySlider.value} Hz`;
});

volumeSlider.addEventListener('input', () => {
  gainNode.gain.value = volumeSlider.value;
  volumeValue.textContent = volumeSlider.value;
});

// Funciones para iniciar y detener el oscilador
function startOscillator() {
  osc1.start();
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopOscillator() {
  osc1.stop();
  startButton.disabled = false;
  stopButton.disabled = true;
}
