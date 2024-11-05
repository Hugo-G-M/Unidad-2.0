let Vehiculos = []; //Array global donde se almacenarán los objetos generados

class Vehiculo {
    constructor(pasajeros) {
        this._pasajeros = pasajeros;
    }

    set pasajeros (value) {
        this._pasajeros = value;
    }

    get pasajeros () {
        return this._pasajeros;
    }
}

class Turismo extends Vehiculo {
    constructor(pasajeros,color) {
        super(pasajeros);
        this._color = color;
    }

    set color (value) {
        this._color = value;
    }

    get color () {
        return this._color;
    }
}

class Camion extends Vehiculo {
    constructor(pasajeros,tara) {
        super(pasajeros);
        this._tara = tara;
    }

    set tara (value) {
        this._tara = value;
    }

    get tara () {
        return this._tara;
    }
}


// Devuelve la hora actual del sistema
function capturaReloj() {
    let fecha = new Date();
    document.write("Hora: " + fecha.getHours() +  ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

/*
* Genera entre 2 y 8 turismos y camiones, mínimo 1 por cada tipo de vehiculo y cada uno con un número aleatorio de pasajeros 
* y con su propiedad de objeto propia (color para los coches, tara para los camiones). Posteriormente los almacena en el array Vehiculos
*/
function generarVehiculos() {
    let numeroTurismos = 1 + aleatorio(4); //Entre 1 y 4 turismos
    let numeroCamiones =  1 + aleatorio(4); //Entre 1 y 4 camiones

    do {
        let numeroPasajerosTurismo = 1 + aleatorio(7); //Entre 1 y 7 pasajeros
        let colorTurismo = ["255,0,0", "0,255,0", "0,0,255"]; 
        let colorAleatorio = colorTurismo[aleatorio(colorTurismo.length)]; //Uno de los 3 colores disponibles

        let nTurismo = new Turismo(numeroPasajerosTurismo,colorAleatorio);
        Vehiculos.push(nTurismo);
        
        numeroTurismos--;
    } while (numeroTurismos !== 0);

    do {
        let numeroPasajerosCamion = 1 + aleatorio(7); //Entre 1 y 7 pasajeros
        let taraCamion = aleatorio(9999); //Entre 0 y 9999 kilos

        let nCamiones = new Camion (numeroPasajerosCamion,taraCamion);
        Vehiculos.push(nCamiones);

        numeroCamiones--;
    } while (numeroCamiones !== 0);
}

function aleatorio(valorMaximo) {
    return Math.floor(Math.random()*valorMaximo);
}


function mostrarVehiculos() {
    document.write("<table border='1' style='border-collapse:collapse;'>");
    document.write("<tr><th>Hora</th><th>Tipo de Vehículo</th><th>Pasajeros</th><th>Característica</th></tr>");

    Vehiculos.forEach(vehiculo => {
        let hora = capturaReloj();
        let tipo = vehiculo instanceof Turismo;
        let pasajeros = vehiculo.pasajeros;
        let caracteristica = (vehiculo instanceof Turismo) ? `<span style='color:rgb(${vehiculo.color})'>Color</span>` : vehiculo.tara;

        document.write("<tr>");
        document.write(`<td>${hora}</td>`);
        document.write(`<td>${tipo}</td>`);
        document.write(`<td>${pasajeros}</td>`);
        document.write(`<td>${caracteristica}</td>`);
        document.write("</tr>");
    });

    document.write("</table>");
}

// Generar los vehículos y mostrar la tabla
generarVehiculos();
mostrarVehiculos();
