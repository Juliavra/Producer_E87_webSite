var lista = [];
//lista.push(`https://www.youtube.com/playlist?list=PLzKOn4-bkF7q549Ln8_JpZ3ZLZcgxyTph`);

function cargarLink() {
    var playlist = document.getElementById("playlist");
    var carpeta = document.getElementById("carpeta");
    var frame = document.getElementById("frame");
    var carpeta_trim = carpeta.value.trim();
    var mensaje = "";
    var carpeta_replace = "";
    if (carpeta_trim.includes("list", 0)) {
        mensaje = carpeta_trim;
        console.log("if: " + mensaje);
    }
    else if (carpeta_trim.includes("https://youtu.be", 0)) {
        carpeta_replace = carpeta_trim.replace("https://youtu.be", "https://www.youtube.com/embed");
        mensaje = carpeta_replace.trim();
        console.log("else if: " + mensaje);
    }
    else {
        for (var f = carpeta_trim.indexOf("https", 0); f < carpeta_trim.length; f++) {
            if (carpeta_trim[f] != `"`) {
                mensaje += carpeta_trim[f];
                mensaje = mensaje.trim();
                console.log("else : " + mensaje);
                //console.log(mensaje);
            }
            else { break; }
        }
    }

    frame.src = `${mensaje}`; console.log("frame.src:  " + "\n" + `${mensaje}` + "\n");
    lista.push(`${mensaje}`);

    muestraLista(lista);
}//CLOSES cargarLink

function muestraLista(lista) {
     console.log(`LISTA: ` + `${lista}`);
    playlist.innerHTML = (`${lista}`);
    var cadena_Lista = "";

    for (i = 0; i < lista.length; i++) {
        cadena_Lista = cadena_Lista + `${lista[i]}` + `<br>`;             //console.log("lista[i]  " + `${lista[i]}`);
    }
    playlist.innerHTML = cadena_Lista;
    //https://www.youtube.com/embed/riVYg2-eKA8?si=JLbmdcdlb4gv7IxK
}