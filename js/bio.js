var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;
/*alert("height: " + height + "  width: " + width);*/
/*
if (window.matchMedia("(max-with: 400px)".matches)) {
  alert("px <= 400 width");
}
else {
  alert("px > 400 width");
}

if (window.matchMedia("(max-heigth: 400px)".matches)) {
  alert("px <= 400 height");
}
else {
  alert("px > 400 height");
}
*/

function myFunction(x) {
  if (x.matches) {
    document.body.style.backgroundColor = "yellow"; 
    /*alert("es menor o igual a 400px");*/
  }
  else {
    document.body.style.backgroundColor = "#006600"; 
    /*alert("es mayor  400px");*/
  }






}


const mmObj = window.matchMedia("(max-width: 400px)");

myFunction(mmObj);

mmObj.addEventListener("",myFunction);



//fnBrowswerDetect();

/*let hheight = window.innerHeight;*/

/*
ventanaAncho=window.innerWidth;
ventanaAnchoOuter=window.outerWidth
alert("ventanaAncho: " + ventanaAncho);
alert("ventanaAnchoOuter: " + ventanaAnchoOuter);
ventanaAlto=window.innerHeight;
ventanaAltoOuter=window.outerHeight;
alert("ventanaAlto"+ventanaAlto);
alert("ventanaAltoOuter"+ventanaAltoOuter);
*/

/*
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator)
{  hasTouchScreen=navigator.maxTouchPoints >0;}
else if("msMaxTouchPoints" in navigator){  hasTouchScreen=navigator.maxTouchPoints >0;}
else{const mQ = matchMedia?.("(pointer:coarse)")}
*/

/*
if (!(maxTouchPoints in Navigator))
{  alert("! no negado");}
else{  alert("ELSE");}
*/

/*window.addEventListener("resize", ()) => {*/
/*REFRESCAR EL TAMAÑO DE LAS COSAS DEPENDIENTES DEL TAMAÑO DE PANTALLA */
/*}*/


function fnBrowswerDetect() {

  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  }
  else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  }
  else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  }
  else if (userAgent.match(/opr/i)) {
    browserName = "opera";
  }
  else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  }
  else {
    browserName = "Fail browser detection";
  }

  alert("BN: " + browserName);

}