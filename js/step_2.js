function play1() {
  const buffer = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3").toDestination();
  if (!buffer.loaded) {
    buffer.volume.value = -15;
    buffer.autostart = true;
  }
  else { buffer.start(); }


  const player2 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  // play as soon as the buffer is loaded
  if (!player2.loaded) {
    player2.volume.value = -15;
    player2.autostart = true;
  }
  else { player2.start(); }

}

function play2() {
alert("SARASA ALERT");
}