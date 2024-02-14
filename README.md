# Feedback 2 - Informatica II

## Nombre completo: Alejandro Martínez Ronda
## Usuario github: alejandru00
## Link repositorio:
[Github: https://github.com/alejandru00/feedback2.git]

------------------------------------------------

# Enunciado:

Dado el siguiente código fuente de una página web index.html y su estilo sytles.css, adjuntos a
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

# Código final.
### Archivo HTML:
``` html

```

### Archivo CSS:
``` css

```
