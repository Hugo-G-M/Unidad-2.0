let matriz = [[1,2,3],[4,5,6],[7,8,9,10],["A","B","C"]];

console.log("Numero de filas: ", matriz.length);

console.log("Número de columnas desde la fila 1: ", matriz[0].length);
console.log("Número de columnas desde la fila 3: ", matriz[2].length);

matriz[1][1]=20;

for (i=0; i<matriz.length; i++) {
    console.log(matriz[i]); 
}

matriz.forEach(function (elemento,indice){
    console.log(elemento);
})

let texto = "Esto es un texto para hacer ejercicios con cadenas";
texto2 =texto.split(" ");

console.log(texto2[0]);
let letra = texto2[0].charAt(0);

console.log(letra);

/*
texto2.forEach(function (palabra, indice){
    texto2.charAt(0);
})
console.log(texto2);
*/
