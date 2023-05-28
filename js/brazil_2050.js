//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);

//let context = new AudioContext();
//var lista = " ";
var lista = [];
var playlist = document.getElementById("playlist");
var audio = document.getElementById("myAudio");
var audio2 = document.getElementById("myAudio2");
var audio3 = document.getElementById("myAudio3");
var audio4 = document.getElementById("myAudio4");

var ruta_archivo = document.getElementById("ruta_archivo");
var ruta_archivo2 = document.getElementById("ruta_archivo2");
var ruta_archivo3 = document.getElementById("ruta_archivo3");
var ruta_archivo4 = document.getElementById("ruta_archivo4");

ruta_archivo.addEventListener("change", sourceUpdate);
ruta_archivo2.addEventListener("change", sourceUpdate2);
ruta_archivo3.addEventListener("change", sourceUpdate3);
ruta_archivo4.addEventListener("change", sourceUpdate4);

//---------------------------------------------------------

class Cancion {
  constructor(id, url_src) {
    this.id = id;
    this.url_src = url_src;
  }
}

var miobjeto = {
  id: "01",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3"
};

var miobjeto2 = {
  id: "02",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/02 Hard Acople Amb Song.mp3"
};

var miobjeto3 = {
  id: "03",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3"
};

var miobjeto4 = {
  id: "04",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/04 Ruido Digital Zarpado Loop.mp3"
};


//-------------------------------------------------------

function muestraLista() {
  console.log(`LISTA: ` + `${lista}`);
  playlist.innerHTML = `${lista}`;
}
/*
function playlist_bloque1() {
//  var list_available_tracks = "";
  const array_Objetos = [];
  array_Objetos.push(miobjeto, miobjeto2, miobjeto3, miobjeto4);

  for (let j = 0; j < array_Objetos.length; j++) {
    list_available_tracks = list_available_tracks + `${array_Objetos[j].id}` + '\n';
    //console.log("array_Objetos[j].id"+ `${array_Objetos[j].id}`);
    //    bloque1.innerHTML = `${array_Objetos[j].url_src}`; 
    bloque1.innerHTML = `${list_available_tracks}`;
    //console.log(`${list_available_tracks}`);
  }
  console.log(`${list_available_tracks}`);


  class Cancion {
    constructor(id, url_src) {
      this.id = id;
      this.url_src = url_src;
    }
  }

  var cancion_1 = new Cancion ("02", "https://juliavra.github.io/Producer_E87_webSite/audio/02 Hard Acople Amb Song.mp3" );
  const array_Canciones = [];
  array_Canciones.push(cancion_1);
console.log(`array_Canciones: `+ `${array_Canciones}`);
*/


  /*
// Clase Perro, con su constructor:
class Perro {
constructor( nombre, edad, vivo){
this.nombre = nombre
this.edad = edad
this.vivo = vivo
}
}

// Instanciamos dos objetos clase Perro:
var perro1 = new Perro ("Lola", 4, true)
var perro2 = new Perro ("Lassie", 10, false)
// Modificamos alguna de sus PROPIEDADES:
perro1.nombre = "Toby"
perro2.edad = 6
}
*/


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
  // lista = lista + '\n' + "p_1: " + `${stringTestARRAY[0].toString()}`;
  lista = lista + "p_1: " + `${stringTestARRAY[0].toString()}`;
  muestraLista();
}

function sourceUpdate2() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo2.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio2").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio2").load();
  lista = lista + '\n' + "p_2: " + `${stringTestARRAY[0].toString()}`;
  muestraLista()
}

function sourceUpdate3() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo3.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio3").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio3").load();
  lista = lista + '\n' + "p_3: " + `${stringTestARRAY[0].toString()}`;
  muestraLista()
}

function sourceUpdate4() {
  const stringTestARRAY = [];
  const ruta = ruta_archivo4.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio4").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio4").load();
  lista = lista + '\n' + "p_4: " + `${stringTestARRAY[0].toString()}`;
  muestraLista()
}


playlist_bloque1();