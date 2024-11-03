function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  var volumen_directo_key = document.getElementById("volume_key");
  const feedbackDelay = new Tone.FeedbackDelay("2n", 0.6).toDestination();
  feedbackDelay.volume = -9;
  /* const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
   const pingPong_bass = new Tone.PingPongDelay("8n", 0.6).toDestination();
 */
  // Crear un efecto de reverb
  const reverb = new Tone.Reverb({
    decay: 0.4,
    wet: 0.4 // Nivel de mezcla del efecto
  }).toDestination(); // Conectar a la salida de audio
  // reverb.generate();

  const tomline = [
    { 'time': '1:0', 'note': 'A3', 'duration': '0:2' },
    /*   { 'time': '0:2', 'note': 'F3', 'duration': '0:2' },
      { 'time': '1:2', 'note': 'D3', 'duration': '1:1' },
      { 'time': '2:1', 'note': 'D4', 'duration': '0:0:1' },
      { 'time': '2:2', 'note': 'D4', 'duration': '0:0:1' },
      { 'time': '2:3', 'note': 'F3', 'duration': '1:0:0' },
  */
  ];
  const tom_vol = new Tone.Volume(-12).toDestination();
  const tom_vol_fxSend = new Tone.Volume(-18).connect(feedbackDelay);
  //tom_vol.volume.value = -30;
  //tom_vol.mute = true;

  const tom = new Tone.MembraneSynth({
    octaves: 2,
    pitchDecay: 7.1,
    volume: -9
  }).connect(tom_vol);

  const tomPart = new Tone.Part(function (time, note) {
    tom.triggerAttackRelease(note.duration, time);
    console.log("sd original:  ");
  }, tomline).start(0);

  tom.fan(tom_vol_fxSend, tom_vol, reverb);

  const keyline = [
    { 'time': '0:0', 'note': 'D3', 'duration': '14:0' },

  ];

  const key1 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 40,
      type: "sine"
    }
  }).toDestination();

  const keyPart = new Tone.Part(function (time, note) {
    key1.triggerAttackRelease(note.note, note.duration, time);
  }, keyline).start(0);

  const key1_vol = new Tone.Volume(-12).toDestination();


  volumen_directo_key.addEventListener("change", function (e) {
    key1_vol.volume = e.currentTarget.value;
    volumen_directo_key.value = (e.currentTarget.value);
    volume_key_value.innerHTML = volume_key_value.innerHTML = Math.round(`${e.currentTarget.value * 100}`);

  });


  Tone.Transport.start().stop(30);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 3);
}