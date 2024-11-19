function cargarLink() {
    var carpeta = document.getElementById("carpeta");
    var frame = document.getElementById("frame");
    var carpeta_trim = carpeta.value.trim();
    var mensaje = "";
    for (var f = carpeta_trim.indexOf("https", 0); f < carpeta_trim.length; f++) {
        if (carpeta_trim[f] != `"`)
            mensaje += carpeta_trim[f];
        else { break; }
    }
    mensaje = mensaje.trim();
    console.log(mensaje);
    //frame.src =mensaje;
    frame.src = `${mensaje}`;
    console.log(frame.src);

}

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/cHR-S4Ni7PE?si=qh5mdG6Dq0bFh2_d"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/