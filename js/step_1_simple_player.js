function play1() {
  const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;
}

function play2() {
  const player2 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  // play as soon as the buffer is loaded
  player2.autostart = true;
}