function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 5000);
 // const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay("2n.", 0.13).toDestination();
  feedbackDelay.volume = -9;


	const pingPong = new Tone.PingPongDelay({
    delayTime: "4n",
    feedback: 0.2,
    wet: 0.5,
  }).toDestination();

  const pingPong_HH = new Tone.PingPongDelay("2n", 0.092).toDestination();
  const feedbackDelay_HH = new Tone.FeedbackDelay("2n.", 0.43).connect(pingPong_HH);
  feedbackDelay.volume = -9;

  console.log(Tone.Transport.sampleTime);

//--------------------------------
/*const vol = new Tone.Volume(-6).toDestination();
const osc = new Tone.Oscillator().connect(vol).start();
vol.volume.value = -20;
// mute the output
vol.mute = true;
*/
//-------------------------------------------
/*
const toneMeter = new Tone.Meter({ channelCount: 2 });
feedbackDelay.connect(toneMeter);
/*
meter({
  tone: toneMeter,
  parent: document.querySelector("#content"),
});
*/


  /*
    const delay = new Tone.Delay().toDestination();
    delay.volume = -15;
    const delayLFO = new Tone.LFO(0.5, 0.1, 1).connect(delay.delayTime);
    delayLFO.volume = -35;
  //  delayLFO.start();
    const pulse = new Tone.PulseOscillator().connect(delay);
    pulse.volume = -35;
   // pulse.start();
  
    // the change in delayTime causes the pitch to go up and down
  */
  //SUB LOW INTRO
  const bassline = [
    { 'time': '0:0', 'note': 'A1', 'duration': '0:2' },
    { 'time': '0:2', 'note': 'F1', 'duration': '0:2' },
    { 'time': '1:2', 'note': 'D1', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D0', 'duration': '0:0:1' },
    { 'time': '2:2', 'note': 'D0', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'F1', 'duration': '1:0:0' },

  ];
  const bassline2 = [
    { 'time': '0:0', 'note': 'A1', 'duration': '0:2' },
    { 'time': '0:2', 'note': 'F1', 'duration': '0:2' },
    { 'time': '1:2', 'note': 'D1', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D0', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D0', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F1', 'duration': '1:0' },

  ];
  const bassline3 = [
    { 'time': '0:0', 'note': 'A1', 'duration': '0:1' },
    { 'time': '0:2', 'note': 'F1', 'duration': '0:1' },
    { 'time': '1:2', 'note': 'D1', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D0', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D0', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F1', 'duration': '1:0' },

  ];
  const bassline4 = [
    { 'time': '0:0', 'note': 'A1', 'duration': '0:3' },
    { 'time': '0:4', 'note': 'F1', 'duration': '0:1' },
    { 'time': '1:2', 'note': 'D1', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D0', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D0', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F1', 'duration': '1:0' },

  ];

  const bass = new Tone.Synth({
    oscillator: {
      volume: -3,
      count: 3,
      spread: 100,
      type: "sine"
    }
  }).toDestination();

  const bassPart = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(0);

  const bassPart2 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline2).start(10);

  const bassPart3 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline3).start(20);
  const bassPart4 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline4).start(30);

  const bassPart5 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(40);

  const bassPart6 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline2).start(50);
  const bassPart7 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline3).start(60);
 /* const bassPart8 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline4).start(70);
*/
  const keyline = [
    { 'time': '0:3', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '1:3', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '3:3', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '4:3', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '5:3', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '6:3', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '7:3', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '10:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '11:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '12:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '13:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '14:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '15:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '16:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '17:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '18:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '19:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '20:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '21:1', 'note': 'D3', 'duration': '0:0:1' },
    { 'time': '22:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '23:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '24:1', 'note': 'C3', 'duration': '0:0:1' },
    { 'time': '25:1', 'note': 'C3', 'duration': '0:0:1' },

  ];

  const key1 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(pingPong);

  const keyPart = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(23).stop(90);

  const keyline2 = [
    { 'time': '0:3', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '1:3', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '3:3', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '4:3', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '5:3', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '6:3', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '7:3', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '10:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '11:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '12:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '13:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '14:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '15:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '16:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '17:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '18:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '19:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '20:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '21:1', 'note': 'F3', 'duration': '0:0:1' },
    { 'time': '22:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '23:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '24:1', 'note': 'C#3', 'duration': '0:0:1' },
    { 'time': '25:1', 'note': 'C#3', 'duration': '0:0:1' },

  ];

  const key2 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(pingPong);

  const keyPart2 = new Tone.Part(function (time, note) {
    key2.triggerAttackRelease(note.note, note.duration, time);
  }, keyline2).start(23).stop(90);

  const keyline3 = [
    { 'time': '0:3', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '1:3', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '3:3', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '4:3', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '5:3', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '6:3', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '7:3', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '10:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '11:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '12:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '13:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '14:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '15:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '16:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '17:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '18:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '19:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '20:1', 'note': 'A3', 'duration': '0:0:1' },
    { 'time': '21:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '22:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '23:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '24:1', 'note': 'G3', 'duration': '0:0:1' },
    { 'time': '25:1', 'note': 'G3', 'duration': '0:0:1' },

  ];

  const key3 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(pingPong);

  const keyPart3 = new Tone.Part(function (time, note) {
    key3.triggerAttackRelease(note.note, note.duration, time);
  }, keyline3).start(23).stop(90);

  //-----------------------------------
  //-----------------------------------
  //LOW ATMOSPHERE INTRO
  const synth4 = new Tone.Synth({
    oscillator: {
      volume: -12,
      count: 3,
      spread: 50,
      type: "sine"
    }
  }).toDestination();

  const seq4 = new Tone.Sequence((time, note) => {
    synth4.triggerAttackRelease(note, "2n", time);
  }, ["A1", "F1", "D1", "F1"]).start(8).stop(76);
  //-----------------------------------
  //-----------------------------------
  //BD
  const kickDrum = new Tone.MembraneSynth({
    volume: -18,
  }).toDestination();

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
    { time: '8:1:' },
    { time: '9:1:' },
    { time: '10:1:' },
    { time: '11:1:' },
    { time: '12:1:' },
    { time: '13:1:' },
    { time: '14:1:' },
    { time: '15:1:' },
    { time: '16:1:' },
    { time: '17:1:' },
    { time: '18:1:' },
    { time: '19:1:' },
    { time: '20:1:' },
    { time: '21:1:' },
    { time: '22:1:' },
    { time: '23:1:' },
    { time: '24:1:' },
    { time: '25:1:' },
    { time: '26:1:' },
    { time: '27:1:' },
    { time: '28:1:' },
    { time: '29:1:' },
  ];

  const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
  }, kicks).start(0);

  //-----------------------------------
  //-----------------------------------
  //SD

  const lowPass = new Tone.Filter({
    frequency: 4000,
  }).connect(feedbackDelay);

  const snareDrum = new Tone.NoiseSynth({
    volume: -24,
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
    { time: '28:2' },
    { time: '29:2' },

  ]

  const snarePart = new Tone.Part(function (time) {
    snareDrum.triggerAttackRelease('4n', time)
  }, snares).start(0);

  //-----------------------------------
  //-----------------------------------
  //HH

  const hhPattern = [
    { 'duration': '0:0:1', 'time': '0:0' },
    { 'duration': '0:0:1', 'time': '0:1' },
    { 'duration': '0:0:1', 'time': '0:2' },
    { 'duration': '0:0:1', 'time': '0:2:1' },
    { 'duration': '0:0:1', 'time': '0:2:2' },
    { 'duration': '0:0:1', 'time': '0:2:3' },
    { 'duration': '0:0:1', 'time': '0:3' },
    { 'duration': '0:0:1', 'time': '1:0' },
    { 'duration': '0:0:1', 'time': '1:1' },
    { 'duration': '0:0:1', 'time': '1:2' },
    { 'duration': '0:0:1', 'time': '1:2:1' },
    { 'duration': '0:0:1', 'time': '1:2:2' },
    { 'duration': '0:0:1', 'time': '1:2:3' },
    { 'duration': '0:0:1', 'time': '1:3' },
    { 'duration': '0:0:1', 'time': '1:4:2' },
    { 'duration': '0:0:1', 'time': '2:0' },
    { 'duration': '0:0:1', 'time': '2:1' },
    { 'duration': '0:0:1', 'time': '2:2' },
    { 'duration': '0:0:1', 'time': '2:2:1' },
    { 'duration': '0:0:1', 'time': '2:2:2' },
    { 'duration': '0:0:1', 'time': '2:2:3' },
    { 'duration': '0:0:1', 'time': '2:3' },
    { 'duration': '0:0:1', 'time': '3:0' },
    { 'duration': '0:0:1', 'time': '3:1' },
    { 'duration': '0:0:1', 'time': '3:2' },
    { 'duration': '0:0:1', 'time': '3:2:1' },
    { 'duration': '0:0:1', 'time': '3:2:2' },
    { 'duration': '0:0:1', 'time': '3:2:3' },
    { 'duration': '0:0:1', 'time': '3:3' },
    { 'duration': '0:0:1', 'time': '3:4:2' },
  ];

  const hhPattern2 = [
    { 'duration': '2n.', 'time': '0:0' },
    { 'duration': '2n.', 'time': '0:1:1' },
    { 'duration': '2n.', 'time': '0:1:2' },
    { 'duration': '2n.', 'time': '0:1:3' },
    { 'duration': '2n.', 'time': '0:1:4' },
    { 'duration': '2n.', 'time': '0:2' },
    { 'duration': '2n.', 'time': '0:2:1' },
    { 'duration': '2n.', 'time': '0:2:2' },
    { 'duration': '2n.', 'time': '0:2:3' },
    { 'duration': '2n.', 'time': '0:3' },
    { 'duration': '2n', 'time': '1:0' },
    { 'duration': '2n.', 'time': '1:1' },
    { 'duration': '2n.', 'time': '1:2' },
    { 'duration': '2n.', 'time': '1:2:1' },
    { 'duration': '2n.', 'time': '1:2:2' },
    { 'duration': '2n.', 'time': '1:2:3' },
    { 'duration': '2n.', 'time': '1:3' },
    { 'duration': '2n.', 'time': '1:4' },
    { 'duration': '2n.', 'time': '2:0' },
    { 'duration': '2n.', 'time': '2:1:1' },
    { 'duration': '2n.', 'time': '2:1:2' },
    { 'duration': '2n.', 'time': '2:1:3' },
    { 'duration': '2n.', 'time': '2:1:4' },
    { 'duration': '2n.', 'time': '2:2' },
    { 'duration': '2n.', 'time': '2:2:1' },
    { 'duration': '2n.', 'time': '2:2:2' },
    { 'duration': '2n.', 'time': '2:2:3' },
    { 'duration': '2n.', 'time': '2:3' },
    { 'duration': '2n', 'time': '3:0' },
    { 'duration': '2n.', 'time': '3:1' },
    { 'duration': '2n.', 'time': '3:2' },
    { 'duration': '2n.', 'time': '3:2:1' },
    { 'duration': '2n.', 'time': '3:2:2' },
    { 'duration': '2n.', 'time': '3:2:3' },
    { 'duration': '2n.', 'time': '3:3' },
    { 'duration': '2n.', 'time': '3:4' },
    /**/
  ];
  const HH_Pass = new Tone.Filter({
    frequency: 12000,
    type: "highpass"
  }).connect(feedbackDelay_HH);

console.log("SETEAR  const HH_Pass highpass");


  const noiseSynth = new Tone.NoiseSynth().connect(HH_Pass);
  noiseSynth.volume.value = -21;

  const hhPatternPart = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(15).stop(90);
  const hhPatternPart_1_copia = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(22).stop(90);
  const hhPatternPart_1_copia2 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(29).stop(90);

  const hhPatternPart2 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(8).stop(90);

  const hhPatternPart2_2 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(36).stop(90);
  const hhPatternPart2_3 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(43).stop(90);
  const hhPatternPart2_4 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(50).stop(90);
  const hhPatternPart2_5 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(57).stop(90);
  const hhPatternPart2_6 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(64).stop(90);
  //----------xxxx---------------

  document.getElementById("playButton").addEventListener("click", function () {
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
  /*
  player.autostart = true; 
  player2.autostart = true;
  const pitchShift = new Tone.PitchShift(14).toDestination();
  const filter = new Tone.Filter("C0").toDestination();
  // connect a node to the pitch shift and filter in parallel
  player.fan(pitchShift, filter);
  */

  const synth2 = new Tone.Synth({
    oscillator: {
      volume: -27,
      count: 3,
      spread: 70,
      type: "fatsawtooth"
    }
  }).toDestination();
  console.log("bass:");
  console.log(bass.get());

  console.log("lowpass:");
  console.log(lowPass.get());

  console.log("hiPass:");
  console.log(HH_Pass.get());

  Tone.Transport.start();
  Tone.Transport.bpm.value = 180;
}


/*
BiquadFilterType[] = ["lowpass", "highpass", "bandpass",
			"lowshelf", "highshelf", "notch", "allpass", "peaking"];
		assert(types.indexOf(type) !== -1, `Invalid filter type: ${type}`);
		this._filter.type = type;
*/