// Obtener elementos del DOM
const frequencySlider = document.getElementById('frequency');
const frequencyValue = document.getElementById('frequencyValue');
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const startButton = document.querySelector('button:nth-of-type(1)');
const stopButton = document.querySelector('button:nth-of-type(2)');

// Crear contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

const oscillator2 = audioContext.createOscillator();
const gainNode2 = audioContext.createGain();

// Conectar el oscilador al nodo de ganancia y este a la salida de audio
oscillator.connect(gainNode);
oscillator2.connect(gainNode2);
gainNode.connect(audioContext.destination);
gainNode2.connect(audioContext.destination);
// Configurar el oscilador
oscillator.type = 'sine'; // Puedes cambiar esto a 'square', 'sawtooth', o 'triangle'
oscillator.frequency.value = frequencySlider.value;
oscillator2.type = 'triangle';
oscillator2.frequency.value = frequencySlider.value;



// Configurar el nodo de ganancia
gainNode.gain.value = volumeSlider.value;

startButton.disabled = false;
stopButton.disabled = true;

// Actualizar la frecuencia y el volumen en tiempo real
frequencySlider.addEventListener('input', () => {
  oscillator.frequency.value = frequencySlider.value;
  frequencyValue.textContent = `${frequencySlider.value} Hz`;
});

volumeSlider.addEventListener('input', () => {
  gainNode.gain.value = volumeSlider.value;
  volumeValue.textContent = volumeSlider.value;
});

// Funciones para iniciar y detener el oscilador
function startOscillator() {
  oscillator.start();
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopOscillator() {
  oscillator.stop();
  startButton.disabled = false;
  stopButton.disabled = true;
}