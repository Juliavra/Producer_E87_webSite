
// Verificar la compatibilidad de Web Audio API
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Crear un oscilador
function createOscillator(freq) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  return oscillator;
}

// Función para reproducir un sonido durante un intervalo
function playSound(freq, startTime, duration) {
  const oscillator = createOscillator(freq);
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  gainNode.gain.value = -0.1;
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

// Función principal del secuenciador
function startSequencer() {
  const tempo = 90; // BPM (beats per minute)
  const interval = 60 / tempo; // Intervalo de tiempo entre beats en segundos

  const sequence = [90, 80, 100, 80, 0, 80, 88, 82, 86, 89,80];
  //const sequence = [40, 80, 160, 320, 740, 1480];
  //const sequence = [440, 880, 1720, 3440, 6880, 13760, 27520]; // Frecuencias de ejemplo
  const duration = 0.5; // Duración de cada sonido en segundos

  let startTime = audioContext.currentTime;

  // Reproducir la secuencia
  for (let i = 0; i < sequence.length; i++) {
    playSound(sequence[i], startTime, duration);
    startTime += interval;
  }
}

// Detener el secuenciador
function stopSequencer() {
  audioContext.suspend().then(function () {
    console.log('AudioContext closed');
  });
}








