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

  const fxReturn_key1_vol = new Tone.Volume(-60).toDestination();
  const pingPong = new Tone.PingPongDelay("16n.", 0.7).connect(fxReturn_key1_vol);
  const distortion = new Tone.Distortion(0.7).toDestination();
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

  volume_key_text.innerHTML = (`Volumen Key 1`);
  fxsend_key_text.innerHTML = (`FX Send Key 1`);
  fxreturn_key_text.innerHTML = (`FX Return Key 1`);

  volumen_directo_key.addEventListener("change", function (e) {
    key1_vol.volume.value = e.currentTarget.value;
    volume_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    //  console.log("key1_vol: " + key1_vol.volume.value);
  });

  fxSend_key.addEventListener("change", function (e) {
    fxSend_key1_vol.volume.value = e.currentTarget.value;
    fxSend_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    //console.log("fxSend_key1_vol: " + fxSend_key1_vol.volume.value);
  });

  fxreturn_key.addEventListener("change", function (e) {
    fxReturn_key1_vol.volume.value = e.currentTarget.value;
    fxreturn_key_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("fxreturn_key: " + fxReturn_key1_vol.volume.value);
  });
  
//-----------------------------------
  //-----------------------------------
  //BD
  const kickDrum = new Tone.MembraneSynth({
    volume: -18,
  }).toDestination();

  const kicks = [
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
  ];

  const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
  }, kicks).start(0);

  //-----------------------------------
  //-----------------------------------
  


  Tone.Transport.start().stop(30);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 3);
}

