function startsSong() {
  
 /*
  const osc = new Tone.Oscillator().toDestination();
  osc.volume.value = -32;
	// start at "C4"
	osc.frequency.value = "C2";
	// ramp to "C2" over 2 seconds
	osc.frequency.rampTo("C-2", 4);
	// start the oscillator for 2 seconds
	osc.start(0).stop("+3");
*/


	



  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.3).toDestination();
  feedbackDelay.volume = -9;
  const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
/*
    const tomline = [
    { 'time': '0:0', 'note': 'A3', 'duration': '0:2' },
    { 'time': '0:2', 'note': 'F3', 'duration': '0:2' },
    { 'time': '1:2', 'note': 'D3', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D4', 'duration': '0:0:1' },
    { 'time': '2:2', 'note': 'D4', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'F3', 'duration': '1:0:0' },

  ];
 
    const tom = new Tone.MembraneSynth({
      octaves: 2,
      pitchDecay: 0.1,
      volume: -15
  }).connect(pingPong);
 // tom.triggerAttackRelease("A3", "32n");
  const tomPart = new Tone.Part(function (time, note) {
    tom.triggerAttackRelease(note.note, note.duration, time);
  }, tomline).start(0);
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
  }, bassline3).start(30);
  /* 
   */
  //-----------------------------------
  //-----------------------------------
  //LOW ATMOSPHERE INTRO
  const synth4 = new Tone.Synth({
    oscillator: {
      volume: -18,
      count: 3,
      spread: 50,
      type: "sine"
    }
  }).toDestination();

  const seq4 = new Tone.Sequence((time, note) => {
    synth4.triggerAttackRelease(note, "2n", time);
  }, ["A1", "F1", "D1", "F1"]).start(8).stop(40);
  /**/
  //-----------------------------------
  //-----------------------------------

  //BD
  const kickDrum = new Tone.MembraneSynth({
    volume: -18,
  }).toDestination();

  const kicks = [
    { time: '0:0:0' },
    { time: '1:0' },
    { time: '2:0' },
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


  ];

  const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
  }, kicks).start(0);

  //-----------------------------------
  //-----------------------------------
  //SD
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

  ]
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

  const snarePart = new Tone.Part(function (time) {
    snareDrum.triggerAttackRelease('8n', time)
    console.log("snareDrum time: " + time);
  }, snares).start(0);

  //-----------------------------------
  //-----------------------------------
  //HH
  /*
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
*/
  const hhPattern = [
    { 'duration': '0:0:1', 'time': '0:0:0' },
    { 'duration': '0:0:1', 'time': '0:0:1' },
    { 'duration': '0:0:1', 'time': '0:0:2' },
    { 'duration': '0:0:1', 'time': '0:0:3' },
    { 'duration': '0:0:1', 'time': '0:1:0' },
    { 'duration': '0:0:1', 'time': '0:1:1' },
    { 'duration': '0:0:1', 'time': '0:1:2' },
    { 'duration': '0:0:1', 'time': '0:1:3' },
    { 'duration': '0:0:1', 'time': '0:2:0' },
    { 'duration': '0:0:1', 'time': '0:3:0' },
    { 'duration': '0:0:1', 'time': '0:4:0' },
    { 'duration': '0:0:1', 'time': '0:5:0' },
    { 'duration': '0:0:1', 'time': '0:6:0' },
    { 'duration': '0:0:1', 'time': '0:7:0' },
    { 'duration': '0:0:1', 'time': '0:8:0' },
    { 'duration': '0:0:1', 'time': '0:9:0' },
    { 'duration': '0:0:1', 'time': '0:10:0' },
    { 'duration': '0:0:1', 'time': '0:11:0' },
    { 'duration': '0:0:1', 'time': '0:12:0' },
    { 'duration': '0:0:1', 'time': '0:13:0' },
    { 'duration': '0:0:1', 'time': '0:14:0' },
    { 'duration': '0:0:1', 'time': '0:15:0' },
    { 'duration': '0:0:1', 'time': '0:16:0' },
    { 'duration': '0:0:1', 'time': '0:17:0' },
    { 'duration': '0:0:1', 'time': '0:18:0' },
    { 'duration': '0:0:1', 'time': '0:19:0' },
    { 'duration': '0:0:1', 'time': '0:20:0' },
    { 'duration': '0:0:1', 'time': '0:21:0' },
    { 'duration': '0:0:1', 'time': '0:22:0' },
    { 'duration': '0:0:1', 'time': '0:23:0' },
    { 'duration': '0:0:1', 'time': '0:24:0' },
    { 'duration': '0:0:1', 'time': '0:25:0' },
    { 'duration': '0:0:1', 'time': '0:26:0' },
    { 'duration': '0:0:1', 'time': '0:27:0' },
    { 'duration': '0:0:1', 'time': '0:28:0' },
    { 'duration': '0:0:1', 'time': '0:29:0' },
    { 'duration': '0:0:1', 'time': '0:30:0' },
    { 'duration': '0:0:1', 'time': '0:31:0' },
    { 'duration': '0:0:1', 'time': '0:32:0' },
    { 'duration': '0:0:1', 'time': '0:33:0' },
    { 'duration': '0:0:1', 'time': '0:34:0' },
    { 'duration': '0:0:1', 'time': '0:35:0' },
    { 'duration': '0:0:1', 'time': '0:36:0' },
    { 'duration': '0:0:1', 'time': '0:37:0' },
    { 'duration': '0:0:1', 'time': '0:38:0' },
    { 'duration': '0:0:1', 'time': '0:39:0' },
    { 'duration': '0:0:1', 'time': '0:40:0' },
    { 'duration': '0:0:1', 'time': '0:41:0' },
    { 'duration': '0:0:1', 'time': '0:42:0' },
    { 'duration': '0:0:1', 'time': '0:43:0' },
    { 'duration': '0:0:1', 'time': '0:44:0' },
    { 'duration': '0:0:1', 'time': '0:45:0' },
    { 'duration': '0:0:1', 'time': '0:46:0' },
    { 'duration': '0:0:1', 'time': '0:47:0' },
    { 'duration': '0:0:1', 'time': '0:48:0' },
    { 'duration': '0:0:1', 'time': '0:49:0' },
    { 'duration': '0:0:1', 'time': '0:50:0' },
    { 'duration': '0:0:1', 'time': '0:51:0' },
    { 'duration': '0:0:1', 'time': '0:52:0' },
    { 'duration': '0:0:1', 'time': '0:53:0' },
    { 'duration': '0:0:1', 'time': '0:54:0' },
    { 'duration': '0:0:1', 'time': '0:55:0' },
    { 'duration': '0:0:1', 'time': '0:56:0' },
    { 'duration': '0:0:1', 'time': '0:57:0' },
    { 'duration': '0:0:1', 'time': '0:58:0' },
    { 'duration': '0:0:1', 'time': '0:59:0' },
    { 'duration': '0:0:1', 'time': '0:60:0' },
    { 'duration': '0:0:1', 'time': '0:61:0' },
    { 'duration': '0:0:1', 'time': '0:62:0' },
    { 'duration': '0:0:1', 'time': '0:63:0' },
    { 'duration': '0:0:1', 'time': '0:64:0' },
    { 'duration': '0:0:1', 'time': '0:65:0' },
    { 'duration': '0:0:1', 'time': '0:66:0' },
    { 'duration': '0:0:1', 'time': '0:67:0' },
    { 'duration': '0:0:1', 'time': '0:68:0' },
    { 'duration': '0:0:1', 'time': '0:69:0' },
    { 'duration': '0:0:1', 'time': '0:70:0' },
    { 'duration': '0:0:1', 'time': '0:71:0' },
    { 'duration': '0:0:1', 'time': '0:72:0' },
    { 'duration': '0:0:1', 'time': '0:73:0' },
    { 'duration': '0:0:1', 'time': '0:74:0' },
    { 'duration': '0:0:1', 'time': '0:75:0' },
    { 'duration': '0:0:1', 'time': '0:76:0' },
    { 'duration': '0:0:1', 'time': '0:77:0' },
    { 'duration': '0:0:1', 'time': '0:78:0' },
    { 'duration': '0:0:1', 'time': '0:79:0' },
    { 'duration': '0:0:1', 'time': '0:80:0' },
  ];

  const hhPattern2 = [
    { 'duration': '2n.', 'time': '0:0:0' },
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
    { 'duration': '2n.', 'time': '1:3:1' },
    { 'duration': '2n.', 'time': '1:3:2' },
    { 'duration': '2n.', 'time': '1:3:3' },
    { 'duration': '2n.', 'time': '1:4' },

  ];

  //const noiseSynth = new Tone.NoiseSynth().connect(pingPong);
  const noiseSynth = new Tone.NoiseSynth().toDestination();
  noiseSynth.volume.value = -32;

  const hhPatternPart = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(0).stop(40);


  const pitchShift = new Tone.PitchShift(-14).connect(pingPong);
  const filter = new Tone.Filter("C3").connect(pingPong);
  noiseSynth.fan(pitchShift, filter);




  /*   const hhPatternPart_1_copia = new Tone.Part(function (time, note) {
      noiseSynth.triggerAttackRelease(note.duration, time);
    }, hhPattern).start(22).stop(45);
    const hhPatternPart_1_copia2 = new Tone.Part(function (time, note) {
      noiseSynth.triggerAttackRelease(note.duration, time);
    }, hhPattern).start(29).stop(45);
  
    const hhPatternPart2 = new Tone.Part(function (time, note) {
      noiseSynth.triggerAttackRelease(note.duration, time);
    }, hhPattern2).start(8).stop(45);
 */
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
  //console.log("bass:" );
  //console.log(bass.get());

  Tone.Transport.start();
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(140, 3);
}
