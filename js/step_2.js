const volume_1 = document.getElementById("volume_1");
const pan_1 = document.getElementById("pan_1");
const muteButton = document.getElementById("muteButton");
const soloButton = document.getElementById("soloButton");
const playback_rate_1 = document.getElementById("playback_rate_1");
const loop_1_checkbox = document.getElementById("loop_1_checkbox");
const autoplay_1_checkbox = document.getElementById("autoplay_1_checkbox");
const reverse_1_checkbox = document.getElementById("reverse_1_checkbox");
const player1_vol = new Tone.Volume(-40).toDestination();
const player1_pan = new Tone.Panner(0).connect(player1_vol);
const player1 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3", player1_onLoad()).connect(player1_pan);
//const player1 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3", player1_onLoad()).connect(player1_pan);
//player1.loop = "true"; loop_1_checkbox.checked = true;
player1.setLoopPoints(0, 1.345);
//player1.fadeIn = 2;
//player1.fadeOut = 3;
player1.debug = true;

var testBuffer = player1;
console.log("testBuffer: " + `${testBuffer}`);

function player1_onLoad() {
  //cambio visible que indique su carga
}

player1.onstop(sarasa());

function sarasa() {
  console.log("SARASA");
}

volume_1.addEventListener("change", function (e) {
  player1_vol.volume.value = e.currentTarget.value;   //console.log("e.currentTarget.value: "+e.currentTarget.value);
  volume_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

pan_1.addEventListener("change", function (e) {
  player1_pan.pan.value = e.currentTarget.value;     //console.log("channel_1.pan.value: " + player1_pan.pan.value)
  pan_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);

});

playback_rate_1.addEventListener("change", function (e) {
  player1.playbackRate = `${e.currentTarget.value}`; console.log("player1.playbackRate.value: " + player1.playbackRate.value)
  playback_rate_1_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);

});

loop_1_checkbox.addEventListener("change", function () {
  if (loop_1_checkbox.checked) { player1.loop = true; }
  else { player1.loop = false; }
});

autoplay_1_checkbox.addEventListener("change", function () {
  if (autoplay_1_checkbox.checked) { player1 = true; }
  else { player1 = false; }
  console.log("player1.autoplay_1_checkbox: " + autoplay_1_checkbox.checked);
});

reverse_1_checkbox.addEventListener("change", function () {
  if (reverse_1_checkbox.checked) { player1.reverse = true; }
  else { player1.reverse = false; }
  console.log("reverse_1_checkbox: " + reverse_1_checkbox.checked);
});

player_1_label.innerHTML = `${player1.src}`;
volume_1_text.innerHTML = "VOLUME";
volume_1_value.innerHTML = "0";
pan_1_text.innerHTML = "PAN";
pan_1_value.innerHTML = "0";
playback_rate_1_text.innerHTML = "PLAYBACK RATE"
playback_rate_1_value.innerHTML = "0";
loop_checkbox_text.innerHTML = "LOOP";
autoplay_1_text.innerHTML = "AUTOPLAY";
reverse_1_text.innerHTML = "Reverse";
loop_start_1_text.innerHTML = "Loop Start: ";
loop_start_1_time.innerHTML = `${player1.loopStart}`;
loop_end_1_text.innerHTML = "Loop End: ";
loop_end_1_time.innerHTML = `${player1.loopEnd}`;
fadeIn_1_text.innerHTML = `fadeIn: `;
fadeIn_1_value.innerHTML = `${player1.fadeIn}`;
fadeOut_1_text.innerHTML = `fadeOut`;
fadeOut_1_value.innerHTML = `${player1.fadeOut}`;
function mute1() {
  player1_vol.mute = !player1_vol.mute;
  //alert("player1_vol.mute: "+ player1_vol.mute);
}

function solo1() {
  player1_vol.solo = !player1_vol.solo;
  player1.load("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3");
  alert("player1_vol.solo: " + player1_vol.solo);
}

function play1() {
  if (!player1.loaded) {
    player1.autostart = true;


    console.log("IF");
  }
  else {
    player1.start();
    console.log("player1.state: " + player1.state);
    var duration = player1.buffer.duration;
    console.log("duration: " + `${duration}`);
    //SET LOOP POINTS MENU GOES HERE

  }

  console.log(player1.get());

  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);
}

//player1.load(url);