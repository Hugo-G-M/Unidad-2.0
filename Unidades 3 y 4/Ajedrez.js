//Array de 8x8 posiciones
const tablero = [["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", ""]
                ];

// Objeto Figura
class Figura {
    constructor(x, y, tipo) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
    }

    moverA(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Creo un array donde guardar las 16 piezas. Hago un array secundario con los tipos de figuras y las asigno aleatoriamente.
const figuras = [];
const tipos = ["K", "Q", "T", "A", "C", "P"];

for (let i = 0; i < 16; i++) {
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const figura = new Figura(-1, -1, tipo); // Inicialmente fuera del tablero
    figuras.push(figura);
}

// Coloca una pieza en una posición aleatoria del tablero
function colocarPieza(figura, tablero) {
    let tableroColumna, tableroFila;
    /*
    * Genera un número aleatorio hasta el máximo del tamaño del array tablero y lo añade si la posición está vacía.
    * Luego llamo al método moverA() y le paso las posiciones generadas anteriormente.
    */
    do {
        tableroColumna = Math.floor(Math.random() * 8);
        tableroFila = Math.floor(Math.random() * 8);
    } while (tablero[tableroColumna][tableroFila] !== ""); // Buscar una posición vacía

    figura.moverA(tableroColumna, tableroFila);
    tablero[tableroColumna][tableroFila] = figura.tipo; // Colocar el tipo de figura en el tablero
}

// Colocar todas las figuras en el tablero
figuras.forEach(figura => colocarPieza(figura, tablero));

// Esto hace que se vea como una tabla
console.table(tablero);