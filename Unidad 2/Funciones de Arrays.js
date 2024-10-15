//Los arrays se pueden definir de 3 formas
let lista1 = new Array(0,1,2,3);
let lista2 = Array(4,5,6,7);
let lista3 = [8,9,10];

console.log(lista1, typeof(lista1));
console.log(lista2, typeof(lista2));
console.log(lista3, typeof(lista3));
//Control + click izquierdo en el método
/*
    CONCAT
Une varios arrays sin límite
*/
console.log(lista1.concat(lista2, lista3), typeof(lista1.concat(lista2, lista3))); 

/*
    LENGTH
Obtiene o define la longitud de un array, que será un número más que el índice del array.
*/
console.log("Los arrays tienen " + (lista1.length + lista2.length + lista3.length) + " posiciones.", typeof(lista1.length + lista2.length + lista3.length));
/*
    JOIN
Junta los elementos de un array y los convierte en una cadena de texto.
Si no se especifica un separador dentro de los corchetes, usará la coma por defecto.
Puedes meter cualquier cosa como separador.
*/
let a=lista1.join("");
console.log(a,typeof(a));
/*
    SHIFT y POP
Eliminan el primero y el último elemento del array respectivamente
*/
lista2.pop();
lista3.shift();
console.log(lista2.concat(lista3));
/*
    UNSHIFT y PUSH
Añade uno o varios al inicio o al final del array respectivamente
*/
lista2.push(7);
lista3.unshift(8);
console.log(lista2.concat(lista3));
/*
    REVERSE
Invierte los elementos del array
*/
console.log(lista3.reverse());
/*
    SORT
Ordena los elementos del array. Devuelve un valor negativo si el primer argumento es
menor que el segundo, 0 si son iguales y un valor positivo si es al revés.
Si no se especifica cómo ordenarlo, lo hace de forma ascendente.
*/
let lista4 = [12,18,16,19,11,14,17,15,13];
console.log(lista4);
console.log(lista4.sort());
console.log(lista4);
/*
    INDEXOF y LASTINDEXOF
Devuelven la posición inicial y final de un elemento en el array.
Se puede indicar el número del índice desde el que empezar la búsqueda.
Si no se indica, empieza desde 0.
*/
lista4.push(16,11,12,17,15,12,15);
console.log(lista4);
console.log(lista4.indexOf(16));
console.log(lista4.lastIndexOf(17));
console.log(lista4.indexOf(12),11);
console.log(lista4.lastIndexOf(12),11);
/*
    SLICE
Devuelve una porción del array original delimitada por 
los valores de inicio y fin indicados.
*/
console.log(lista4.slice(5,13));
/*
    SPLICE
Inserta, reemplaza o borra elementos del array en el índice especificado.
*/