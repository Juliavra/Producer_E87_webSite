//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);


var player_1 = document.getElementById("myAudio");


function acepta() {
  var carpeta = document.getElementById("carpeta");
  var cancion = document.getElementById("cancion");
  let ruta_trim = carpeta.value.trim();
  let cancion_trim = cancion.value.trim();
  let ruta_exito = `${ruta_trim}` + `/` + `${cancion_trim}` + `.mp3`;
  var rutaMp3 = ruta_exito.replace("\\", "/");
  //  console.log(" rutaMp3: " +  rutaMp3 );
  player_1.src = `${rutaMp3}`;
  player_1.load();
  player_1.play();
}

const fileInput = document.querySelector("archivo");
const output = document.querySelector(".output");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    output.innerHTML = await file.text();
   // var nombre = file.name;
   // output.innerHTML = nombre;
    //output.innerHTML = file.name;
  }
});


function playFile(){
  console.log("playFile");
}




//-------------------------------------------------------------------------
var deposito_1 = document.getElementById("deposito_1");
deposito_1.innerHTML = "Drop Audio Here";

//-------------------------------------------------------------------------
//DEPOSITO LISTENERS 
deposito_1.addEventListener("dragenter", function (event) {
  event.preventDefault();
  deposito_1.style.background = "rgba(250, 0, 0, .5)";
});
deposito_1.addEventListener("dragover", function (event) {
  event.preventDefault();
});
deposito_1.addEventListener("drop", soltar);
//-------------------------------------------------------------------------

function soltar(event) {
  event.preventDefault();
  this.style.background = "#006600";
  this.innerHTML = "Drop Audio Here";
  const link = event.dataTransfer.getData("text");
  const archivos = event.dataTransfer.files;
  console.log("archivos: " + archivos);
  console.log("link: " + link);
  console.log("`${link}`: " + `${link}`);
  player_1.src = `${link}`;
  player_1.load();
  player_1.play();
}
