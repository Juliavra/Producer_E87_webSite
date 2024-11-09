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
  const fxReturn_bd2_vol = new Tone.Volume(0).toDestination();
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
     }, snares).start(20);
     /**/

  snareDrum.fan(pingPong, feedbackDelay);

  //-----------------------------------
  //-----------------------------------

  const bassline = [
    { 'time': '0:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '0:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '0:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '1:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '1:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '2:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '2:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '3:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '4:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '4:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '4:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '5:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '5:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '6:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '6:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '7:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '8:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '8:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '8:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '9:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '9:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '10:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '10:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '11:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '12:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '12:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '12:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '13:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '13:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '14:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '14:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '15:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '16:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '16:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '16:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '17:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '17:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '18:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '18:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '19:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '20:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '20:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '20:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '21:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '21:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '22:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '22:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '23:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '24:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '24:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '24:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '25:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '25:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '26:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '26:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '27:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '28:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '28:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '28:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '29:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '29:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '30:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '30:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '30:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '31:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '31:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '32:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '32:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '33:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '34:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '34:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '34:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '35:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '35:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '36:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '36:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '37:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '38:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '38:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '38:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '39:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '39:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '40:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '40:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '41:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '42:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '42:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '42:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '43:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '43:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '44:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '44:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '45:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '46:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '46:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '46:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '47:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '47:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '48:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '48:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '49:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '50:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '50:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '50:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '51:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '51:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '52:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '52:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '53:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '54:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '54:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '54:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '55:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '55:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '56:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '56:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '57:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '58:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '58:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '58:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '59:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '59:4', 'note': 'E2', 'duration': '0:0:3' },

    /**/
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

  const teclaline = [
    { 'time': '0:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '0:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '0:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '1:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '1:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '2:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '2:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '3:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '4:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '4:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '4:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '5:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '5:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '6:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '6:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '7:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '8:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '8:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '8:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '9:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '9:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '10:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '10:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '11:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '12:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '12:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '12:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '13:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '13:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '14:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '14:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '15:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '16:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '16:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '16:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '17:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '17:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '18:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '18:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '19:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '20:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '20:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '20:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '21:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '21:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '22:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '22:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '23:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '24:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '24:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '24:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '25:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '25:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '26:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '26:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '27:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '28:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '28:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '28:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '29:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '29:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '30:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '30:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '30:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '31:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '31:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '32:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '32:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '33:2', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '34:0', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '34:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '34:4', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '35:2', 'note': 'C6', 'duration': '0:0:3' },
    { 'time': '35:4', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '36:2', 'note': 'E6', 'duration': '0:0:3' },
    { 'time': '36:4', 'note': 'G6', 'duration': '0:0:3' },
    { 'time': '37:2', 'note': 'G6', 'duration': '0:0:3' },
 /*   { 'time': '38:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '38:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '38:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '39:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '39:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '40:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '40:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '41:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '42:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '42:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '42:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '43:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '43:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '44:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '44:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '45:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '46:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '46:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '46:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '47:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '47:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '48:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '48:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '49:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '50:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '50:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '50:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '51:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '51:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '52:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '52:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '53:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '54:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '54:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '54:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '55:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '55:4', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '56:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '56:4', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '57:2', 'note': 'G2', 'duration': '0:0:3' },
    { 'time': '58:0', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '58:2', 'note': 'E2', 'duration': '0:0:3' },
    { 'time': '58:4', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '59:2', 'note': 'C2', 'duration': '0:0:3' },
    { 'time': '59:4', 'note': 'E2', 'duration': '0:0:3' },

    /**/
  ];

  const eq = new Tone.EQ3(-10, 3, -20).toDestination();

  const tecla = new Tone.Synth({
    oscillator: {
      volume: -32,
      count: 3,
      spread: 10,
      type: "sine"
    }
  }).connect(eq);


  const teclaPart = new Tone.Part(function (time, note) {
    tecla.triggerAttackRelease(note.note, note.duration, time);
  }, teclaline).start(0);


  //-------------------------------------------
  //-------------------------------------------
  Tone.Transport.start().stop(90);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 90);
}



/*

{
  "header": {
    "keySignatures": [],
    "meta": [],
    "name": "when_i_fall_in_love",
    "ppq": 480,
    "tempos": [
      {
        "bpm": 80,
        "ticks": 0
      }
    ],
    "timeSignatures": [
      {
        "ticks": 0,
        "timeSignature": [
          4,
          4
        ],
        "measures": 0
      }
    ]
  },
  "tracks": [
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "BASS",
      "notes": [],
      "endOfTrackTicks": 7312
    },
    {
      "channel": 0,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "bass",
        "number": 33,
        "name": "electric bass (finger)"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.175,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999993,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17500000000000004,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17500000000000004,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 1320,
          "time": 2.0625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 1560,
          "time": 2.4375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 36,
          "name": "C2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 5160,
          "time": 8.0625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 5400,
          "time": 8.4375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 36,
          "name": "C2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7716535433070866
        }
      ]
    },
    {
      "channel": 9,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          },
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          },
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          },
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          },
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "drums",
        "number": 0,
        "name": "standard kit"
      },
      "name": "KIT",
      "notes": [
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 47,
          "name": "B2",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 47,
          "name": "B2",
          "ticks": 3720,
          "time": 5.8125,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 49,
          "name": "C#3",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.8503937007874016
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.8503937007874016
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.8267716535433071
        }
      ],
      "endOfTrackTicks": 7480
    },
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "Melody",
      "notes": [],
      "endOfTrackTicks": 6772
    },
    {
      "channel": 1,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "organ",
        "number": 16,
        "name": "drawbar organ"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.08125,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 84,
          "name": "C6",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 84,
          "name": "C6",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 83,
          "name": "B5",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 79,
          "name": "G5",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 78,
          "name": "F#5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7716535433070866
        }
      ]
    },
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "Chords",
      "notes": [],
      "endOfTrackTicks": 7492
    },
    {
      "channel": 2,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "piano",
        "number": 2,
        "name": "electric grand piano"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        }
      ]
    }
  ]
}
*/