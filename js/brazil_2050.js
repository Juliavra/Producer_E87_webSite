//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);

//let context = new AudioContext();
var lista = [];
var lista_obj_cancion = [];
var autoplay_1=false;
var playlist = document.getElementById("playlist");
var bloque1 = document.getElementById("playlistfrescos");
var audio = document.getElementById("myAudio");
var audio2 = document.getElementById("myAudio2");
var audio3 = document.getElementById("myAudio3");
var audio4 = document.getElementById("myAudio4");
var deposito_1 = document.getElementById("deposito_1");
deposito_1.innerHTML = "Drop Audio Here";

volume_1 = document.getElementById("volume_1");
loop_btn_1 = document.getElementById("loop_btn_1"); 
loop_checkbox = document.getElementById("loop_checkbox"); 
autoplay_checkbox= document.getElementById("autoplay_checkbox"); 
playRate_1 = document.getElementById("playRate_1");
volume_1.addEventListener("change",function(e){
  audio.volume=e.currentTarget.value;
});
playRate_1.addEventListener("change", function(e){
  audio.playbackRate=e.currentTarget.value;
});
loop_btn_1.addEventListener("change", function(){
  audio.loop=true;
});
loop_checkbox.addEventListener("change", function(){
  if(loop_checkbox.checked){audio.loop=true;}
  else{audio.loop=false;}
});
autoplay_checkbox.addEventListener("change", function(){
  if(autoplay_checkbox.checked){autoplay_1=true;}
  else{autoplay_1=false;}
  /*
  if(autoplay_1==true)        
  {alert("True");}
  else
  {alert("False ");}
*/
//alert("autoplay_1: " +autoplay_1);
});


play_Rate_1_text.innerHTML="PLAYRATE";
volume_1_text.innerHTML="VOLUME";


var ruta_archivo = document.getElementById("ruta_archivo");
var ruta_archivo2 = document.getElementById("ruta_archivo2");
var ruta_archivo3 = document.getElementById("ruta_archivo3");
var ruta_archivo4 = document.getElementById("ruta_archivo4");

ruta_archivo.addEventListener("change", sourceUpdate);
ruta_archivo2.addEventListener("change", sourceUpdate2);
ruta_archivo3.addEventListener("change", sourceUpdate3);
ruta_archivo4.addEventListener("change", sourceUpdate4);
//----------------------------------------------------------------------
// CANCION CLASS
class Cancion {
  constructor(id, url_src) {
    this.id = id;
    this.url_src = url_src;
  }
}

var cancion_1 = {
  id: "01 Dark Ringy Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3"
};
var cancion_2 = {
  id: "02 Hard Acople Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/02 Hard Acople Amb Song.mp3"
};
var cancion_3 = {
  id: "03 Phased Sleppy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3"
};
var cancion_4 = {
  id: "04 Ruido Digital Zarpado Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/04 Ruido Digital Zarpado Loop.mp3"
};
var cancion_5 = {
  id: "05 Deep Dark Amb Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/05 Deep Dark Amb Slow Loop.mp3"
};
var cancion_6 = {
  id: "06 Ringy Dark Slow Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/06 Ringy Dark Slow Amb Loop.mp3"
};
var cancion_7 = {
  id: "07 Calm Mellow Slow Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/07 Calm Mellow Slow Amb Song.mp3"
};
var cancion_8 = {
  id: "08 Digi Noise Reverb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/08 Digi Noise Reverb Loop.mp3"
};




var array_Canciones = [];
array_Canciones.push(cancion_1);
array_Canciones.push(cancion_2);
array_Canciones.push(cancion_3);
array_Canciones.push(cancion_4);
array_Canciones.push(cancion_5);
array_Canciones.push(cancion_6);
array_Canciones.push(cancion_7);
array_Canciones.push(cancion_8);
//console.log(`array_Canciones: `);
//for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
//-------------------------------------------------------
window.addEventListener("load", muestra_array_Canciones);

//------------------------------------------------------------------------
/*--------------------------------------------------*/
/*SOURCE UPDATE 1-4*/
function sourceUpdate() {
  //('\')<FUCK   yeah!> ('/') 
  //*HTMLAudioElement*/
  const stringTestARRAY = [];
  const ruta = ruta_archivo.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();        //alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);    //alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_1: " + `${cancion_nombre_final}` + `<br>`;

  muestraLista();
  muestra_array_Canciones();

}
function sourceUpdate2() {
 /* const stringTestARRAY = [];
  const ruta = ruta_archivo2.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio2").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio2").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);   // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_2: " + `${cancion_nombre_final}` + `<br>`;*/
  muestraLista();
  muestra_array_Canciones();
}
function sourceUpdate3() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo3.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio3").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio3").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                    //alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);          //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);  // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_3: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista();
  muestra_array_Canciones();

}
function sourceUpdate4() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo4.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio4").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio4").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);    //alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_4: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista();
  muestra_array_Canciones();

}
//---------------------------------------------------------
function muestraLista() {
  console.log(`LISTA: ` + `${lista}`);
  playlist.innerHTML = (`${lista}`);
}
function muestra_array_Canciones() {
  array_song_div = []; array_audio_toAppend = [];
  for (i = 0; i < array_Canciones.length; i++) {
    var nombre = array_Canciones[i].id;                             //console.log(`nombre: `+`${nombre}`)    
    //DE ESTE MODO BUSCA LOS ARCHIVOS EN GITHUB 
    //var source = array_Canciones[i].url_src;                        // console.log(`source: `+`${source}`)  
    var source = `"audio/${nombre}.mp3"`;
    const box = `<div class="draggable" id=${nombre} draggable="true" ondragstart="cancion_dragstart(event)">    ${nombre}    </div>`;
    const audio = `<audio class="audio" id=${nombre}> <source src="${source}" type="audio/mpeg"></audio>`;

    //console.log(`nombre: `+`${nombre}`);
    if (audio != null && box != null && nombre != null && nombre != ',') {

      array_song_div.push(box);                                     //console.log("box: "+`${box}`);
      array_audio_toAppend.push(audio);
    }
  }
  bloque1.innerHTML = array_song_div;
}

