document.addEventListener('DOMContentLoaded', () => {
  // Obtener elementos del DOM
  const playButton = document.getElementById('playButton');
  const volumeSlider = document.getElementById('volume');
  const playbackRateSlider = document.getElementById('playbackRate');
  const panSlider = document.getElementById('pan');

  // Crear contexto de audio
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Crear nodo fuente
  const sourceNode = audioContext.createBufferSource();

  // Cargar archivo MP3
  fetch('C:/Users/Juli/My Projects/Producer_E87/tu_archivo.mp3')
      .then(response => response.arrayBuffer())
      .then(buffer => audioContext.decodeAudioData(buffer))
      .then(audioBuffer => {
          sourceNode.buffer = audioBuffer;
          sourceNode.connect(audioContext.destination);
      })
      .catch(error => console.error('Error loading audio file:', error));

  // Controlar el volumen
  volumeSlider.addEventListener('input', () => {
      const volumeValue = parseFloat(volumeSlider.value);
      sourceNode.gain.setValueAtTime(volumeValue, audioContext.currentTime);
  });

  // Controlar la velocidad de reproducción
  playbackRateSlider.addEventListener('input', () => {
      const playbackRateValue = parseFloat(playbackRateSlider.value);
      sourceNode.playbackRate.setValueAtTime(playbackRateValue, audioContext.currentTime);
  });

  // Controlar la posición panorámica
  panSlider.addEventListener('input', () => {
      const panValue = parseFloat(panSlider.value);
      const left = Math.cos(panValue * 0.5 * Math.PI);
      const right = Math.sin(panValue * 0.5 * Math.PI);
      const panNode = audioContext.createStereoPanner();
      panNode.pan.value = panValue;
      sourceNode.disconnect(audioContext.destination);
      sourceNode.connect(panNode);
      panNode.connect(audioContext.destination);
  });

  // Controlar la reproducción
  playButton.addEventListener('click', () => {
      if (audioContext.state === 'suspended') {
          audioContext.resume();
      }

      if (sourceNode.buffer) {
          sourceNode.start(0);
      }
  });
});
