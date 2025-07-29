function play1() {
  const player_1_Node = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
  // play as soon as the buffer is loaded
  player_1_Node.autostart = true;
}

function play2() {
//  const player_2_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  const player_2_Node = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();

  player_2_Node.debug = true;
  player_2_Node.volume.value = -12;
  //player_2_Node.autoplay = true;

/*
  do {
    
  } while(!player_2_Node.loaded) ;
*/
/*
  if (!player_2_Node.loaded) {
    console.log("NOT loaded");
  }
  else {
    //var duration = player_2_Node.buffer.duration;
    //player_2_duration_value.innerHTML = Math.round(`${duration}`);
    player_2_Node.start();
  }
*/












  //player_2_Node.buffer.set(decodedBuffer_twosecs);

  console.log("player_2_Node.name: " + player_2_Node.name);
  console.log("player_2_Node.buffer: " + player_2_Node.buffer);
  
  console.log("player_2_Node,buffer.numberOfChannels: " + player_2_Node.buffer.numberOfChannels);
  console.log("player_2_Node.numberOfChannels : " + player_2_Node.numberOfChannels);
  console.log("player_2_Node samplerate: " + player_2_Node.sampleRate);
  console.log("Tone.context samplerate: " + Tone.context.sampleRate);
  //alert("")



}