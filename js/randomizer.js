let array_audio = [];
var audio_buffer = new Tone.ToneAudioBuffer("https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3",loaded() );
audio_buffer.debug = true;
//    console.log("loaded: " + Tone.immediate());
const player1_vol = new Tone.Volume(-100).toDestination();
const player1 = new Tone.Player();
var filter_1 = new Tone.Filter().connect(player1_vol);
var filter_2 = new Tone.Filter().connect(player1_vol);
var filter_3 = new Tone.Filter().connect(player1_vol);
console.log("player1_vol in; " + player1_vol.numberOfInputs);


const playButton = document.getElementById("playButton");
playButton.innerText = "papa";



/*
filter_1.set({
	frequency: 1000,
	type: "highpass",
  Q: 0,
  gain: 3,
  rolloff: -96,
});

filter_2.set({
	frequency: 5000,
	type: "notch",
  Q: 3,
  detune: 100,
  gain: 30,
  rolloff: -96
});
*/
filter_3.set({
	frequency: 4000,
	type: "bandpass",
  Q: 16,
  gain: 12,
  rolloff: -12,
});

filter_3.frequency.rampTo(2000, 30);


player1.fan(filter_1, filter_2, filter_3);
player1.volume.value = 0;
player1.buffer.set(audio_buffer);
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
  console.log(filter_1.get());
  console.log("len: " + len);
  /*
  console.log("filter_1 Nro Inputs: " + filter_1.numberOfInputs);
  console.log("filter_1 Nro Outputs: " + filter_1.numberOfOutputs);
  console.log("player1 Nro Inputs: " + player1.numberOfInputs);
  console.log("player1 Nro Outputs: " + player1.numberOfOutputs);
  console.log("player1_vol Nro Inputs: " + player1_vol.numberOfInputs);
  console.log("player1_vol Nro Outputs: " + player1_vol.numberOfOutputs);
  */
  Tone.Transport.start();
}

function loaded(){
  console.log("song loaded");
}