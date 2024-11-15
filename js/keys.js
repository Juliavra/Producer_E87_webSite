function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.7).toDestination();
  feedbackDelay.volume = -9;
  const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();

  // Crear un efecto de reverb
  const reverb = new Tone.Reverb({
    decay: 4,
    wet: 0.4 // Nivel de mezcla del efecto
  }).toDestination(); // Conectar a la salida de audio
  reverb.generate();


const panner_key1 = new Tone.Panner(1).toDestination();
panner_key1.pan.rampTo(-1, 10);

const panner_key2 = new Tone.Panner(0).toDestination();
panner_key2.pan.rampTo(-1, 20);

const panner_key3 = new Tone.Panner(0).toDestination();
panner_key3.pan.rampTo(1, 30);

const panner_bd = new Tone.Panner(0).toDestination();
const panner_sd = new Tone.Panner(0).toDestination();
const panner_hh = new Tone.Panner(0).toDestination();
//panner_bd.pan.rampTo(1, 5);
//panner_sd.pan.rampTo(-1, 6);
//panner_hh.pan.rampTo(-1, 10);

  const keyline = [
    { 'time': '0:0', 'note': 'D3', 'duration': '11:3:0' },
    { 'time': '12:0', 'note': 'D3', 'duration': '12:0:0' },
  ];

  const key1 = new Tone.Synth({
    oscillator: {
      volume: -10,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(panner_key1);
/*
  const keyPart = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(0).stop(90);
/**/
  const keyline2 = [
    { 'time': '0:0', 'note': 'F3', 'duration': '11:3:0' },
    { 'time': '12:0', 'note': 'F3', 'duration': '12:0:0' },
  ];

  const key2 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(panner_key2);
/*
  const keyPart2 = new Tone.Part(function (time, note) {
    key2.triggerAttackRelease(note.note, note.duration, time);
  }, keyline2).start(0).stop(90);
/**/
  const keyline3 = [
    { 'time': '0:0', 'note': 'A3', 'duration': '11:3:0' },
    { 'time': '12:0', 'note': 'A3', 'duration': '12:0:0' },
  ];

  const key3 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).connect(panner_key3);
/*
  const keyPart3 = new Tone.Part(function (time, note) {
    key3.triggerAttackRelease(note.note, note.duration, time);
  }, keyline3).start(0).stop(90);
/**/
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
      volume: -27
    }).connect(pingPong);
   
    const tomPart = new Tone.Part(function (time, note) {
      tom.triggerAttackRelease(note.note, note.duration, time);
    }, tomline).start(0);
   /*
    const tomPart_2 = new Tone.Part(function (time, note) {
      tom.triggerAttackRelease(note.note, note.duration, time);
    }, tomline).start(10);
  
    const tomPart_3 = new Tone.Part(function (time, note) {
      tom.triggerAttackRelease(note.note, note.duration, time);
    }, tomline).start(20);
  
    const tomPart_4 = new Tone.Part(function (time, note) {
      tom.triggerAttackRelease(note.note, note.duration, time);
    }, tomline).start(30);
    */
  //-----------------------------------
  //-----------------------------------
  //SUB LOW INTRO
  /*
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
      volume: -21,
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
  /*
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
  //-----------------------------------
  //-----------------------------------
  //C2 Bass line
  /*
  const basslineC2 = [
    { 'time': '0:0', 'note': 'A2', 'duration': '0:2' },
    { 'time': '0:2', 'note': 'F2', 'duration': '0:2' },
    { 'time': '1:2', 'note': 'D2', 'duration': '1:1' },
    { 'time': '2:1', 'note': 'D1', 'duration': '0:0:1' },
    { 'time': '2:2', 'note': 'D1', 'duration': '0:0:1' },
    { 'time': '2:3', 'note': 'F2', 'duration': '1:0:0' },

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
      type: "sine"
    }
  }).toDestination();

  const bassPartC_1 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2).start(0);

  const bassPart_2 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_2).start(10);

  const bassPart_3 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_3).start(20);
  const bassPart_4 = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, basslineC2_3).start(30);
  /* 
   */
  //-----------------------------------
  //-----------------------------------
  /*  
    const synthBass = new Tone.Synth({
      oscillator: {
        volume: -11,
        count: 3,
        spread: 50,
        type: "sine"
      }
    }).toDestination();
  
    const bassC2 = [
      { 'time': '0:0', 'note': 'A2', 'duration': '1:2' },
      { 'time': '1:2', 'note': 'F2', 'duration': '0:2' },
      { 'time': '1:4', 'note': 'D2', 'duration': '1:1' },
      { 'time': '2:1', 'note': 'D3', 'duration': '0:1' },
      { 'time': '2:2', 'note': 'D3', 'duration': '0:1' },
      { 'time': '2:3', 'note': 'F2', 'duration': '1:0:0' },
  
    ];
    const bassC2Part1 = new Tone.Part(function (time, note) {
      bass.triggerAttackRelease(note.note, note.duration, time);
    }, bassC2).start(0);
  
    const seq5 = new Tone.Sequence((time, note) => {
       synth4.triggerAttackRelease(note, "4n", time);
     }, ["A2", "A2", "F2", "F2", "D2","D2", "F2", "F2"]).start(8).stop(12);
     /*
     const seq6 = new Tone.Sequence((time, note) => {
       synth4.triggerAttackRelease(note, "8n", time);
     }, ["A2", "A2", "F2", "F2", "D2","D2", "F2", "F2"]).start(14).stop(20);
     /**/
  //-----------------------------------
  //-----------------------------------
  //BD
 
  const kickDrum = new Tone.MembraneSynth({
    volume: -18,
  }).connect(panner_bd);

  const kicks = [
    { time: '0:4' },
    { time: '1:4' },
    { time: '2:4' },
    { time: '3:4' },
    { time: '4:4' },
    { time: '5:4' },
    { time: '6:4' },
    { time: '7:4' },
    { time: '8:4' },
    { time: '9:4' },
    { time: '10:4:' },
    { time: '11:4:' },
    { time: '12:4:' },
    { time: '13:4:' },
    { time: '14:4:' },
    { time: '15:4:' },
    { time: '16:4:' },


  ];

  const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
  }, kicks).start(0);
