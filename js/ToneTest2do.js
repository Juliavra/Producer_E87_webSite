
console.log("ARRANCA");
// Obtén el contexto de audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// Crea el oscilador 1ro 
const oscillator1ro = audioContext.createOscillator();
oscillator1ro.frequency.setValueAtTime(79, audioContext.currentTime);
oscillator1ro.type = 'sine';
const panNode1ro = audioContext.createStereoPanner();
panNode1ro.pan.value = 0; // 1 es completamente a la derecha
oscillator1ro.connect(panNode1ro);
//panNode1ro.connect(audioContext.destination);
const gainNode1ro = audioContext.createGain();
gainNode1ro.gain.value = -1;
panNode1ro.connect(gainNode1ro);
gainNode1ro.connect(audioContext.destination);

const eq1=audioContext.createBiquadFilter();
eq1.type = "peaking";
eq1.frequency.value = 1000;
eq1.gain.value = 25;
eq1.Q.value = 100;


const volumeControl1 = document.querySelector("#volume1");
volumeControl1.addEventListener(
"input",
() => {
  gainNode1ro.gain.value = volumeControl1.value;
},
false
);

const panControl1 = document.querySelector("#panner1");
panControl1.addEventListener(
"input",
() => {
  panNode1ro.pan.value = panControl1.value;
},
false
);

// Crea el oscilador 2do 
const oscillator2do = audioContext.createOscillator();
oscillator2do.frequency.setValueAtTime(80, audioContext.currentTime);
oscillator2do.type = 'sine';
const panNode2do = audioContext.createStereoPanner();
panNode2do.pan.value = 0; // 1 es completamente a la derecha
oscillator2do.connect(panNode2do);
//panNode2do.connect(audioContext.destination);
const gainNode2do = audioContext.createGain();
panNode2do.connect(gainNode2do);
gainNode2do.connect(audioContext.destination);
gainNode2do.gain.value = -1;

const volumeControl2 = document.querySelector("#volume2");
volumeControl2.addEventListener(
"input",
() => {
  gainNode2do.gain.value = volumeControl2.value;
},
false
);

const panControl2 = document.querySelector("#panner2");
panControl2.addEventListener(
"input",
() => {
  panNode2do.pan.value = panControl2.value;
},
false
);


startOscillator();

//stopsOscillator();


// Inicia el oscilador
function startOscillator() {
  oscillator1ro.start();
  oscillator2do.start();
  gainNode2do.gain.value = -1;
  gainNode1ro.gain.value = -1;
}

function stopsOscillator() {
  //console.log("stopsOscillator");
  oscillator1ro.stop();
  oscillator2do.stop();
}




/*

function contexto() {


  console.log("ARRANCA");
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");
// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);


// Select our play button
const playButton = document.querySelector("button");
playButton.addEventListener(
"click",
() => {
// Check if context is in suspended state (autoplay policy)
if (audioContext.state === "suspended") {
audioContext.resume();
}
// Play or pause track depending on state
if (playButton.dataset.playing === "false") {
audioElement.play();
playButton.dataset.playing = "true";
} else if (playButton.dataset.playing === "true") {
audioElement.pause();
playButton.dataset.playing = "false";
}
},
false
);

audioElement.addEventListener(
  "ended",
  () => {
  playButton.dataset.playing = "false";
  },
  false
  );


}
*/
/*

// Select our play button
const playButton = document.querySelector("#starts_context");
playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  }
)

*/