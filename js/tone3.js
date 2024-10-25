
function startsSong() {
/*
<script src="https://unpkg.com/tone"></script>
<button id="play-button">Play/Pause</button>
<script src="music.js"></script>
*/

//-----------------------------------
//-----------------------------------
//SUB LOW INTRO
const bassline = [
  {'time': 0, 'note': 'A1', 'duration': '2n'},
  {'time': '0:2', 'note': 'F1', 'duration': '2n.'},
  {'time': '1:0', 'note': 'F1', 'duration': '0:1'},
  {'time': '1:2', 'note': 'D1', 'duration': '1:1'},
  {'time': '2:1', 'note': 'D0', 'duration': '0:0:1'},
  {'time': '2:2', 'note': 'D0', 'duration': '0:0:1'},
  {'time': '2:3', 'note': 'F1', 'duration': '1:1'},
];

const bass = new Tone.Synth({
  oscillator : {
    volume: 3,
    count: 3,
    spread: 100,
    type : "sine"
  }
}).toDestination();

const bassPart = new Tone.Part(function(time, note) {
  bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(0);

const bassPart2 = new Tone.Part(function(time, note) {
  bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(3);

//-----------------------------------
//-----------------------------------
//LOW ATMOSPHERE INTRO
const synth4 = new Tone.Synth({
  oscillator : {
    volume: -15,
    count: 3,
    spread: 50,
    type : "sine"
  }
}).toDestination();

const seq4 = new Tone.Sequence((time, note) => {
	synth4.triggerAttackRelease(note, "2n", time);
}, ["A1", "F1", "D1", "F1"]).start(8).stop(60);
//-----------------------------------
//-----------------------------------

const hhPattern = [
  {'duration': '2n','time': 0 },
  {'duration': '2n.', 'time': '0:1' },
  {'duration': '2n.', 'time': '0:2' },
  {'duration': '2n.', 'time': '0:2:1' },
  {'duration': '2n.', 'time': '0:2:2' },
  {'duration': '2n.', 'time': '0:2:3' },
  {'duration': '2n.', 'time': '0:3' },
  {'duration': '2n','time': 1 },
  {'duration': '2n.', 'time': '1:1' },
  {'duration': '2n.', 'time': '1:2' },
  {'duration': '2n.', 'time': '1:2:1' },
  {'duration': '2n.', 'time': '1:2:2' },
  {'duration': '2n.', 'time': '1:2:3' },
  {'duration': '2n.', 'time': '1:3' },
  {'duration': '2n.', 'time': '1:2' },
];

const hhPattern2 = [
  {'duration': '2n','time': 0 },
  {'duration': '2n.', 'time': '0:1' },
  {'duration': '2n.', 'time': '0:2' },
  {'duration': '2n.', 'time': '0:2:1' },
  {'duration': '2n.', 'time': '0:2:2' },
  {'duration': '2n.', 'time': '0:2:3' },
  {'duration': '2n.', 'time': '0:3' },
  {'duration': '2n','time': 1 },
  {'duration': '2n.', 'time': '1:1' },
  {'duration': '2n.', 'time': '1:2' },
  {'duration': '2n.', 'time': '1:2:1' },
  {'duration': '2n.', 'time': '1:2:2' },
  {'duration': '2n.', 'time': '1:2:3' },
  {'duration': '2n.', 'time': '1:3' },
  {'duration': '2n.', 'time': '1:2' },
];

const noiseSynth = new Tone.NoiseSynth().toDestination();
noiseSynth.volume.value = -24;

const hhPatternPart = new Tone.Part(function(time, note) {
  noiseSynth.triggerAttackRelease(note.duration, time);
}, hhPattern).start(15).stop(60);
const hhPatternPart2 = new Tone.Part(function(time, note) {
  noiseSynth.triggerAttackRelease(note.duration, time);
}, hhPattern).start(30).stop(60);
//----------xxxx---------------

document.getElementById("playButton").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});



const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");


//const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01%20Dark%20Ringy%20Short%20Loop.mp3");
//const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3");
const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01%2520Dark%2520Ringy%2520Short%2520Loop.mp3");




player.autostart = true; 
player2.autostart = true;
const pitchShift = new Tone.PitchShift(14).toDestination();
const filter = new Tone.Filter("C0").toDestination();
// connect a node to the pitch shift and filter in parallel
player.fan(pitchShift, filter);


const synth1 = new Tone.Synth({
  oscillator : {
    volume: -32,
    count: 3,
    spread: 90,
    type : "triangle"
  }
}).toDestination();

const seq = new Tone.Sequence((time, note) => {
	synth1.triggerAttackRelease(note, 16, time);
	// subdivisions are given as subarrays
}, ["C5", "E5", "C5", "D5","C#5", "E#5", "C#5", "D#5","C6", "E6", "C6", "D6","C#6", "E#6", "C#6", "D#6"]).start(20).stop(29);
//}, ["C4", "E4", "C4", "D4",[["G4"], "G4"], "A4", "G4"]).start(20).stop(39);

const synth2 = new Tone.Synth({
  oscillator : {
    volume: -27,
    count: 3,
    spread: 70,
    type : "fatsawtooth"
  }
}).toDestination();

const seq2 = new Tone.Sequence((time, note) => {
	synth2.triggerAttackRelease(note, "4n", time);
}, ["C4", "E4", "D4", "E4", "G5",["G6", "A6"],"E2","E2","E2","E1","E1","E0","E2","G2","A2"]).start(40).stop(60);



const synth3 = new Tone.Synth({
  oscillator : {
    volume: -32,
    count: 3,
    spread: -100,
    type : "sawtooth"
  }
}).toDestination();

const seq3 = new Tone.Sequence((time, note) => {
	synth2.triggerAttackRelease(note, "2n", time);
}, ["C4", "E4", "D4", "E4", "G5",["G6", "A6"],"E2","E2","E2","E1","E1","E0","E2","G2","A2"]).start(40).stop(60);





Tone.Transport.start();
Tone.Transport.bpm.value = 180;






}
