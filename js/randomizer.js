let array_audio = [];
var audio_buffer = new Tone.ToneAudioBuffer("https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3");
audio_buffer.debug = true;
//    console.log("loaded: " + Tone.immediate());
const player1_vol = new Tone.Volume(-21).toDestination();
const player1 = new Tone.Player().connect(player1_vol);

player1.buffer.set(audio_buffer);
player1_vol.volume.value = -33;

if (!player1.loaded) {
  player1.autostart = true;
}
else { console.log("ELSE");
  //var duration = player1.buffer.duration;
  //console.log("Durattion: " + duration);
  //player1.start();
}

  Tone.Transport.start();

/*
setInterval(() => {
  console.log(Tone.immediate());
}, 1000);
/**/

function startsSong() {
  console.log(audio_buffer.get());
    var len = player1.buffer.length;
    console.log("len: " + len);
}
