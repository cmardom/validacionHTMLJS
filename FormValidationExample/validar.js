const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");


/*https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation*/


/*setCustomValidity(message): para personalizar mensaje de error de la validación*/
/*valueMissing: si falta algo y es required, devuelve true*/

//PASO 1: Personalizar mensaje de validación
//Indicar mayoría de edad
function validaEdad() {
    if (edad.validity.valueMissing){
        edad.setCustomValidity("Introduce una edad correcta (+18)")
    } else if (edad.value.rangeOverflow) {
        edad.setCustomValidity("Introduce una edad menor a 120");
    } else if (edad.value.rangeUnderflow) {
        edad.setCustomValidity("Introduce una edad mayor a 18");
    }
}
edad.addEventListener('input', validaEdad());

//Paso 2: Configurar mensaje la primera vez
validaEdad(); // para inicializar el mensaje la primera vez

//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() { //Se usa en paso 3 y paso 5.
    let correo = email.value;
    return correo.substring(correo.indexOf('@'));
}
extraeDominio();

function validaEmail() {
    if (email.validity.valueMissing) {
        email.setCustomValidity("El correo es obligatorio")
    } else if (extraeDominio() !== "@gmail.com"){
        email.setCustomValidity("No es gmail");
    } else {
        email.setCustomValidity(""); //hay que resetear el mensaje siempre
    }
}
validaEmail();
email.addEventListener('blur', validaEmail); //cuando pierde el foco, valida
function validaFormulario(event) {


}




//PASO 4: Eliminar validación automática del navegador



//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

// function validaNombre() {

// }
// function validaEmail(){

// }

// function validaEdadHTML5(){

// }

// function validaEdadJS(){

// }

// function validaFormulario(event) {

// }



