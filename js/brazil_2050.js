//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);

var lista="";  
var audio = document.getElementById("myAudio");       
var audio2 = document.getElementById("myAudio2");       
var audio3 = document.getElementById("myAudio3");       
var audio4 = document.getElementById("myAudio4");       
var audio5 = document.getElementById("myAudio5");   
var audio5 = document.getElementById("myAudio6");   

var ruta_archivo =  document.getElementById("ruta_archivo");     
var ruta_archivo2 =  document.getElementById("ruta_archivo2");
var ruta_archivo3 =  document.getElementById("ruta_archivo3");
var ruta_archivo4 =  document.getElementById("ruta_archivo4");
var ruta_archivo5 =  document.getElementById("ruta_archivo5");  
var ruta_archivo6 =  document.getElementById("ruta_archivo6");     


ruta_archivo.addEventListener("change",sourceUpdate);
ruta_archivo2.addEventListener("change",sourceUpdate2);
ruta_archivo3.addEventListener("change",sourceUpdate3);
ruta_archivo4.addEventListener("change",sourceUpdate4);
ruta_archivo5.addEventListener("change",sourceUpdate5);
ruta_archivo6.addEventListener("change",sourceUpdate6);

//-------------------------------------------------------
var sound5 = document.createElement("audio");
sound5.id="myAudio5";
//sound5.controls = "controls";
sound5.src ="";
sound5.type = "audio/mpeg";
document.getElementById("myAudio5").appendChild(sound5);
//-------------------------------------------------------
var sound6 = document.createElement("audio");
sound6.id="myAudio6";
//sound6.controls = "controls";
sound6.src ="";
sound6.type = "audio/mpeg";
document.getElementById("myAudio6").appendChild(sound6);
//-------------------------------------------------------
   
function sourceUpdate5(){
//('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
const stringTestARRAY = [];
const ruta = ruta_archivo5.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
/*track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();*/
/*stringTestARRAY [0] = track_name.toString(); */
stringTestARRAY [0] = ruta.toString(); 
alert("stringTestARRAY: "+`${stringTestARRAY [0]}`);
document.getElementById("myAudio5").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio5").load();
lista = lista +'\n'+"player_5: " + `${stringTestARRAY[0].toString()}`;
/*alert(`Song: `+`${stringTestARRAY[0].toString()}`);*/
muestraLista();
}

function sourceUpdate6(){
  //('\')<FUCK   yeah!> ('/') 
  //*HTMLAudioElement*/
  const stringTestARRAY = [];
  const ruta = ruta_archivo6.value.trim();                                   
  ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
  track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
  stringTestARRAY [0] = track_name.toString(); 
 /* alert("stringTestARRAY: "+`${stringTestARRAY [0]}`);*/
  document.getElementById("myAudio6").src=`${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio6").load();
  lista = lista +'\n'+"player_6: " + `${stringTestARRAY[0].toString()}`;
  /*alert(`Song: `+`${stringTestARRAY[0].toString()}`);*/
  muestraLista();
  }
//-------------------------------------------------------
/*
const h1 = document.createElement("playList") //Creamos el <h1>
const textNode = document.createTextNode("test nodo") //Creamos el texto
h1.appendChild(textNode) //Colocamos el texto como hijo del <h1>
document.body.appendChild(h1)
*/
//currentTarget() //RETORNA EL ELEMENTO DEL CUAL LOS LISTENERS DISPARARON EL EVENTO
//target() // RETORNA EL ELEMENTO QUE DISPARO EL EVENTO 

function muestraLista(){
  alert(`LISTA: `+`${lista}`);       
}

function sourceUpdate(){
  //('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/

const stringTestARRAY = [];
const ruta = ruta_archivo.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString();
document.getElementById("myAudio").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio").load();
lista = lista +'\n'+"player_1: " + `${stringTestARRAY[0].toString()}`;
/*alert(`Song: `+`${stringTestARRAY[0].toString()}`);*/
muestraLista();
}

function sourceUpdate2(){
const stringTestARRAY = [];
const ruta = ruta_archivo2.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString();
document.getElementById("myAudio2").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio2").load();
lista = lista +'\n'+"player_2: " + `${stringTestARRAY[0].toString()}`;
muestraLista()
}

function sourceUpdate3(){
const stringTestARRAY = [];
const ruta = ruta_archivo3.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString();
document.getElementById("myAudio3").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio3").load();
lista = lista +'\n'+"player_3: " + `${stringTestARRAY[0].toString()}`;
muestraLista()
}

function sourceUpdate4(){
const stringTestARRAY = [];
const ruta = ruta_archivo4.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString();
document.getElementById("myAudio4").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio4").load();
lista = lista +'\n'+"player_4: " + `${stringTestARRAY[0].toString()}`;
muestraLista()
}