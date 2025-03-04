function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  const feedbackDelay = new Tone.FeedbackDelay("8n", 1).toDestination();
  feedbackDelay.volume = -9;
  const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
  const pingPong_bass = new Tone.PingPongDelay("8n", 0.6).toDestination();

  // Crear un efecto de reverb
  const reverb = new Tone.Reverb({
    decay: 4,
    wet: 0.4 // Nivel de mezcla del efecto
  }).toDestination(); // Conectar a la salida de audio
  reverb.generate();

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
    pitchDecay: 7.1,
    volume: -27
  }).connect(pingPong);

  const tomPart = new Tone.Part(function (time, note) {
    tom.triggerAttackRelease(note.note, note.duration, time);
  }, tomline).start(0);

  const tomPart_2 = new Tone.Part(function (time, note) {
    tom.triggerAttackRelease(note.note, note.duration, time);
  }, tomline).start(10);

  //-----------------------------------
  //-----------------------------------
  //SUB LOW INTRO
  const bassline = [
    { 'time': '0:0', 'note': 'G8', 'duration': '0:1:0' },
    { 'time': '1:2', 'note': 'B9', 'duration': '0:2' },
    { 'time': '2:0', 'note': 'D9', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D9', 'duration': '0:1' },
    { 'time': '2:2', 'note': 'D9', 'duration': '0:1' },
    { 'time': '2:3', 'note': 'F8', 'duration': '1:0' },

  ];

  const bass = new Tone.Synth({
    oscillator: {
      volume: -24,
      count: 3,
      spread: 20,
      type: "fatsawtooth"
    }
  }).connect(pingPong_bass);
 
  const bassPart = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(0);

  const bassPart2 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(10);


  //-----------------------------------
  //-----------------------------------
  //LOW ATMOSPHERE INTRO
  const synth4 = new Tone.Synth({
    oscillator: {
      volume: -27,
      count: 3,
      spread: 50,
      type: "sawtooth"
    }
  }).toDestination();


  /**/
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //C2 Bass line
  const basslineC2 = [
    { 'time': '0:0', 'note': 'A7', 'duration': '1:0' },
    { 'time': '0:2', 'note': 'F7', 'duration': '1:0' },
    { 'time': '1:2', 'note': 'D7', 'duration': '1:0' },
    { 'time': '2:1', 'note': 'D7', 'duration': '1:0' },
    { 'time': '2:2', 'note': 'D7', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F7', 'duration': '1:0' },

  ];
  const basslineC2_2 = [
    { 'time': '0:0', 'note': 'A2', 'duration': '0:2' },
    { 'time': '0:2', 'note': 'F2', 'duration': '0:2' },
    { 'time': '1:2', 'note': 'D2', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D1', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D1', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F2', 'duration': '1:0' },

  ];
  const basslineC2_3 = [
    { 'time': '0:0', 'note': 'A2', 'duration': '0:1' },
    { 'time': '0:2', 'note': 'F2', 'duration': '0:1' },
    { 'time': '1:2', 'note': 'D2', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D1', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D1', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F2', 'duration': '1:0' },

  ];
  const basslineC2_4 = [
    { 'time': '0:0', 'note': 'A2', 'duration': '0:3' },
    { 'time': '0:4', 'note': 'F2', 'duration': '0:1' },
    { 'time': '1:2', 'note': 'D2', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D1', 'duration': '0:1:0' },
    { 'time': '2:2', 'note': 'D1', 'duration': '1:0' },
    { 'time': '2:3', 'note': 'F2', 'duration': '1:0' },

  ];

  const bassC2 = new Tone.Synth({
    oscillator: {
      volume: -90,
      count: 3,
      spread: 70,
      type: "triangle"
    }
  }).toDestination();
/*
  const bassPartC_1 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2).start(18);

  const bassPart_2 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_2).start(10);

  const bassPart_3 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_3).start(20);
  const bassPart_4 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_3).start(30);
  */
  /* 
   */
  //-----------------------------------
  //-----------------------------------
 
  const synthBass = new Tone.Synth({
    oscillator: {
      volume: -31,
      count: 1,
      spread: 1,
      type: "sine"
    }
  }).toDestination();

  const bassC2_2 = [
    { 'time': '0:0', 'note': 'A2', 'duration': '1:2' },
    { 'time': '1:2', 'note': 'F2', 'duration': '0:2' },
    { 'time': '1:4', 'note': 'D2', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D3', 'duration': '0:1' },
    { 'time': '2:2', 'note': 'D3', 'duration': '0:1' },
    { 'time': '2:3', 'note': 'F2', 'duration': '1:0:0' },

  ];
  const bassC2Part1 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassC2_2).start(0);

  

  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  
  const keyline = [
    { 'time': '0:0', 'note': 'C4', 'duration': '16:0:0' },
 
  ];

  const key1 = new Tone.Synth({
    oscillator: {
      volume: -2,
      count: 30,
      spread: 100,
      type: "square"
    }
  }).connect(pingPong);

  const keyPart = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(0).stop(16);

  //-----------------------------------
  //-----------------------------------
  //----------xxxx---------------

  document.getElementById("playButton").addEventListener("click", function () {
    if (Tone.Transport.state !== 'started') {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
  });

  const synth2 = new Tone.Synth({
    oscillator: {
      volume: -27,
      count: 3,
      spread: 70,
      type: "fatsawtooth"
    }
  }).toDestination();
  //console.log(bass.get());

  Tone.Transport.start().stop(17);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(140, 3);
}
