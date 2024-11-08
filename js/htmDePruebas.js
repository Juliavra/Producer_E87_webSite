function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  var volumen_directo_key = document.getElementById("volume_key");
  var volume_key_text = document.getElementById("volume_key_text");
  var fxSend_key = document.getElementById("fxsend_key");
  var fxsend_key_text = document.getElementById("fxsend_key_text");
  var fxSend_key_value = document.getElementById("fxsend_key_value");
  var fxreturn_key_text = document.getElementById("fxreturn_key_text");
  var fxreturn_key_value = document.getElementById("fxreturn_key_value");
  var fxreturn_key = document.getElementById("fxreturn_key");
  var volume_bd = document.getElementById("volume_bd");
  var volume_bd_text = document.getElementById("volume_bd_text");
  var volume_bd_value = document.getElementById("volume_bd_value");
  var fxsend_bd_text = document.getElementById("fxsend_bd_text");
  var fxsend_bd_value = document.getElementById("fxsend_bd_value");
  var fxsend_bd = document.getElementById("fxsend_bd");
  var fxreturn_bd_text = document.getElementById("fxreturn_bd_text");
  var fxreturn_bd_value = document.getElementById("fxreturn_bd_value");
  var fxreturn_bd = document.getElementById("fxreturn_bd");

  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.53).toDestination();
  const feedbackDelay_bd2 = new Tone.FeedbackDelay("2n.", 0.43).toDestination();

  const fxReturn_key1_vol = new Tone.Volume(-60).toDestination();
  const fxReturn_bd2_vol = new Tone.Volume(-10).toDestination();
  const bd2_vol = new Tone.Volume(-60).toDestination();
  const pingPong = new Tone.PingPongDelay("16n.", 0.7).connect(fxReturn_key1_vol);
  const pingPong_bd2 = new Tone.PingPongDelay("4n.", 0.9).connect(fxReturn_bd2_vol);
  const distortion = new Tone.Distortion(1).connect(fxReturn_bd2_vol);
  const keyline = [
    { 'time': '0:1', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:2', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:3', 'note': 'A#3', 'duration': '0:1' },
    { 'time': '0:4', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:5', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:6', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:7', 'note': 'C3', 'duration': '0:1' },
    { 'time': '0:8', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:9', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:10', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:11', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:12', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:13', 'note': 'A#3', 'duration': '0:1' },
    { 'time': '0:14', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:15', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:16', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:17', 'note': 'C3', 'duration': '0:1' },
    { 'time': '0:18', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:19', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:20', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:21', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:22', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:23', 'note': 'A#3', 'duration': '0:1' },
    { 'time': '0:24', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:25', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:26', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:27', 'note': 'C3', 'duration': '0:1' },
    { 'time': '0:28', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:29', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:30', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:31', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:32', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:33', 'note': 'A#3', 'duration': '0:1' },
    { 'time': '0:34', 'note': 'D3', 'duration': '0:1' },
    { 'time': '0:35', 'note': 'A3', 'duration': '0:1' },
    { 'time': '0:36', 'note': 'D#3', 'duration': '0:1' },
    { 'time': '0:37', 'note': 'C3', 'duration': '0:1' },
    { 'time': '0:38', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:39', 'note': 'D3', 'duration': '0:3' },
    { 'time': '0:40', 'note': 'D3', 'duration': '0:1' },
  ];
  const key1_vol = new Tone.Volume(-60).toDestination();
  const fxSend_key1_vol = new Tone.Volume(-60).connect(pingPong);
  const fxSend_bd2_vol = new Tone.Volume(-10).connect(pingPong_bd2);
  key1_vol.mute = true;

  const key1 = new Tone.Synth({
    oscillator: {
      volume: -6,
      count: 3,
      spread: 40,
      type: "sawtooth"
    }
  }).connect(key1_vol);

  key1.fan(key1_vol, fxSend_key1_vol);

  const keyPart = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(0);

  const keyPart2 = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(15);

  volume_key_text.innerHTML = (`Volume Key 1`);
  volume_key_value.innerHTML = (`-60`);
  fxsend_key_text.innerHTML = (`FX Send Key 1`);
  fxSend_key_value.innerHTML = (`-60`);
  fxreturn_key_text.innerHTML = (`FX Rtrn Key 1`);
  fxreturn_key_value = (`-60`);
  volume_bd_text.innerHTML = (`Volume Bd 2`);
  volume_bd_value.innerHTML = (`-60`);
  fxsend_bd_text.innerHTML = (`FXSend BD`);
  fxsend_bd_value.innerHTML = (`-10`);
  fxreturn_bd_text.innerHTML = (`FXRtrn BD`);
  fxreturn_bd_value.innerHTML = (`-10`);

  volumen_directo_key.addEventListener("change", function (e) {
    key1_vol.volume.value = e.currentTarget.value;
    volume_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  fxSend_key.addEventListener("change", function (e) {
    fxSend_key1_vol.volume.value = e.currentTarget.value;
    fxSend_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  fxreturn_key.addEventListener("change", function (e) {
    fxReturn_key1_vol.volume.value = e.currentTarget.value;
    fxreturn_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  volume_bd.addEventListener("change", function (e) {
    bd2_vol.volume.value = e.currentTarget.value;
    volume_bd_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  fxsend_bd.addEventListener("change", function (e) {
    fxSend_bd2_vol.volume.value = e.currentTarget.value;
    fxsend_bd_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  fxreturn_bd.addEventListener("change", function (e) {
    fxReturn_bd2_vol.volume.value = e.currentTarget.value;
    fxreturn_bd_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("fxReturn_bd2_vol: " + fxReturn_bd2_vol.volume.value);
  });

  //-----------------------------------
  //-----------------------------------
  //BD
  const kickDrum = new Tone.MembraneSynth({
    volume: -18,
  }).connect(bd2_vol);

  const kicks = [
    { time: '0:0' },
    { time: '1:0' },
    { time: '2:0' },
    { time: '3:0' },
    { time: '4:0' },
    { time: '5:0' },
    { time: '6:0' },
    { time: '7:0' },
    { time: '8:0' },
    { time: '9:0' },
    { time: '10:0' },
    { time: '11:0' },
    { time: '12:0' },
    { time: '13:0' },
    { time: '14:0' },
    { time: '15:0' },
    { time: '16:0' },
    { time: '17:0' },
    { time: '18:0' },
    { time: '19:0' },
    { time: '20:0' },
    { time: '21:0' },
    { time: '22:0' },
    { time: '23:0' },
    { time: '24:0' },
    { time: '25:0' },
    { time: '26:0' },
    { time: '27:0' },
    { time: '28:0' },
    { time: '29:0' },
    { time: '30:0' },
    { time: '31:0' },
    { time: '32:0' },
    { time: '33:0' },
    { time: '34:0' },
    { time: '35:0' },
    { time: '36:0' },
    { time: '37:0' },
    { time: '38:0' },
    { time: '39:0' },
    { time: '40:0' },
    { time: '41:0' },
    { time: '42:0' },
    { time: '43:0' },
    { time: '44:0' },
    { time: '45:0' },
    { time: '46:0' },
    { time: '47:0' },
    { time: '48:0' },
    { time: '49:0' },
    { time: '50:0' },
    { time: '51:0' },
    { time: '52:0' },
    { time: '53:0' },
    { time: '54:0' },
    { time: '55:0' },
    { time: '56:0' },
    { time: '57:0' },
    { time: '58:0' },
    { time: '59:0' },
    { time: '60:0' },
    { time: '61:0' },
    { time: '62:0' },
    { time: '63:0' },
    { time: '64:0' },
    { time: '65:0' },
    { time: '66:0' },
    { time: '67:0' },
    { time: '68:0' },
    { time: '69:0' },
    { time: '70:0' },
    { time: '71:0' },
    { time: '72:0' },
    { time: '73:0' },
    { time: '74:0' },
    { time: '75:0' },
    { time: '76:0' },
    { time: '77:0' },
    { time: '78:0' },
    { time: '79:0' },
    { time: '80:0' },
    { time: '81:0' },
    { time: '82:0' },
    { time: '83:0' },
    { time: '84:0' },
    { time: '85:0' },
    { time: '86:0' },
    { time: '87:0' },
    { time: '88:0' },
    { time: '89:0' },
    { time: '90:0' },
    { time: '91:0' },
    { time: '92:0' },
    { time: '93:0' },
    { time: '94:0' },
    { time: '95:0' },
    { time: '96:0' },
    { time: '97:0' },
    { time: '98:0' },
    { time: '99:0' },
    { time: '100:0' },
    { time: '101:0' },
    { time: '102:0' },
    { time: '103:0' },
    { time: '104:0' },
    { time: '105:0' },
    { time: '106:0' },
    { time: '107:0' },
    { time: '108:0' },
    { time: '109:0' },



  ];

  kickDrum.fan(bd2_vol, fxSend_bd2_vol, feedbackDelay_bd2);
/*
  const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
    console.log("Bd hit");
  }, kicks).start(0).stop(90);
  const kickPart2 = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
  }, kicks).start(15).stop(90);
/**/ 

  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //SD

  const lowPass = new Tone.Filter({
    frequency: 12000,
  }).connect(feedbackDelay);

  const snareDrum = new Tone.NoiseSynth({
    volume: -24,
    noise: {
      type: 'pink',
      playbackRate: 3,
    },
    envelope: {
      attack: 0.001,
      decay: 0.80,
      sustain: 0.05,
      release: 0.23,
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
  /*
    const snarePart = new Tone.Part(function (time) {
      snareDrum.triggerAttackRelease('4n', time)
    }, snares).start(0);
    const snarePart2 = new Tone.Part(function (time) {
      snareDrum.triggerAttackRelease('4n', time)
    }, snares).start(15);
    /**/

  snareDrum.fan(pingPong, feedbackDelay);


  //-----------------------------------
  //-----------------------------------

  const bassline = [
    { 'time': '0:0', 'note': 'E4', 'duration': '0:0:3' },
    { 'time': '0:2', 'note': 'E4', 'duration': '0:0:3' },
    { 'time': '0:4', 'note': 'F#4', 'duration': '0:0:3' },
    { 'time': '1:2', 'note': 'F#4', 'duration': '0:0:3' },
    { 'time': '1:4', 'note': 'E4', 'duration': '0:0:3' },
    { 'time': '2:2', 'note': 'E4', 'duration': '0:0:3' },
    { 'time': '2:4', 'note': 'G#4', 'duration': '0:0:3' },
    { 'time': '3:2', 'note': 'G#4', 'duration': '0:0:3' },
    { 'time': '4:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '4:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '4:4', 'note': 'F#2', 'duration': '0:0:3' },
    { 'time': '5:2', 'note': 'F#2', 'duration': '0:0:3' },
    { 'time': '5:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '6:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '6:4', 'note': 'G#2', 'duration': '0:0:3' },
    { 'time': '7:2', 'note': 'G#2', 'duration': '0:0:3' },

  ];

  const lowPass_Bass = new Tone.Filter({
    frequency: 2000,
  }).toDestination();

  const bass = new Tone.Synth({
    oscillator: {
      volume: -12,
      count: 3,
      spread: 10,
      type: "sine"
    }
  }).connect(lowPass_Bass);

  const bassPart = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
  }, bassline).start(0);


  //-------------------------------------------
  //-------------------------------------------
  Tone.Transport.start().stop(30);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 3);
}

