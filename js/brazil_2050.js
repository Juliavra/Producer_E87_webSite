//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);

//let context = new AudioContext();
var lista = [];
var lista_obj_cancion = [];
var playlist = document.getElementById("playlist");
var bloque1 = document.getElementById("playlistfrescos");
var audio = document.getElementById("myAudio");
var audio2 = document.getElementById("myAudio2");
var audio3 = document.getElementById("myAudio3");
var audio4 = document.getElementById("myAudio4");
var deposito1 = document.getElementById("deposito_1");

deposito1.addEventListener("dragenter", function (evento) { 
  evento.preventDefault();
  
});
deposito1.addEventListener("dragover", function (evento) {           
  evento.preventDefault();
});
deposito1.addEventListener("drop", soltar);


function soltar(evento) {
  evento.preventDefault();  //console.log(evento);
  console.log('typeof:'+typeof(evento));

  var transfer=evento.dataTransfer.getData("deposito_1"); console.log(`transfer: `+`${transfer}`);

var elemento_deposito_1 = getElementById("deposito_1");   console.log(`depo: `+`${elemento_deposito_1}`);

//  console.log('SOY SOLTAR'+this.id);
  //console.log('SOY SOLTAR TARGET '+`${this.evento}`);
  //dragged=evento.target;  //  alert(": "+ `${evento.target.url_src}`);
 //var data_transfer = DataTransfer.getData(evento.target);       alert(`data_transfer: `+ `${data_transfer}`);
}

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
console.log(`array_Canciones: `);
for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
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
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //    alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      alert("SON IGUALES");
      const index_track = array_Canciones.indexOf(element);                 // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_1: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista()
  muestra_array_Canciones()

}

function sourceUpdate2() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo2.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio2").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio2").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //    alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      alert("SON IGUALES");
      const index_track = array_Canciones.indexOf(element);                 // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_2: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista()
  muestra_array_Canciones()
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
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //    alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      alert("SON IGUALES");
      const index_track = array_Canciones.indexOf(element);                 // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_3: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista()
  muestra_array_Canciones()

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
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //    alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      alert("SON IGUALES");
      const index_track = array_Canciones.indexOf(element);                 // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_4: " + `${cancion_nombre_final}` + `<br>`;
  muestraLista()
  muestra_array_Canciones()

}
//---------------------------------------------------------
function muestraLista() {
  console.log(`LISTA: ` + `${lista}`);
  playlist.innerHTML = (`${lista}`);
  /*
    var used_track_list = [];
    var nombre_Cancion;
    for (let i = 0; i < lista.length; i++) {
      nombre_Cancion = lista[i].id;                                                 alert(nombre_Cancion);
      ruta_index = nombre_Cancion.lastIndexOf("0", nombre_Cancion.length - 1);            alert(`${ruta_index}`);
      track_name = nombre_Cancion.substr(ruta_index, ruta_index.length).trim();
      used_track_list[i] = `${track_name}` + `<br>`;
      
    }
    playlist.innerHTML = (`${used_track_list}`);
    */
}

function muestra_array_Canciones() {
  array_song_div = [];
  for (i = 0; i < array_Canciones.length; i++) {
    var nombre = array_Canciones[i].id;             //alert(`nombre: `+`${nombre}`);  alert(`${array_Canciones[0].id}+ ${array_Canciones[1].id}+ ${array_Canciones[2].id}`);
    const box = `
    <div id=${nombre} draggable="true">
        ${nombre}
    </div>`;
    if (nombre != ',') {                                            //alert("ES IGUAL ");
      array_song_div.push(box);
    }
  }
  bloque1.innerHTML = array_song_div;
}


//-----------------------------------------------
//ORIGINAL
/*
function muestra_array_Canciones() {
  var available_track_list = [];
  var nombre_Cancion;
  for (let i = 0; i < array_Canciones.length; i++) {
    nombre_Cancion = array_Canciones[i].id;
    available_track_list[i] = `${nombre_Cancion}` + `<br>`;
  }
  bloque1.innerHTML = (`${available_track_list}`);
}
*/