function cargarLink() {
    var carpeta = document.getElementById("carpeta");
    var frame = document.getElementById("frame");
    var carpeta_trim = carpeta.value.trim();
    var mensaje = "";
    var carpeta_replace = "";
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
            else { break; }
        }
    }
    frame.src = `${mensaje}`;
    //console.log("FRAME: " + frame.src);
}