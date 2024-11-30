function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;

  /*
  const player = new Tone.Player("url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01%20Dark%20Ringy%20Short%20Loop.mp3").toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;
/**/ 

/*
  const player = new Tone.Player("url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;
/**/

/*
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
  /**/
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
  //-----------------------------------
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

  //console.log(bass.get());
  Tone.Transport.start().stop(17);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(140, 3);
}
