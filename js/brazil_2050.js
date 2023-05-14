var audio = document.getElementById("myAudio");                       //console.log(audio.value);
var ruta_archivo =  document.getElementById("ruta_archivo");          //console.log(`${ruta_archivo.value}`);    
ruta_archivo.addEventListener("change",sourceUpdate);

function sourceUpdate(){
  //('\')<FUCK   yeah!> ('/') 
//*HTMLAudioElement*/
const stringTestARRAY = [];
const ruta = ruta_archivo.value.trim();                                   
ruta_index=ruta.lastIndexOf("\\", ruta.length-1);                              
track_name= "audio"+ ruta.substr(ruta_index, ruta_index.length).trim();                         
stringTestARRAY [0] = track_name.toString();
document.getElementById("myAudio").src=`${stringTestARRAY[0].toString()}`;
audioElement.load();
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