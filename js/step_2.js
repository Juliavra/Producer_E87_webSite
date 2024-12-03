const volume_1 = document.getElementById("volume_1");
const pan_1 = document.getElementById("pan_1");
const muteButton = document.getElementById("muteButton");
const soloButton = document.getElementById("soloButton");
const playback_rate_1 = document.getElementById("playback_rate_1");
const loop_checkbox = document.getElementById("loop_checkbox");
const player1_vol = new Tone.Volume(-40).toDestination();
const player1_pan = new Tone.Panner(0).connect(player1_vol);
const player1 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3").connect(player1_pan);
//https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3
//https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3
player1.playbackRate.value = -20;

volume_1.addEventListener("change", function (e) {
    player1_vol.volume.value = e.currentTarget.value;   //console.log("e.currentTarget.value: "+e.currentTarget.value);
    volume_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  });

  pan_1.addEventListener("change", function (e) {
    player1_pan.pan.value = e.currentTarget.value;     //console.log("channel_1.pan.value: " + player1_pan.pan.value)
    pan_1_value.innerHTML = Math.round(`${e.currentTarget.value }`);
    
  });

  playback_rate_1.addEventListener("change", function (e) {
    player1.playbackRate = `${e.currentTarget.value }`;     console.log("player1.playbackRate.value: " + player1.playbackRate.value)
    playback_rate_1_value.innerHTML = Math.round(`${e.currentTarget.value }` * 100);
    
  });

  loop_checkbox.addEventListener("change", function () {
    if (loop_checkbox.checked) { player1.loop = true; }
    else { player1.loop = false; }
  });





  volume_1_text.innerHTML = "VOLUME";
  volume_1_value.innerHTML = "0";
  pan_1_text.innerHTML = "PAN";
  pan_1_value.innerHTML = "0";
  playback_rate_1_text.innerHTML = "PLAYBACK RATE"
  playback_rate_1_value.innerHTML = "0";
  
  

function mute1(){
  player1_vol.mute = !player1_vol.mute ;
  //alert("player1_vol.mute: "+ player1_vol.mute);
}
 
function solo1(){
  player1_vol.solo = !player1_vol.solo ;
  player1.load ("https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3"); 
  alert("player1_vol.solo: "+ player1_vol.solo);
}

function play1(){
  if (!player1.loaded) {
      player1.autostart = true;
      console.log("IF");
    }
    else {
      player1.start();
      console.log("ELSE");   console.log("player1.state: " + player1.state);
    }
  
    console.log("END");
}
  






  //************************************************************
  //const player1 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  
//var audio = document.getElementById("myAudio");

/*
//PLAYER SETUP
volume_1 = document.getElementById("volume_1");
var duration_1_value = document.getElementById("duration_1_value");
loop_btn_1 = document.getElementById("loop_btn_1");
loop_checkbox = document.getElementById("loop_checkbox");
autoplay_checkbox = document.getElementById("autoplay_checkbox");
playRate_1 = document.getElementById("playRate_1");
current_1 = document.getElementById("current_1");


//BOTONES DEL PLAYER
function controls_1_play() {
  //lista = lista + "p_1: " + getsId(audio.src) + `<br>`;
  //muestraLista();
  //muestra_array_Canciones();
  //audio.play();
  //duration_1_value.innerHTML = Math.round(`${audio.duration}`);
}

volume_1.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value;
  volume_1.value = (e.currentTarget.value);
  fixed_volume_1_value.innerHTML = volume_1_value.innerHTML = Math.round(`${e.currentTarget.value * 100}`);
  
});
playRate_1.addEventListener("change", function (e) {
  audio.playbackRate = e.currentTarget.value;
  play_Rate_1_value.innerHTML = (e.currentTarget.value * 100);
  play_Rate_1.value = (e.currentTarget.value);
});
loop_checkbox.addEventListener("change", function () {
  if (loop_checkbox.checked) { audio.loop = true; }
  else { audio.loop = false; }
});
autoplay_checkbox.addEventListener("change", function () {
  if (autoplay_checkbox.checked) { autoplay_1 = true; }
  else { autoplay_1 = false; }
});
audio.addEventListener("timeupdate", function () {
  var step = audio.duration / 100;
  var test = (audio.duration - (audio.duration - audio.currentTime)) / 100;
  var position = test / step;
  current_1.value = position;
  actual_Position_text_1.innerHTML = Math.round(`${audio.currentTime}`);
});
/**/
/*
ruta_archivo.addEventListener("change", function(e) {
 // console.log("se cargo cancion abajo");
 var target = e.currentTarget;
 var file = target.files[0];
 var reader = new FileReader();

//var $audio = $('#myAudio');
//$('input').on('change', function(e) {
  
var audio = document.getElementById("myAudio");
var atributo = element.getAttribute(audio);
console.log("atributo: " + atributo);
  //console.log($audio[0]);
   if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //$audio.attr('src', e.target.result);
            audio.attr('src', e.target.result);
            //$audio.play();
        }
        reader.readAsDataURL(file);
    }
});

play_Rate_1_text.innerHTML = "PLAYRATE";
volume_1_text.innerHTML = "VOLUME";
duration_1_text.innerHTML = "DURATION";
autoplay_1_text.innerHTML = "AUTOPLAY";
/**/ 
  //*************************************************************