//-------------------------------------------------------------------------
deposito_1.addEventListener("dragenter", function (event) {
  event.preventDefault();
  deposito_1.style.background = "rgba(250, 0, 0, .5)";
});
deposito_1.addEventListener("dragover", function (event) {
  event.preventDefault();
});
deposito_1.addEventListener("drop", soltar);

function soltar(event) {
  event.preventDefault();
  deposito_1.style.background = "#006600";
  deposito_1.innerHTML = "Drop Audio Here";
  const link = event.dataTransfer.getData("text"); 
  //console.log("link: " + link);
  switch (this.id) {
    case ("deposito_1"):
      {
        //console.log("se dropeo en: deposito_1 ");
        var player_1 = document.getElementById("myAudio");
        document.getElementById("player_1_label").innerHTML = getsId(link);
        player_1.pause();
        //player_1.src="C:/Users/Juli/My%20Projects/Producer_E87_webSite/audio/03%20Phased%20Sleppy%20Noise%20Loop.mp3";   console.log("src: "+ player_1.src);
        player_1.src = `${link}`;
        player_1.load();
        if(autoplay_1==true)        
        {player_1.play();}
        break;
      }
    default: { break; }
  }

}

function cancion_dragstart(event) {
  //var codigo = ``;       
  //var test = this.id; console.log("test: " + `${test}`)
  var target_song = event.target.id; 
  //console.log("target_song: " + `${target_song}`)

  array_Canciones.forEach(element => {
    if (element.id.includes(target_song)) {
      var codigo_local = `C:/Users/Juli/My%20Projects/Producer_E87_webSite/audio/` + `${element.id}` + `.mp3`;
      event.dataTransfer.setData("text", codigo_local);
      //console.log(" codigo_local: " + codigo_local);
      /*
      var codigo = element.url_src;
      event.dataTransfer.setData("text", codigo);
      console.log("codigo: "+codigo);
      *///WEB BASED ADDRESSESS
    }

  });

}
//-----------------------------------------------------
/*
function agregarelemento() {
  for (i = 0; i < array_Canciones.length; i++) {

    var elemento = document.createElement("audio");
    var elementonuevo = document.createElement("p");
    elementonuevo.innerHTML = `${array_Canciones[i].id}`
    //elementonuevo.innerHTML = "Este es el nombre del tema";
    elemento.appendChild(elementonuevo);
    bloque1.appendChild(elemento);
  }
}
*/

//---------------------------------------------------
function agregareventos() {
  //var lista = document.querySelectorAll(".draggable");
  var lista = document.querySelectorAll(".draggable");
  for (var f = 0; f < lista.length; f++) {
    var elemento = lista[f];
    console.log(`lista:  ` + `${lista[f].id}`);
    console.log(`elemento:  ` + `${elemento.id}`); alert("Soy la alerta interior");
    //elemento.addEventListener("click", cambiarcolor);
  }

}

//------------------------------------------------------------------------------------------
//for (let key in array_Canciones){
//console.log(key);
//console.log(array_Canciones[key]);
//console.log(Object.entries(array_Canciones[key]));
//}
//console.log(Object.keys(cancion_1));
//console.log(Object.values(cancion_1));
//const draggable_items = document.querySelector('.draggable');

agregareventos();
//agregarelemento();

function getsId(string) {
  // alert("string: " + string);
  var string_index = string.lastIndexOf("/", string.length - 1);
  //alert("string_index: " + string_index);
  var track_name = string.substr(string_index + 1, string_index.length).trim();
  var track_index = track_name.lastIndexOf(".", track_name.length);
  var track_id = track_name.substr(0, track_index).trim();
  //alert(track_id);
  return `${track_id}`;
}

//-----------------------------------------------------------
//BOTONES DEL PLAYER
//function controls_1_playRate() { source_1.playbackRate.value = playRate.value }
function controls_1_play() { audio.play(); }
function controls_1_stop() { audio.load(); }
function controls_1_pause() { audio.pause(); }
/*
function controls_1_volume() {
let volume_1 = document.getElementById("volume_1"); 
console.log ("quien soy: "+ `${volume_1}` );
}*/

function controls_1_loop() {
  var estado = document.getElementById("myAudio").loop;
  if (estado==true)
  {document.getElementById("myAudio").loop=false;}
  else
  {document.getElementById("myAudio").loop=true;}
 
}
//---------------------------------------------------