# Feedback 2 - Informatica II

## Nombre completo: Alejandro Martínez Ronda
## Repositorio:
- Usuario github: alejandru00
- Link repositorio: [Github: https://github.com/alejandru00/feedback2.git]

------------------------------------------------

# Enunciado:

Dado el siguiente código fuente de una página web `index.html` y su estilo `sytles.css`, adjuntos a
este enunciado. 

### Archivo HTML: index.html
``` html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica JavaScript</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id="contenido">
        <h1 id="titulo">Título de la Página</h1>
        <p id="descripcion">Descripción inicial de la página.</p>
        <form id="formulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br><br>
            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad"><br><br>
            <input type="submit" value="Enviar">
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Archivo CSS: styles.css
``` css
body {
    font-family: Arial, sans-serif;
   }

#contenido {
    width: 60%;
    margin: 0 auto;
    text-align: center;
   }

   #formulario {
    margin-top: 20px;
   }
```

## Ejercicio 1:
Escribe una función en JavaScript que cambie el texto del título (#titulo) y la descripción
(#descripcion) de la página. Comentala correctamente para que se entienda lo que se está
haciendo.

## Ejercicio 2:
Crea una función que valide los campos del formulario. El campo "nombre" no debe estar
vacío y el campo "edad" debe ser un número entre 18 y 99. Si no es correcto pone el borde de
los campos en rojo y muestra un texto por debajo del campo en rojo que indiqué el error.

## Ejercicio 3:
Implementa un contador de visitas que incremente cada vez que se recargue la página y
muestra este número en un nuevo párrafo en el pie de la web en el que se muestre ese
contador.

## Ejercicio 4:
Crea una función que cambie el color de fondo de los campos de formulario cada vez que se
muestra la web.

## Ejercicio 5:
Implementa una función de autoguardado para el formulario. Cada vez que el usuario modifique
un campo del formulario, guarda automáticamente los valores en localStorage. Cuando el
usuario vuelve a cargar la página, rellena los campos del formulario con los datos guardados, si
existen.

-----------------------------------------------------------------

-----------------------------------------------------------------

# Código final:
### Archivo HTML:
``` html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica JavaScript</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" type="text/javascript"></script>
</head>

<body>
    <div id="contenido">
        <h1 id="titulo">Título de la Página</h1>
        <p id="descripcion">Descripción inicial de la página.</p>

        <form id="formulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre"><br><br>
            <p id="errorNombre" class="error"></p>                              <!-- Error nombre (Ej 2) -->

            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad"><br><br>
            <p id="errorEdad" class="error"></p>                                <!-- Error edad (Ej 2) -->

            <input type="button" value="Enviar" onclick="funcionValidacion()">
        </form>
    </div>


    <footer>
        <div>
            <h2>Contador de Visitas.</h2>
            <p>Número de visitas: <span id="contador">0</span></p>
        </div>
    </footer>
</body>
</html>
```

### Archivo CSS:
``` css
body {
    font-family: Arial, sans-serif;
   }

#contenido {
    width: 60%;
    margin: 0 auto;
    text-align: center;
   }

   #formulario {
    margin-top: 20px;
   }

/* Error ejercicio 2 */
.error {
    color: red;
    margin-top: -10px;
    font-size: 14px;
}
```

### Archivo JavaScript:
``` js
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

function autoguardado() {
    var nombre = localStorage.getItem("nombre").value;
    var edad = localStorage.getItem("edad").value;

    if (nombre !== null || edad !== null) {
        document.getElementById('nombre').value = nombre;
        document.getElementById('edad').value = edad;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    autoguardado();
});
```
