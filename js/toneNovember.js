  //CREAR AUDIO CONTEXT
  const now = Tone.now();
  Tone.Transport.start();
  Tone.Transport.bpm.value = 120;

  var player_1 = document.getElementById("myAudio");
  player_1.src = `C:/Users/Juli/My Projects/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3`;
    
  const synthFM = new Tone.FMSynth().toDestination();
  const synthAM = new Tone.AMSynth().toDestination();

  const loopFM = new Tone.Loop((time) => {
    synthFM.triggerAttackRelease("A-2", "64n", time);
  }, "2n").start(0.315).stop("+8.25");

  const osc = new Tone.Oscillator().toDestination();
  osc.frequency.value = "C2";
  osc.volume.value = -18;                     // start at "C4"
  //osc.frequency.rampTo("C0",1 );                  // ramp to "C2" over 2 seconds

  osc.start().stop("+0.065");                        // start the oscillator for 2 seconds
  osc.start("+0.125").stop("+0.190");
  osc.start("+0.25").stop("+0.315");
  osc.start("+0.375").stop("+0.440");
  osc.start("+0.50").stop("+0.565");
  osc.start("+0.625").stop("+0.690");
  osc.start("+0.75").stop("+0.815");
  osc.start("+0.875").stop("+0.940");
  osc.start("+1").stop("+1.065");
  osc.frequency.value = "C2";
  osc.start("+1.125").stop("+1.25");
  osc.frequency.value = "C0";
  osc.start("+1.25").stop("+1.315");
  osc.start("+1.375").stop("+1.440");
  osc.start("+1.50").stop("+1.565");
  osc.start("+1.625").stop("+1.690");
  osc.start("+1.75").stop("+1.815");
  osc.start("+1.875").stop("+1.940");
  osc.start("+2").stop("+2.065");
  osc.frequency.value = "C2";
  osc.start("+2.125").stop("+2.315");
  osc.frequency.value = "C0";
  osc.start("+2.375").stop("+2.440");
  osc.start("+2.50").stop("+2.565");
  osc.start("+2.625").stop("+2.690");
  osc.start("+2.75").stop("+2.815");
  osc.start("+3").stop("+3.065");
  osc.start("+3.125").stop("+3.190");
  osc.start("+3.25").stop("+3.315");
  osc.start("+3.375").stop("+3.440");
  osc.start("+3.50").stop("+3.565");
  osc.start("+3.625").stop("+3.690");
  osc.start("+3.75").stop("+3.815");
  osc.start("+3.875").stop("+3.940");
  osc.start("+4").stop("+4.065");

  const loopOsc = new Tone.Loop((time) => {
    osc.start().stop("+0.065");
  }, "16n").start(5).stop("+5.25");
  console.log("FIN: loopOsc");

  const distortion = new Tone.Distortion(0.7).toDestination();
  osc.connect(distortion);
  synthAM.connect(distortion);

  const loopB = new Tone.Loop((time) => {
    synthAM.triggerAttackRelease("C1", "16n", time);
  }, "32n").start(2).stop("+6");
  console.log("FIN: loopB");

  const snareDrum = new Tone.NoiseSynth({
    volume: -18,
    noise: {
      type: 'white',
      playbackRate: 3,
    },
    envelope: {
      attack: 0.001,
      decay: 0.15,
      sustain: 0.5,
      release: 0.3,
    },
  }).connect(distortion);

  const snares = [

    { time: '0:0:2' },
    { time: '0:1:1' },
    { time: '0:1:2' },
    { time: '0:1:3' },
    { time: '0:1:4' },
    { time: '0:2:2' },
    { time: '0:2:3' },
    { time: '0:3' },
    { time: '0:4' },
    { time: '0:5' },
    { time: '0:6' },
    { time: '0:7' },
    { time: '0:7:3' },
    { time: '0:8' },
    { time: '0:8:2' },
    { time: '0:8:3' },
    { time: '0:8:4' },
  ]

  const snarePart = new Tone.Part(function (time) {
    snareDrum.triggerAttackRelease('32n', time)
  }, snares).start(0).stop("+8");

function startsSong() {
  Tone.Transport.start();
  player_1.play();
}