document.addEventListener("DOMContentLoaded", load, false);

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
   
//-------------------------------------------------------
var sound6 = document.createElement("audio");
sound6.id="myAudio6";
//sound6.controls = "controls";
sound6.src ="";
sound6.type = "audio/mpeg";
document.getElementById("myAudio6").appendChild(sound6);

//-------------------------------------------------------
   
/*
const p = document.getElementById("p1")
p.innerHTML = "Codo a Codo" // <p id="p1">Codo a Codo</p>
p.className = "dato" // <p id="p1" class="data">Codo a Codo</p>
p.style.color = "red"
*/

const div1 = document.querySelector("div") // <div></div>
div1.textContent = "Hola a todos" // <div>Hola a todos</div>




function sourceUpdate5(){
//('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
const stringTestARRAY = [];
const ruta = ruta_archivo5.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString(); 
alert("stringTestARRAY: "+`${stringTestARRAY [0]}`);
document.getElementById("myAudio5").src=`${stringTestARRAY[0].toString()}`;
document.getElementById("myAudio5").load();
lista = lista +'\n'+"player_1: " + `${stringTestARRAY[0].toString()}`;
alert(`Song: `+`${stringTestARRAY[0].toString()}`);
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
  alert("stringTestARRAY: "+`${stringTestARRAY [0]}`);
  document.getElementById("myAudio6").src=`${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio6").load();
  lista = lista +'\n'+"player_1: " + `${stringTestARRAY[0].toString()}`;
  alert(`Song: `+`${stringTestARRAY[0].toString()}`);
  muestraLista();
  }


//-------------------------------------------------------
/*
var sound1 = document.createElement("audio");
sound1.id="myAudio1";
sound1.controls = "controls";
sound1.src ="";
sound1.type = "audio/mpeg";
document.getElementById("audio_controls").appendChild(sound1);
*/

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
alert(`Song: `+`${stringTestARRAY[0].toString()}`);
muestraLista();
}

function sourceUpdate2(){
  //('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
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
  //('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
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
  //('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
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
// REQUIERE jQUERY, QUIZAS POR ESO NO ANDA?*/
/*
var $audio = $('#myAudio'); 
alert(`Hola `+`${$audio}`);

 //var $audio = document.getElementById("myAudio");
$('input').on('change', function (e)
{
  var target = e.currentTarget;
  var file = target.files[0];
  var reader = new FileReader();

  //console.log($audio[0]);
  if (target.files && file) 
  {
    var reader = new FileReader();
    reader.onload = function (e) 
    {
      $audio.attr("src", e.target.result);
      alert(`src: `+ `${e.target.result}`);
      console.log($audio[0]);
      $audio.play();
      $audio.console.error();
    }
    reader.readAsDataURL(file);
  }
});
*/