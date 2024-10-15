console.log(/^hello/.test(`hola mundo`));
console.log(/^h/.test(`hola mundo`));
console.log(/^hello/.test("hola mundo"));
console.log(/^h/.test("hola mundo"));

console.log("-------------------------");

console.log("TERMINA EN o " + /o$/.test("hola mundo"));
console.log(/a$/.test("hola mundo"));
console.log(/^h.*o$/.test("hola mundo"));//El punto es necesario para indicar al menos un caracter, el asterisco por si solo indica 0 o varios.
console.log(/^h*o$/.test("hola mundo"));
console.log(/^ho$/.test("hola mundo"));
console.log(/h*/.test(""));
console.log(/^h+/.test("ahha")); //Empieza por h y le siguen 1 o más caracteres
console.log(/^h+/.test("hha"));
console.log(/^h?/.test("hha"));
console.log(/h?/.test("hha"));

console.log("-------------------------");

console.log(/^[0-9]/.test("h0la mundo"));
console.log(/[^0-9]/.test(0)); //Un caracter no numérico
console.log(/[^0-9]/.test("hola mundo"));
console.log(/[0-9]/.test("h0la mundo"));

console.log("-------------------------");

console.log(/^[A-z]+]/.test("hola mundo"));
console.log(/[uv]/.test("hola mundu")); //Sale verdadero porque busca que contenga al menos  una u o una v

console.log("-------------------------");

console.log(/(abc){2}(.\d)/.test('--abcabcx4--'));
console.log(/(x4){1}(.\d)/.test('--abcabcx4--')); //Minimo 1 vez que aparezca, daría igual si pones 0
console.log(/(x4){1}(.)/.test('--abcabcx4--'));
console.log(/(x4){1}(.)/.test('--abcabcx4-09-'));

console.log("-------------------------");


//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
