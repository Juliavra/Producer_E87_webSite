function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

const mainVolume = new Tone.Volume(10).toDestination();
  //const feedbackDelay = new Tone.FeedbackDelay("8n", 1).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay("8n", 1).connect(mainVolume);
  feedbackDelay.volume = -9;
  const pingPong = new Tone.PingPongDelay("4n", 0.2).connect(mainVolume);
  const pingPong_bass = new Tone.PingPongDelay("8n", 0.6).connect(mainVolume);

  // Crear un efecto de reverb
  const reverb = new Tone.Reverb({
    decay: 4,
    wet: 0.4 // Nivel de mezcla del efecto
  }).connect(mainVolume);
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
  }, tomline).start(0.1);

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
  }, bassline).start(0.1);

  const bassPart2 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(10);

  //-----------------------------------
  //-----------------------------------
  //C2 Bass line

  const bassC2 = new Tone.Synth({
    oscillator: {
      volume: -90,
      count: 3,
      spread: 70,
      type: "triangle"
    }
  }).connect(mainVolume);
 

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
  }, bassC2_2).start(0.1);

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
  }, keyline).start(0.1).stop(16);

  //-----------------------------------
  Tone.Transport.start(0.1).stop(17);
}
