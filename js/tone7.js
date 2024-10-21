
function startsSong() {
//CREAR AUDIO CONTEXT
const now = Tone.now();
Tone.Transport.start();
Tone.Transport.bpm.value = 120;



/*
var player_1 = document.getElementById("myAudio");
player_1.src = `C:/Users/Juli/My Projects/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3`;
player_1.play();
*/

const distortion = new Tone.Distortion(0.7).toDestination();

const snareDrum = new Tone.NoiseSynth({
  volume: -18,
  noise: {
    type: 'white',
    playbackRate: 3,
  },
  envelope: {
    attack: 0.001,
    decay: 0.15,
    sustain: 0.5,
    release: 0.3,
  },
}).connect(distortion);

const snares = [
  
  { time: '0:0:1' },
  { time: '0:1:1' },
  { time: '0:1:2' },
  { time: '0:1:3' },
  { time: '0:1:4' },
  { time: '0:2:2' },
  { time: '0:2:3' },
  { time: '0:3' },
  { time: '0:4' },
  { time: '0:5' },
  { time: '0:6' },
  { time: '0:7' },
  { time: '0:9' },
  { time: '0:11' },
  { time: '0:13' },
]
const snarePart = new Tone.Part(function(time) {
  snareDrum.triggerAttackRelease('32n', time)
}, snares).start(0).stop("+13");


const bdDrum = new Tone.NoiseSynth({
  volume: -18,
  noise: {
    type: 'pink',
    playbackRate: 33,
  },
  envelope: {
    attack: 0.3,
    decay: 0.25,
    sustain: 0.2,
    release: 0.1,
  },
}).connect(distortion);

const snares2 = [
  
  { time: '0:1' },
  { time: '0:2' },
  { time: '0:3' },
  { time: '0:4' },
  { time: '0:5' },
  { time: '0:6' },
  { time: '0:7' },
  { time: '0:8' },
  { time: '0:10' },
  { time: '0:12' },
  { time: '0:14' },
]

const bdPart = new Tone.Part(function(time) {
  bdDrum.triggerAttackRelease('8n', time)
}, snares2).start(0).stop("+14");
}

