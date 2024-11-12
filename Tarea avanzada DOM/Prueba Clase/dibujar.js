/*
Queremos hacer una aplicación en JavaScript que simule un pequeño tablero de dibujo. Para ello tendrás que dibujar una tablero de 30 celdas x 30 celdas con cada celda de ancho 10 px y alto 10 px. 
Para realizar el tablero de dibujo tendrás que emplear obligatoriamente los métodos de creación de nodos del DOM. Una vez generado el tablero lo meterás dentro del div con id "zonadibujo". 
Además tendrás una paleta con 5 colores de dibujo (que ya está creada y se facilita con el código .html)

Se te facilitará un fichero .html y un fichero .css con los estilos que tendrás que utilizar. La programación de la aplicación JavaScript la tendrás que realizar en un fichero .js adicional.

Si se modifican los colores programados en los estilos CSS (color1 a color 6) la aplicación tendrá que seguir funcionando correctamente.

La forma de funcionamiento de la aplicación será la siguiente:

Haremos click en alguno de los 5 colores de la paleta y se le asignará la clase "seleccionado".
Una vez seleccionado un color de la paleta, haremos un click en una celda (que se pintará del color activo en la paleta) y desde ese momento al mover el ratón por el tablero
pintará del color activo todas las celdas por las que vayamos pasando el ratón. En el momento que volvamos a hacer click en otra celda dejará de pintar.
Podremos escoger un color diferente y repetir el proceso, incluso sobre celdas que ya han sido pintadas.
Para borrar una celda pintaremos con el color blanco de la paleta.
Cada vez que el pincel esté activado se mostrará un mensaje debajo de la paleta de colores indicando : PINCEL ACTIVADO o PINCEL DESACTIVADO.
*/

window.addEventListener('load', crearTablero);
function crearTablero() {
    let zonadibujo = document.getElementById('zonadibujo');
    zonadibujo.style.width = "500px";

    let tabla = document.createElement('table');

    let i = 1;
    let j = 0;
    let fila;
    let celda;
    for (i; i < 31; i++) {
        fila = document.createElement('tr');
        for (j; j < 31; j++) {
            celda = document.createElement('td');
            fila.appendChild(celda);
            celda.style.border = "medium solid";
            celda.style.width = "10px";
            celda.style.height = "10px";
        }
        tabla.appendChild(fila);
        j = 0;
    }
    zonadibujo.appendChild(tabla);
}

/*
celda.addEventListener('clic', activarPincel);
function activarPincel () {
    document.get
}

Crea una caja de texto donde quepan 100 caracteres y que a medida que escribamos nos avise del número de caracteres quequedan libres
Ademas se deben permitir pulsar las teclas backspace, suprimir y las flechas horizontales cuando se haya llegado al máximo número de caracteres
*/
