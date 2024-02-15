

/*
EJERCICIO 1:
Escribe una función en JavaScript que cambie el texto del
título (#titulo) y la descripción (#descripcion) de la página.
Comentala correctamente para que se entienda lo que se está haciendo.
*/

var titulo = 'Nuevo título';
var descripcion = 'Nueva descripción';
function cambiarTexto(titulo, descripcion) {
    document.getElementById('titulo').innerText = titulo;
    document.getElementById('descripcion').innerText = descripcion;
}


/*
EJERCICIO 2:
Crea una función que valide los campos del formulario. El campo "nombre"
no debe estar vacío y el campo "edad" debe ser un número entre 18 y 99. Si
no es correcto pone el borde de los campos en rojo y muestra un texto por
debajo del campo en rojo que indiqué el error.
*/

function funcionValidacion() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    var errorNombre = "";
    var errorEdad = "";

    if (nombre == "") {
        document.getElementById("nombre").style.borderColor = "red";
        document.getElementById('errorNombre').textContent = "Por favor, ingresa tu nombre.";
    } else {
        document.getElementById("nombre").style.borderColor = "";
        document.getElementById("errorNombre").textContent = "";
        document.getElementById("nombre").value = "";
    }

    if (edad < 18 || edad > 99 || edad == "" || isNaN(edad)) {
        document.getElementById("edad").style.borderColor = "red";
        document.getElementById('errorEdad').textContent = "Por favor, ingresa una edad válida entre 18 y 99 años.";
    } else {
        document.getElementById("edad").style.borderColor = "";
        document.getElementById("errorEdad").textContent = "";
        document.getElementById("edad").value = "";
    }
}


/*
EJERCICIO 3:
Implementa un contador de visitas que incremente cada vez que se recargue la página y
muestra este número en un nuevo párrafo en el pie de la web en el que se muestre ese
contador.
*/

function contadorVisitas() {
    var contador = localStorage.getItem("visitas");
    if (contador == null) {
        contador = 1;
    }
    else {
        localStorage.setItem('visitas', ++contador);
    }
    localStorage.setItem('visitas', contador);
    document.getElementById('contador').textContent = contador;
}
document.addEventListener('DOMContentLoaded', function() {
    contadorVisitas();
});


/* EJERCICIO 4:
Crea una función que cambie el color de fondo de los campos de formulario cada vez que se
muestra la web.
 */

function cambiarColor() {
    // Generamos un color "crema" aleatorio para que se pueda leer el texto en los campos
    var r = Math.floor((Math.random() * 56) + 200).toString(16);
    var g = Math.floor((Math.random() * 36) + 220).toString(16);
    var b = Math.floor((Math.random() * 56) + 200).toString(16);

    document.getElementById('nombre').style.backgroundColor = "#" + r + g + b
    document.getElementById('edad').style.backgroundColor = "#" + r + g + b;
}
document.addEventListener('DOMContentLoaded', function() {
    cambiarColor();
});


/* EJERCICIO 5:
Implementa una función de autoguardado para el formulario. Cada vez que el usuario
modifique un campo del formulario, guarda automáticamente los valores en localStorage.
Cuando el usuario vuelve a cargar la página, rellena los campos del formulario con los
datos guardados, si existen...
 */

function guardarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
}

function cargarFormulario() {
    const nombreGuardado = localStorage.getItem('nombre');
    const edadGuardada = localStorage.getItem('edad');

    if (nombreGuardado) {
        document.getElementById('nombre').value = nombreGuardado;
    }
    if (edadGuardada) {
        document.getElementById('edad').value = edadGuardada;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    guardarFormulario();
});