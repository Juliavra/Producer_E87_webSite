let array_audio = [];
var audio_buffer = new Tone.ToneAudioBuffer("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3",loaded() );
audio_buffer.debug = true;
//    console.log("loaded: " + Tone.immediate());
const player1_vol = new Tone.Volume(-100).toDestination();
const player1 = new Tone.Player();
//console.log("player1_vol in; " + player1_vol.numberOfInputs);



player1.volume.value = 0;
player1.buffer.set(audio_buffer);
player1_vol.volume.value = -12;

if (!player1.loaded) {
  player1.autostart = true;
  console.log("IF");
}
else { console.log("ELSE");
  //var duration = player1.buffer.duration;
  //console.log("Durattion: " + duration);
  //player1.start();
}
/*
  setInterval(() => {
    console.log(Tone.immediate());
  }, 3000);
*/
//Tone.Destination


//startsSong();
creaelementoenfoo();



function startsSong() {
  var len = player1.buffer.length;
  console.log(audio_buffer.get());
  console.log("len: " + len);
  Tone.Transport.start();
  player1.start();
}

function loaded(){
  console.log("song loaded");
}

function creaelementoenfoo(){
  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.53).toDestination();
  console.log("feedbackDelay: " + feedbackDelay.get());
}