function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);
  /*
    const feedbackDelay = new Tone.FeedbackDelay("8n", 1).toDestination();
    feedbackDelay.volume = -9;
    const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
    const pingPong_bass = new Tone.PingPongDelay("8n", 0.6).toDestination();
  */
  // Crear un efecto de reverb
  const reverb = new Tone.Reverb({
    decay: 4,
    wet: 0.4 // Nivel de mezcla del efecto
  }).toDestination(); // Conectar a la salida de audio
  reverb.generate();

  const tomline = [
    { 'time': '0:0', 'note': 'A3', 'duration': '0:4' },
    /*   { 'time': '0:2', 'note': 'F3', 'duration': '0:2' },
      { 'time': '1:2', 'note': 'D3', 'duration': '1:1' },
      { 'time': '2:1', 'note': 'D4', 'duration': '0:0:1' },
      { 'time': '2:2', 'note': 'D4', 'duration': '0:0:1' },
      { 'time': '2:3', 'note': 'F3', 'duration': '1:0:0' },
  */
  ];
  const tom_vol=new Tone.Volume(-6).toDestination();
  tom_vol.volume.value = -30;
  tom_vol.mute = true;

  const tom = new Tone.MembraneSynth({
    octaves: 2,
    pitchDecay: 7.1,
    volume: -12
  }).connect(reverb,tom_vol);

  const tomPart = new Tone.Part(function (time, note) {
    tom.triggerAttackRelease(note.duration, time);
  }, tomline).start(0);

  tom.fan(filter);



/*const vol = new Tone.Volume(-6).toDestination();
const osc = new Tone.Oscillator().connect(vol).start();
vol.volume.value = -20;
// mute the output
vol.mute = true;
*/



  Tone.Transport.start().stop(30);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 3);
}
