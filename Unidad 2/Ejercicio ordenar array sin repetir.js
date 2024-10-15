/*
let arrayInicial = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];

console.log(arrayInicial.sort());

arrayInicial.splice(arrayInicial.lastIndexOf(0),1);
console.log(arrayInicial);

arrayInicial.pop(arrayInicial.lastIndexOf(1));
console.log(arrayInicial);

arrayInicial.splice(arrayInicial.indexOf(2),arrayInicial.lastIndexOf(2));
console.log(arrayInicial);
*/

let texto = "Esto es un texto para hacer ejercicios con cadenas";
texto2 =texto.split(" ");

let letra = texto2[0].charAt(0);
texto2.reverse().join("");
console.log(texto2);