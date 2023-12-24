const context = new AudioContext();
const buffer = new AudioBuffer(context, {
numberOfChannels: 2,
length: 44100,
sampleRate: 44100,
});





/*
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
  }


  async function setupSample() {
    const filePath = "dtmf.mp3";
    const sample = await getFile(audioCtx, filePath);
    return sample;
    }

    function playSample(audioContext, audioBuffer, time) {
      const sampleSource = new AudioBufferSourceNode(audioContext, {
      buffer: audioBuffer,
      playbackRate,
      });
      sampleSource.connect(audioContext.destination);
      sampleSource.start(time);
      return sampleSource;
      }
*/

/*
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

 // Conectar el oscilador al nodo de ganancia y este a la salida de audio
 oscillator.connect(gainNode);
 gainNode.connect(audioContext.destination);

 // Configurar el oscilador
 oscillator.type = 'sine'; // Puedes cambiar esto a 'square', 'sawtooth', o 'triangle'
 oscillator.frequency.value = frequencySlider.value;

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
   volumeValue.textContent = `${volumeSlider.value} dB`;
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

*/






//-----------------------xxxxx------------------------------
/*
document.addEventListener('DOMContentLoaded', function () {
  // Crear contexto de audio
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Verificar compatibilidad con el navegador
  if (!audioContext) {
      console.error("La Web Audio API no es compatible con este navegador.");
  }

  // Obtener elementos del DOM
  var frequencySlider = document.getElementById('frequency-slider');
  var volumeSlider = document.getElementById('volume-slider');

  // Crear oscilador
  var osc1 = audioContext.createOscillator();
  
  // Conectar el oscilador a un nodo de ganancia (para controlar el volumen)
  var gainNode = audioContext.createGain();
  osc1.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Iniciar el oscilador
  osc1.start();

  // Actualizar la frecuencia del oscilador al cambiar el valor del slider de frecuencia
  frequencySlider.addEventListener('input', function () {
      var frequencyValue = parseFloat(frequencySlider.value);
      osc1.frequency.setValueAtTime(frequencyValue, audioContext.currentTime);
  });

  // Actualizar el volumen al cambiar el valor del slider de volumen
  volumeSlider.addEventListener('input', function () {
      var volumeValue = parseFloat(volumeSlider.value);
      gainNode.gain.setValueAtTime(volumeValue, audioContext.currentTime);
  });
});
*/