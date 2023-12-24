

function startsSong(){

// Obtén el contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Crea el oscilador para 440 Hz
const oscillator440 = audioContext.createOscillator();
oscillator440.frequency.setValueAtTime(79, audioContext.currentTime);
oscillator440.type = 'sine'; // Puedes cambiar esto a 'square', 'sawtooth', o 'triangle'

// Crea el nodo de panoramización para la derecha
const panNodeRight = audioContext.createStereoPanner();
panNodeRight.pan.value = -1; // 1 es completamente a la derecha

// Conecta el oscilador a la panoramización derecha y la panoramización al destino de audio
oscillator440.connect(panNodeRight);
panNodeRight.connect(audioContext.destination);
const gainNode440 = audioContext.createGain();
gainNode440.gain.value=0,3;
panNodeRight.connect(gainNode440);
gainNode440.connect(audioContext.destination);

// Crea el oscilador para 480 Hz
const oscillator480 = audioContext.createOscillator();
oscillator480.frequency.setValueAtTime(80, audioContext.currentTime);
oscillator480.type = 'sine'; 
// Crea el nodo de panoramización para la izquierda
const panNodeLeft = audioContext.createStereoPanner();
panNodeLeft.pan.value = -1; // -1 es completamente a la izquierda

// Conecta el oscilador a la panoramización izquierda y la panoramización al destino de audio
oscillator480.connect(panNodeLeft);
panNodeLeft.connect(audioContext.destination);

// Conecta el oscilador a la panoramización derecha y la panoramización al destino de audio
const gainNode480 = audioContext.createGain();
gainNode480.gain.value=0,3;
panNodeLeft.connect(gainNode480);
gainNode480.connect(audioContext.destination);

// Crea el oscilador 3ro 
const oscillator3ro = audioContext.createOscillator();
oscillator3ro.frequency.setValueAtTime(100, audioContext.currentTime);
oscillator3ro.type = 'sine'; 
// Crea el nodo de panoramización para la derecha
const panNode3ro = audioContext.createStereoPanner();
panNode3ro.pan.value = 1; // 1 es completamente a la derecha

// Conecta el oscilador a la panoramización derecha y la panoramización al destino de audio
oscillator3ro.connect(panNode3ro);
panNode3ro.connect(audioContext.destination);
const gainNode3ro = audioContext.createGain();
gainNode3ro.gain.value=0,3;
panNode3ro.connect(gainNode3ro);
gainNode3ro.connect(audioContext.destination);

// Crea el oscilador 4to 
const oscillator4to = audioContext.createOscillator();
oscillator4to.frequency.setValueAtTime(102, audioContext.currentTime);
oscillator4to.type='sine';
// Crea el nodo de panoramización para la derecha
const panNode4to = audioContext.createStereoPanner();
panNode4to.pan.value = 1; // 1 es completamente a la derecha

// Conecta el oscilador a la panoramización derecha y la panoramización al destino de audio
oscillator4to.connect(panNode3ro);
panNode4to.connect(audioContext.destination);

// Crea el oscilador 5to 
const oscillator5to = audioContext.createOscillator();
oscillator5to.frequency.setValueAtTime(300, audioContext.currentTime);
oscillator5to.type='sine';
// Crea el nodo de panoramización para la derecha
const panNode5to = audioContext.createStereoPanner();
panNode5to.pan.value = 0; // 1 es completamente a la derecha

// Conecta el oscilador a la panoramización derecha y la panoramización al destino de audio
oscillator5to.connect(panNode5to);
panNode5to.connect(audioContext.destination);

//----xxx-----

startOscillator();

//var inicio= audioContext.getOutputTimestamp(); console.log(inicio);

// Inicia el oscilador
function startOscillator() {
oscillator440.start();
oscillator480.start();
oscillator3ro.start();
oscillator4to.start();
oscillator5to.start();
}
}