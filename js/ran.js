let array_audio = [];
var audio_buffer = new Tone.ToneAudioBuffer("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3",loaded() );
audio_buffer.debug = true;
//    console.log("loaded: " + Tone.immediate());
const player1_vol = new Tone.Volume(-100).toDestination();
const player1 = new Tone.Player();
var filter_3 = new Tone.Filter().connect(player1_vol);
//console.log("player1_vol in; " + player1_vol.numberOfInputs);

const playButton = document.getElementById("playButton");
playButton.innerText = "papa";

filter_3.set({
	frequency: 4000,
	type: "bandpass",
  Q: 16,
  gain: 12,
  rolloff: -12,
});

filter_3.frequency.rampTo(2000, 30);

player1.fan(filter_3);
player1.volume.value = 0;
player1.buffer.set(audio_buffer);
console.log("buff:" + audio_buffer.get());
player1_vol.volume.value = -21;

if (!player1.loaded) {
  player1.autostart = true;
}
else { console.log("ELSE");
  //var duration = player1.buffer.duration;
  //console.log("Durattion: " + duration);
  //player1.start();
}

  setInterval(() => {
    console.log(Tone.immediate());
  }, 3000);

//Tone.Destination

function startsSong() {
  var len = player1.buffer.length;
  console.log(audio_buffer.get());
  console.log("len: " + len);

  Tone.Transport.start();
}

function loaded(){
  console.log("song loaded");
}

function creaelementoenfoo(){
  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.53).toDestination();
  console.log("feedbackDelay: " + feedbackDelay.get());
}