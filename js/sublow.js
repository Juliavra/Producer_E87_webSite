function startsSong() {

//-----------------------------------
//-----------------------------------
//SUB LOW INTRO
const bassline = [
  {'time': 0, 'note': 'A1', 'duration': '0:2'},
  {'time': '0:2', 'note': 'F1', 'duration': '0:2'},
  {'time': '1:2', 'note': 'D1', 'duration': '1:1'},
  {'time': '2:1', 'note': 'D0', 'duration': '0:0:1'},
 {'time': '2:2', 'note': 'D0', 'duration': '0:0:1'},
  {'time': '2:3', 'note': 'F1', 'duration': '1:0:0'},

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

//-----------------------------------
//-----------------------------------
//LOW ATMOSPHERE INTRO
const synth4 = new Tone.Synth({
  oscillator : {
    volume: -12,
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
const kickDrum = new Tone.MembraneSynth({
  volume: -21,
}).toMaster();

const kicks = [
  { time: '1:1' },
  { time: '2:0' },
  { time: '2:1:2' },
  { time: '2:3:2' },
  { time: '3:0:2' },
  { time: '3:1:' },
  { time: '4:0' },
  { time: '4:3:2' },
  { time: '5:1' },
  { time: '6:0' },
  { time: '6:1:2' },
  { time: '6:3:2' },
  { time: '7:0:2' },
  { time: '7:1:' },
];

const kickPart = new Tone.Part(function(time) {
  kickDrum.triggerAttackRelease('C1', '8n', time)
}, kicks).start(0);


const lowPass = new Tone.Filter({
  frequency: 12000,
}).toMaster();

const snareDrum = new Tone.NoiseSynth({
  volume: -27,
  noise: {
    type: 'white',
    playbackRate: 3,
  },
  envelope: {
    attack: 0.001,
    decay: 0.20,
    sustain: 0.05,
    release: 0.03,
  },
}).connect(lowPass);


const snares = [
  { time: '0:2' },
  { time: '1:2' },
  { time: '2:2' },
  { time: '3:2' },
  { time: '4:2' },
  { time: '5:2' },
  { time: '6:2' },
  { time: '7:2' },
  { time: '8:2' },
  { time: '9:2' },
  { time: '10:2' },
  { time: '11:2' },
  { time: '12:2' },
  { time: '13:2' },
  { time: '14:2' },
  { time: '15:2' },
  { time: '16:2' },
  { time: '17:2' },
  { time: '18:2' },
  { time: '19:2' },
  { time: '20:0' },
  { time: '24:2' },
  { time: '25:2' },
  { time: '26:2' },
  { time: '27:2' },
]

const snarePart = new Tone.Part(function(time) {
  snareDrum.triggerAttackRelease('4n', time)
}, snares).start(0);






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
  {'duration': '2n.','time': 0 },
  {'duration': '2n.', 'time': '0:1:1' },
  {'duration': '2n.', 'time': '0:1:2' },
  {'duration': '2n.', 'time': '0:1:3' },
  {'duration': '2n.', 'time': '0:1:4' },
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
 /* */
];

const noiseSynth = new Tone.NoiseSynth().toDestination();
noiseSynth.volume.value = -24;
/*
const hhPatternPart = new Tone.Part(function(time, note) {
  noiseSynth.triggerAttackRelease(note.duration, time);
}, hhPattern).start(15).stop(60);
*/
const hhPatternPart2 = new Tone.Part(function(time, note) {
  noiseSynth.triggerAttackRelease(note.duration, time);
}, hhPattern2).start(8).stop(60);

//----------xxxx---------------

document.getElementById("playButton").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
/*
const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
//const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01%20Dark%20Ringy%20Short%20Loop.mp3");
//const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3");
const player2 = new Tone.Player("https://github.com/Juliavra/Producer_E87_webSite/audio/01%2520Dark%2520Ringy%2520Short%2520Loop.mp3");
*/

player.autostart = true; 
player2.autostart = true;
const pitchShift = new Tone.PitchShift(14).toDestination();
const filter = new Tone.Filter("C0").toDestination();
// connect a node to the pitch shift and filter in parallel
player.fan(pitchShift, filter);

/*
const synth1 = new Tone.Synth({
  oscillator : {
    volume: -12,
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
*/

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
/**/
/*
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
*/
/*
const synth = new Tone.PolySynth(5, Tone.Synth, {
  volume: -5, // Added
  oscillator : {
    type : "sawtooth"
  }
}).toMaster();
*/

Tone.Transport.start();
Tone.Transport.bpm.value = 180;
}
/*
const highOctaveChords = [
  {'time': 0, 'note': IChord1, 'duration': '2n.'},
  {'time': '0:3', 'note': VChord1, 'duration': '4n'},
  {'time': '1:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '1:3', 'note': VChord1, 'duration': '4n'},
  {'time': '2:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '2:3', 'note': VChord1, 'duration': '4n'},
  {'time': '3:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '3:2', 'note': VChord1, 'duration': '4n'},
  {'time': '3:3', 'note': IVChord1, 'duration': '4n'},
  {'time': '4:0', 'note': IChord1, 'duration': '2n.'},
  {'time': '4:3', 'note': VChord1, 'duration': '4n'},
  {'time': '5:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '5:3', 'note': VChord1, 'duration': '4n'},
  {'time': '6:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '6:3', 'note': VChord1, 'duration': '4n'},
  {'time': '7:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '7:2', 'note': VChord1, 'duration': '4n'},
  {'time': '7:3', 'note': IVChord1, 'duration': '4n'},
];

const highSynth = new Tone.PolySynth(5, Tone.Synth, {
  volume: -16,
  count: 6,
  spread: 80,
  oscillator : {
    type : "fatsawtooth"
  }
}).toMaster();

const highOctaveChordPart = new Tone.Part(function(time, note) {
  highSynth.triggerAttackRelease(note.note, note.duration, time, 0.5);
}, highOctaveChords).start(0);
*/
/*
const AMinorScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
  const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
  const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
  return `${note}${noteOctaveNumber}`
});


const AMinorScaleWithOctave = addOctaveNumbers(AMinorScale, 4);
// Output ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4'];

AMinorScaleWithOctave.forEach((note, index) => {
  synth.triggerAttackRelease(note, '4n', index + 1)
});


const constructMajorChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof(scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0,1)}${updatedOctave}`;
    }

    return nextNote;
  }

  const thirdNote = getNextChordNote(rootNote, 3)
  const fifthNote = getNextChordNote(rootNote, 5)
  const chord = [rootNote, thirdNote, fifthNote]

  return chord
}



Tone.Transport.bpm.value = 150


const IChord = constructMajorChord(AMinorScale, 4, 'A3');
// Output: ['A3', 'C4', 'E4']
const VChord = constructMajorChord(AMinorScale, 4, 'E4');
// Output: ['E4', 'G4', 'B4']
const VIChord = constructMajorChord(AMinorScale, 3, 'F3');
// Output: ['F3', 'A3', 'C3']
const IVChord = constructMajorChord(AMinorScale, 3, 'D3');
// Output: ['D3', 'F3', 'A3']


const synth2 = new Tone.PolySynth(3, Tone.Synth, {
  oscillator : {
    type : "sawtooth"
  }
}).toMaster();



const mainChords = [
  {'time': 0, 'note': IChord, 'duration': '2n.'},
  {'time': '0:3', 'note': VChord, 'duration': '4n'},
  {'time': '1:0', 'note': VIChord, 'duration': '2n.'},
  {'time': '1:3', 'note': VChord, 'duration': '4n'},
  {'time': '2:0', 'note': IVChord, 'duration': '2n.'},
  {'time': '2:3', 'note': VChord, 'duration': '4n'},
  {'time': '3:0', 'note': VIChord, 'duration': '2n'},
  {'time': '3:2', 'note': VChord, 'duration': '4n'},
  {'time': '3:3', 'note': IVChord, 'duration': '4n'},
  {'time': '4:0', 'note': IChord, 'duration': '2n.'},
  {'time': '4:3', 'note': VChord, 'duration': '4n'},
  {'time': '5:0', 'note': VIChord, 'duration': '2n.'},
  {'time': '5:3', 'note': VChord, 'duration': '4n'},
  {'time': '6:0', 'note': IVChord, 'duration': '2n.'},
  {'time': '6:3', 'note': VChord, 'duration': '4n'},
  {'time': '7:0', 'note': VIChord, 'duration': '2n'},
  {'time': '7:2', 'note': VChord, 'duration': '4n'},
  {'time': '7:3', 'note': IVChord, 'duration': '4n'},
];



const part = new Tone.Part(function(time, note) {
  synth.triggerAttackRelease(note.note, note.duration, time);
}, mainChords).start(0);



IChord.push('A2', 'G4')
VChord.push('E2', 'G3')
VIChord.push('F2', 'E4')
IVChord.push('D2', 'C4')



const synth3 = new Tone.PolySynth(5, Tone.Synth, { // changed from 3 to 5
  oscillator : {
    type : "sawtooth"
  }
}).toMaster();



const mainMelody = [
  {'time': 0, 'note': 'G4', 'duration': '8n'},
  {'time': '0:0:2', 'note': 'F4', 'duration': '8n'},
  {'time': '0:1', 'note': 'D4', 'duration': '8n.'},
  {'time': '0:2', 'note': 'D4', 'duration': '8n'},
  {'time': '0:2:2', 'note': 'F4', 'duration': '8n.'},
  {'time': '0:3', 'note': 'G4', 'duration': '8n'},
  {'time': '0:3:2', 'note': 'A4', 'duration': '2n'},
  {'time': '2:0', 'note': 'A4', 'duration': '8n'},
  {'time': '2:0:2', 'note': 'G4', 'duration': '8n'},
  {'time': '2:1', 'note': 'F4', 'duration': '8n'},
  {'time': '2:2', 'note': 'A4', 'duration': '8n'},
  {'time': '2:2:2', 'note': 'G4', 'duration': '8n'},
  {'time': '2:3', 'note': 'E4', 'duration': '8n'},
  {'time': '2:3:2', 'note': 'F4', 'duration': '2n'},
  {'time': '4:0', 'note': 'G4', 'duration': '8n'},
  {'time': '4:0:2', 'note': 'F4', 'duration': '8n'},
  {'time': '4:1', 'note': 'D4', 'duration': '8n'},
  {'time': '4:2', 'note': 'F4', 'duration': '8n'},
  {'time': '4:2:2', 'note': 'A4', 'duration': '8n'},
  {'time': '4:3', 'note': 'G4', 'duration': '8n'},
  {'time': '4:3:2', 'note': 'A4', 'duration': '2n'},
  {'time': '5:2:2', 'note': 'G4', 'duration': '8n'},
  {'time': '5:3', 'note': 'A4', 'duration': '8n'},
  {'time': '5:3:2', 'note': 'B4', 'duration': '8n'},
  {'time': '6:0', 'note': 'C5', 'duration': '8n'},
  {'time': '6:1', 'note': 'B4', 'duration': '8n'},
  {'time': '6:1:2', 'note': 'A4', 'duration': '8n'},
  {'time': '6:2', 'note': 'B4', 'duration': '8n'},
  {'time': '6:2:2', 'note': 'A4', 'duration': '8n'},
  {'time': '6:3', 'note': 'G4', 'duration': '8n'},
  {'time': '6:3:2', 'note': 'A4', 'duration': '1n'},
];


const synth2 = new Tone.Synth({
  oscillator : {
    volume: 5,
    count: 3,
    spread: 40,
    type : "fatsawtooth"
  }
}).toMaster();


const mainMelodyPart = new Tone.Part(function(time, note) {
  synth2.triggerAttackRelease(note.note, note.duration, time);
}, mainMelody).start(0);


const kickDrum = new Tone.MembraneSynth({
  volume: 6
}).toMaster();

Here’s how to create a kick pattern:

const kicks = [
  { time: '0:0' },
  { time: '0:3:2' },
  { time: '1:1' },
  { time: '2:0' },
  { time: '2:1:2' },
  { time: '2:3:2' },
  { time: '3:0:2' },
  { time: '3:1:' },
  { time: '4:0' },
  { time: '4:3:2' },
  { time: '5:1' },
  { time: '6:0' },
  { time: '6:1:2' },
  { time: '6:3:2' },
  { time: '7:0:2' },
  { time: '7:1:' },
];

const kickPart = new Tone.Part(function(time) {
  kickDrum.triggerAttackRelease('C1', '8n', time)
}, kicks).start(0);


const lowPass = new Tone.Filter({
  frequency: 8000,
}).toMaster();

const snareDrum = new Tone.NoiseSynth({
  volume: 5,
  noise: {
    type: 'white',
    playbackRate: 3,
  },
  envelope: {
    attack: 0.001,
    decay: 0.20,
    sustain: 0.15,
    release: 0.03,
  },
}).connect(lowPass);


const snares = [
  { time: '0:2' },
  { time: '1:2' },
  { time: '2:2' },
  { time: '3:2' },
  { time: '4:2' },
  { time: '5:2' },
  { time: '6:2' },
  { time: '7:2' },
]

const snarePart = new Tone.Part(function(time) {
  snareDrum.triggerAttackRelease('4n', time)
}, snares).start(0);


const bassline = [
  {'time': 0, 'note': 'A0', 'duration': '2n'},
  {'time': '0:3', 'note': 'F0', 'duration': '2n.'},
  {'time': '1:3', 'note': 'D0', 'duration': '2n.'},
  {'time': '2:3', 'note': 'F0', 'duration': '1:1'},
];

const bass = new Tone.Synth({
  oscillator : {
    type : "triangle"
  }
}).toMaster();

const bassPart = new Tone.Part(function(time, note) {
  bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(0);


const IChord1 = constructMajorChord(AMinorScale, 5, 'A4');
const VChord1 = constructMajorChord(AMinorScale, 5, 'E5');
const VIChord1= constructMajorChord(AMinorScale, 4, 'F4');
const IVChord1 = constructMajorChord(AMinorScale, 4, 'D4');

const highOctaveChords = [
  {'time': 0, 'note': IChord1, 'duration': '2n.'},
  {'time': '0:3', 'note': VChord1, 'duration': '4n'},
  {'time': '1:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '1:3', 'note': VChord1, 'duration': '4n'},
  {'time': '2:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '2:3', 'note': VChord1, 'duration': '4n'},
  {'time': '3:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '3:2', 'note': VChord1, 'duration': '4n'},
  {'time': '3:3', 'note': IVChord1, 'duration': '4n'},
  {'time': '4:0', 'note': IChord1, 'duration': '2n.'},
  {'time': '4:3', 'note': VChord1, 'duration': '4n'},
  {'time': '5:0', 'note': VIChord1, 'duration': '2n.'},
  {'time': '5:3', 'note': VChord1, 'duration': '4n'},
  {'time': '6:0', 'note': IVChord1, 'duration': '2n.'},
  {'time': '6:3', 'note': VChord1, 'duration': '4n'},
  {'time': '7:0', 'note': VIChord1, 'duration': '2n'},
  {'time': '7:2', 'note': VChord1, 'duration': '4n'},
  {'time': '7:3', 'note': IVChord1, 'duration': '4n'},
];

const highSynth = new Tone.PolySynth(5, Tone.Synth, {
  volume: -16,
  count: 6,
  spread: 80,
  oscillator : {
    type : "fatsawtooth"
  }
}).toMaster();

const highOctaveChordPart = new Tone.Part(function(time, note) {
  highSynth.triggerAttackRelease(note.note, note.duration, time, 0.5);
}, highOctaveChords).start(0);

*/

