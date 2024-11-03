let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let mensaje = "Error inicial",
    terminos = document.getElementById('terminos'),
    spam = document.getElementById('spam'),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    terminos.value = 'off';
    spam.value = 'off';

/*---una manera de enviar el formulario------*/
/*
document.getElementById("submit").onclick = function () {
validateForm();
}
*/
/*--otra manera de enviar el formulario------ */
/*
function validarFormulario(evento){
  evento.preventDefault();
  alert("todo lo que la validacion requiera se agrega debajo a esta funcion ");
     this.submit();// PARA ENVIAR
}
*/
/*UNA TERCERA------------------------- */
/*
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("form").addEventListener('submit', validarFormulario());
});*/

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    var formulario = new Object();
    formulario.terminos = document.getElementById('terminos');
    formulario.spam = document.getElementById('spam');
   
    let form = document.createElement('form');
    form.action = 'https://formspree.io/f/mvondkre';
    form.method = 'POST';
alert("formulario.terminos.vsalue: "+ formulario.terminos.value);
    let terminos_inner = `"terminos" value=${terminos.value}>`;
    let spam_inner = ` "spam" value=${spam.value}>`;
    var test_cadena = terminos_inner + " " + spam_inner;
    //var test_cadena = formulario.si_o_no;
    form.innerHTML = test_cadena;
    document.body.append(form);
    form.submit();
    alert(`${test_cadena}`);

}