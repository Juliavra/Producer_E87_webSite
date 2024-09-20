const audioCtx = new AudioContext();

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const finish = audioCtx.destination;


// Crear un reproductor de audio
const player = new Tone.Player({
    url: 'https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3'
}).toDestination(); // Conectar a la salida de audio

// Crear un efecto de reverb
const reverb = new Tone.Reverb({
    decay: 4,
    wet: 0.6 // Nivel de mezcla del efecto
}).toDestination(); // Conectar a la salida de audio

// Conectar el reproductor de audio al efecto de reverb
player.connect(reverb);

// Aplicar el efecto de reverb
reverb.generate();

// Iniciar la reproducción del audio
player.start();