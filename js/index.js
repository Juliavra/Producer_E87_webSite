function cargarLink() {
    var playlist = document.getElementById("playlist");
    var carpeta = document.getElementById("carpeta");
    var frame = document.getElementById("frame");
    var carpeta_trim = carpeta.value.trim();
    var mensaje = "";
    var carpeta_replace = "";
    var lista=[];
    //console.log("carpeta_trim  " + carpeta_trim);
    if (carpeta_trim.includes("https://youtu.be", 0)) {
        carpeta_replace = carpeta_trim.replace("https://youtu.be", "https://www.youtube.com/embed");
        mensaje = carpeta_replace.trim();
        //        console.log("INCLUYE  " + mensaje);
    }
    else {
        for (var f = carpeta_trim.indexOf("https", 0); f < carpeta_trim.length; f++) {
            if (carpeta_trim[f] != `"`) {
                mensaje += carpeta_trim[f];
                mensaje = mensaje.trim();
                //console.log(mensaje);
            }
            else {console("ERROR EN LINK"); break; }
        }
    }

mensaje = `https://www.youtube.com/playlist?list=PLzKOn4-bkF7q549Ln8_JpZ3ZLZcgxyTph`
console.log("mensaje  " + mensaje);
    frame.src = `${mensaje}`;          console.log("frame.src  " + mensaje);
    lista.push( `${mensaje}`);
    //console.log("FRAME: " + frame.src);
    muestraLista();
}//CLOSES cargarLink

function muestraLista() {
    // console.log(`LISTA: ` + `${lista}`);|
    //playlist.innerHTML = (`${lista}`);
    playlist.innerHTML = `${lista}`;
    
  }


  