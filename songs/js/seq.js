
// Verificar la compatibilidad de Web Audio API
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Crear un oscilador
function createOscillator(freq) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  //oscillator.gain = -32;
  return oscillator;
}

// Función para reproducir un sonido durante un intervalo
function playSound(freq, startTime, duration) {
  const oscillator = createOscillator(freq);
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  gainNode.gain.value = -0.95;
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

// Función principal del secuenciador
function startSequencer() {
  const tempo = 120; // BPM (beats per minute)
  const interval = 60 / tempo; // Intervalo de tiempo entre beats en segundos

  const sequence = [8000, 9000, 0, 100, 0, 0, 7000, 7333, 7670, 8000, 6000];
  const sequence2 = [90, 80, 100, 80, 0, 80, 88, 82, 86, 89, 80];
  const sequence3 = [40, 80, 160, 320, 740, 1480];
  const sequence4 = [440, 880, 1720, 3440, 6880, 13760, 24000]; // Frecuencias de ejemplo
  const duration = 0.25; // Duración de cada sonido en segundos

  let startTime = audioContext.currentTime;
  
    // Reproducir la secuencia
    for (let i = 0; i < sequence.length; i++) {
      playSound(sequence[i], startTime, duration);
      startTime += interval;
    }
    for (let i = 0; i < sequence2.length; i++) {
      playSound(sequence2[i], startTime, duration);
      startTime += interval;
    }
    for (let i = 0; i < sequence3.length; i++) {
      playSound(sequence3[i], startTime, duration);
      startTime += interval;
    }
    for (let i = 0; i < sequence.length; i++) {
      playSound(sequence[i], startTime, duration);
      startTime += interval;
    }
    for (let i = 0; i < sequence2.length; i++) {
      playSound(sequence2[i], startTime, duration);
      startTime += interval;
    }
    for (let i = 0; i < sequence4.length; i++) {
      playSound(sequence4[i], startTime, duration);
      startTime += interval;
    }
  for (let i = 0; i < sequence.length; i++) {
    playSound(sequence[i], startTime, duration);
    startTime += interval;
    for (let i = 0; i < sequence2.length; i++) {
      playSound(sequence2[i], startTime, duration);
      startTime += interval;
      for (let i = 0; i < sequence3.length; i++) {
        playSound(sequence3[i], startTime, duration);
        startTime += interval;
      }
    }
  }

}

// Detener el secuenciador
function stopSequencer() {
  audioContext.suspend().then(function () {
    console.log('AudioContext closed');
  });
}








