/*
let array =['Jose'];
let [, apellido = 'Rodriguez'] = array;
console.log(apellido);

let persona = {
    nombre: 'Sarah',
    pais: 'Nigeria',
    trabajo: 'Desarrollador'
};

let { nombre1, pais2, trabajo3 } = persona;

console.log(nombre1);
console.log(pais2);
console.log(trabajo3);
let persona = {
    nombre: 'Pepe',
    apellidos: ['García', 'Peréz'],
    edad: 23,
};

let persona = {
    constructor (nombre,edad) {
        this._nombre = 'Pepe';
        this._edad = 23;
    }
    
    apellidos: ['García', 'Peréz'],
    
};
*/
//En los objetos funciona por nombre, no por posicion, por lo que hay que llamar a las variables igual que los parámetros

let persona = {
    nombre: 'Pepe',
    apellidos: ['García', 'Peréz'],
    edad: 23,
};

let { nombre:ej1, edad:ej2} = persona;

console.log("1.- " + ej1,ej2);

let arr = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
let [lu,,mi,,,] = arr;
console.log("2.- " + lu,mi);

let { apellidos:[apellido1, apellido2]} = persona;
console.log(apellido1,apellido2);

function verDatos({ nombre = 'Luis', apellidos = ['Gonzalez','Martinez'], edad = 20}) {
    if (typeof(apellidos) != undefined) {
        console.log(nombre,apellidos,edad);
    } else {
    console.log(nombre,edad);
    }
}

verDatos(persona);

let personaNueva = {
    nombre: 'Nano',
    edad: 33,
}
verDatos(personaNueva);

let otraPersona = {
    edad: 61,
}
verDatos(otraPersona);

let otraPersonaMas = {

}
verDatos(otraPersonaMas);