/**/ 
  //-----------------------------------
  //-----------------------------------
  //SD
  
  const snares = [
    { time: '0:4' },
    { time: '1:4' },
    { time: '2:4' },
    { time: '3:4' },
    { time: '4:4' },
    { time: '5:4' },
    { time: '6:4' },
    { time: '7:4' },
    { time: '8:4' },
    { time: '9:4' },
    { time: '10:4' },
    { time: '11:4' },
    { time: '12:4' },
    { time: '13:4' },
    { time: '14:4' },
    { time: '15:4' },
    { time: '16:4' },
    { time: '17:4' },
    { time: '18:4' },
    { time: '19:4' },
    { time: '20:4' },
    { time: '21:4' },
    { time: '22:4' },
    { time: '23:4' },
    { time: '24:4' },
    { time: '25:4' },
    { time: '26:4' },

  ]
  const lowPass = new Tone.Filter({
    frequency: 4000,
  }).connect(panner_sd);

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
/**/
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
    { 'duration': '0:0:1', 'time': '0:1:0' },
    { 'duration': '0:0:1', 'time': '0:1:2' },
    { 'duration': '0:0:1', 'time': '0:1:3' },
    { 'duration': '0:0:1', 'time': '0:2:0' },
    { 'duration': '0:0:1', 'time': '0:3:0' },
    { 'duration': '0:0:3', 'time': '0:3:2 ' },
    { 'duration': '0:0:1', 'time': '0:4:0' },
    { 'duration': '0:0:1', 'time': '0:4:1' },
    { 'duration': '0:0:1', 'time': '0:4:1:1' },
    { 'duration': '0:0:1', 'time': '0:4:1:3' },
    { 'duration': '0:0:1', 'time': '0:5:0' },
    { 'duration': '0:0:1', 'time': '0:6:0' },
    { 'duration': '0:0:1', 'time': '0:7:0' },
    { 'duration': '0:0:1', 'time': '0:7:1' },
    { 'duration': '0:0:1', 'time': '0:7:2' },
    { 'duration': '0:0:1', 'time': '0:7:3' },
    { 'duration': '0:0:1', 'time': '0:7:4' },
    { 'duration': '0:0:1', 'time': '0:8:0:0' },
    { 'duration': '0:0:1', 'time': '0:8:0:1' },
    { 'duration': '0:0:1', 'time': '0:8:0:2' },
    { 'duration': '0:0:1', 'time': '0:8:0:3' },
    { 'duration': '0:0:1', 'time': '0:9:0' },



    { 'duration': '0:0:1', 'time': '0:9:1' },
    { 'duration': '0:0:1', 'time': '0:9:2' },
    { 'duration': '0:0:1', 'time': '0:9:3' },
    { 'duration': '0:0:1', 'time': '0:9:4' },
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
    { 'duration': '2n.', 'time': '0:0:1' },
    { 'duration': '2n.', 'time': '0:0:2' },
    { 'duration': '2n.', 'time': '0:0:3' },
    { 'duration': '2n.', 'time': '0:0:4' },
    { 'duration': '2n.', 'time': '0:1:1' },
    { 'duration': '2n.', 'time': '0:1:2' },
    { 'duration': '2n.', 'time': '0:1:3' },
    { 'duration': '2n.', 'time': '0:1:4' },
    { 'duration': '2n.', 'time': '0:2:1' },
    { 'duration': '2n.', 'time': '0:2:2' },
    { 'duration': '2n.', 'time': '0:2:3' },
    { 'duration': '2n.', 'time': '0:2:4' },
    { 'duration': '2n.', 'time': '0:3:1' },
    { 'duration': '2n.', 'time': '0:3:2' },
    { 'duration': '2n.', 'time': '0:3:3' },
    { 'duration': '2n.', 'time': '0:3:4' },
    { 'duration': '2n.', 'time': '0:4:1' },
    { 'duration': '2n.', 'time': '0:4:2' },
    { 'duration': '2n.', 'time': '0:4:3' },
    { 'duration': '2n.', 'time': '0:4:4' },
    { 'duration': '2n.', 'time': '0:5:1' },
    { 'duration': '2n.', 'time': '0:5:2' },
    { 'duration': '2n.', 'time': '0:5:3' },
    { 'duration': '2n.', 'time': '0:5:4' },
    { 'duration': '2n.', 'time': '0:6:1' },
    { 'duration': '2n.', 'time': '0:6:2' },
    { 'duration': '2n.', 'time': '0:6:3' },
    { 'duration': '2n.', 'time': '0:6:4' },
    { 'duration': '2n.', 'time': '0:7:1' },
    { 'duration': '2n.', 'time': '0:7:2' },
    { 'duration': '2n.', 'time': '0:7:3' },
    { 'duration': '2n.', 'time': '0:7:4' },
    { 'duration': '2n.', 'time': '0:8:1' },
    { 'duration': '2n.', 'time': '0:8:2' },
    { 'duration': '2n.', 'time': '0:8:3' },
    { 'duration': '2n.', 'time': '0:8:4' },



  ];
/**/

  const noiseSynth = new Tone.NoiseSynth().toDestination();
  noiseSynth.volume.value = -32;

  const hhPatternPart = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(0).stop(40);

 /* const hhPatternPartCOPIA = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(0.032).stop(40);
*/
  const pitchShift = new Tone.PitchShift(-7).connect(pingPong);
  const filter = new Tone.Filter("C4").toDestination();
  noiseSynth.fan(filter);
pitchShift.volume = -92;
 /* const hhPatternPart_1_copia = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(22).stop(45);
  

  const hhPatternPart_1_copia2 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern).start(29).stop(45);
*/
/*  const hhPatternPart2 = new Tone.Part(function (time, note) {
    noiseSynth.triggerAttackRelease(note.duration, time);
  }, hhPattern2).start(8).stop(45);
/**/

  //-----------------------------------
  //-----------------------------------

  /*  */
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

  Tone.Transport.start().stop(50);
  Tone.Transport.bpm.value = 140;
  //Tone.Transport.bpm.rampTo(140, 3);
}
