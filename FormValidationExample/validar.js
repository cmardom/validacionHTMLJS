const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");

const nombreError = document.getElementById("errorNombre");
const emailError = document.getElementById("errorEmail");
const edadError = document.getElementById("errorEdad");


/*https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation*/


/*setCustomValidity(message): para personalizar mensaje de error de la validación*/
/*valueMissing: si falta algo y es required, devuelve true*/

//PASO 1: Personalizar mensaje de validación
//Indicar mayoría de edad
function validaEdad() {
    let test = true;
    if (edad.validity.valueMissing){
        edad.setCustomValidity("Introduce una edad correcta (+18)")
        test = false;
    } else if (edad.value.rangeOverflow) {
        edad.setCustomValidity("Introduce una edad menor a 120");
        test = false;
    } else if (edad.value.rangeUnderflow) {
        edad.setCustomValidity("Introduce una edad mayor a 18");
        test = false;
    }
    return test;
}
edad.addEventListener('input', validaEdad());

//Paso 2: Configurar mensaje la primera vez
//validaEdad(); // para inicializar el mensaje la primera vez

//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() { //Se usa en paso 3 y paso 5.
    let correo = email.value;
    return correo.substring(correo.indexOf('@'));
}
extraeDominio();

// a través de comprobaciones de html5

function validaEmail() {
    let test = true;
    if (email.validity.valueMissing) {
        email.setCustomValidity("El correo es obligatorio")
        test = false;
    } else if (extraeDominio() !== "@gmail.com"){
        email.setCustomValidity("No es gmail");
        test = false;
    } else {
        email.setCustomValidity(""); //hay que resetear el mensaje siempre
        test = false;
    }
    return test;
}

validaEmail();
email.addEventListener('blur', validaEmail); //cuando pierde el foco, valida
function validaFormulario(event) {
    let test = true; //guardamos si es valido o no y comprobamos. Si no cumple, se pone a falso
    if (!validaNombre()){
        test = false;
    }

    if (!validaEmail()){
        emailError.innerText = email.validationMessage;
        test = false;
    }

    if (!validaEdad()){
        test = false;
    }

    //DECIDIR SI SE ENVIA EL FORMULARIO
    if (!test){
        event.preventDefault(); //previene el funcionamiento por defecto del formulario
    }

    return test;

}

formulario.addEventListener('submit', validaFormulario);




//PASO 4: Eliminar validación automática del navegador
//formulario.setAttribute('novalidate', true); //novalidate envia siempre


//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

function validaNombre() {
    return true;
}
function validaEdadHTML5(){

}

function validaEdadJS(){

}

// function validaFormulario(event) {

// }



