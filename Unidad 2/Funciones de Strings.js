let mensaje = "abcdefghijklmnñopqrstuvwxyz"
//length
console.log(mensaje, mensaje.length);
//concat()
let mensaje2 = "AEIOU";
console.log(mensaje.concat(mensaje2));
/*
    charAt()
Devuelve el caracter del índice especificado
*/
console.log(mensaje2.charAt(2));
/*
    charCodeAt()
Devuelve el valor Unicode del caracter en la posición especificada
*/
console.log(mensaje2.charCodeAt(2));
/*
    toLowerCase() y toUpperCase()
Convierten la cadena en minúsculas y mayúsculas respectivamente
*/
console.log(mensaje.toUpperCase(), mensaje2.toLowerCase());
