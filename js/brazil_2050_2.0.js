//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);
const array = ["01", "02", "03", "04", "05", "06", "07","08", "09","10"];
for (let i=0;i<array.length;i++){
  console.log(array[i]);
}
const array_Objetos=[];
var miobjeto = {
id: "01",
url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3"
};
let context = new AudioContext();
let source_8 = context.createBufferSource();
const gainNode_8 = context.createGain();
/*source_8.connect(context.destination);*/
source_8.connect(gainNode_8);
gainNode_8.connect(context.destination);
volume_8.oninput = () => { gainNode_8.value = volume_8.value }
playRate_8.oninput = () => { source_8.playbackRate.value = playRate_8.value }



var lista = "";
var audio8 = document.getElementById("myAudio8");
var ruta_archivo8 = document.getElementById("ruta_archivo8");
ruta_archivo8.addEventListener("change", sourceUpdate8);
volume_8 = document.getElementById("volume_8");
loop_btn_8 = document.getElementById("loop_btn_8");
playRate_8 = document.getElementById("playRate_8");
volume_8.addEventListener("change", control_8_volume);
loop_btn_8.addEventListener("change", control_8_loop);
playRate_8.addEventListener("change", () => { source_8.playbackRate.value = playRate_8.value; })

current_8 = document.getElementById("current_8");
current_8.addEventListener("change",testCurrent);

function testCurrent(){
  alert("current_8.addEventListener");

}

/*
starts_noise = document.getElementById("starts_noise");
starts_noise.addEventListener("onclick", ()=>{
  let noise=context.createBufferSource();
  noise.buffer=context.createBuffer(2,102400, context.sampleRate);
  for (i=0;i<102400;i++)noise.buffer.getChannelData(0)[i]=2*Math.random()-1;
  for (i=0;i<102400;i++)noise.buffer.getChannelData(1)[i]=2*Math.random()-1;
  noise.start();
  noise.connect(context.destination);
});
*/
//-------------------------------------------------------
/*
const h1 = document.createElement("playList") //Creamos el <h1>
const textNode = document.createTextNode("test nodo") //Creamos el texto
h1.appendChild(textNode) //Colocamos el texto como hijo del <h1>
document.body.appendChild(h1)
*/
//currentTarget() //RETORNA EL ELEMENTO DEL CUAL LOS LISTENERS DISPARARON EL EVENTO
//target() // RETORNA EL ELEMENTO QUE DISPARO EL EVENTO 

function muestraLista() { alert(`LISTA: ` + `${lista}`); }
function control_8_playRate() {
source_8.playbackRate.value = playRate.value }
function controls_8_play() { audio8.play(); }
function controls_8_stop() { audio8.load(); }
function controls_8_pause() { audio8.pause(); }
function control_8_current(){audio8.currentTime();}
function control_8_volume() {
  alert("vol8:   " + `${volume_8.value}`);
  audio8.volume_8 = volume_8.value;
  /*volume_8.oninput = () => { gainNode_8.value = volume_8.value }*/
}
function controls_8_loop(){  this.loop=true;}
function sourceUpdate8() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo8.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio8").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio8").load();
  lista = lista + '\n' + "player_8: " + `${stringTestARRAY[0].toString()}`;
  /*alert(`Song: `+`${stringTestARRAY[0].toString()}`);*/
  muestraLista();
}

/*
let i, context = new AudioContext();
let source = context.createBufferSource();
source.connect(context.destination);
source.start();
request = new XMLHttpRequest();
request.open('GET', '20 Dubby Augustus Pablo NR Song.mp3', true);
request.responseType = 'arraybuffer';
request.onload = () => {
  context.decodeAudioData(request.response, (buffer) => { source.buffer = buffer })
}
request.send();
playRate.oninput = () => { source.playbackRate.value = playRate.value }
*/

/*EN HTML  */
/*

<script>
let i, context = new AudioContext();
let source=context.createBufferSource();
source.buffer=context.createBuffer(2,102400, context.sampleRate);
for (i=0;i<102400;i++)source.buffer.getChannelData(0)[i]=2*Math.random()-1;
for (i=0;i<102400;i++)source.buffer.getChannelData(1)[i]=2*Math.random()-1;
source.start();
source.connect(context.destination);
</script>
*/