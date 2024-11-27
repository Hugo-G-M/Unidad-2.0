function ActualizarFecha() {
 let fecha = new Date();
 let textoFecha = document.getElementById('horaActual');
 textoFecha.innerHTML = fecha.getDate + ", " + fecha.getDay + " de " + fecha.getMonth + " de " + fecha.getFullYear + ", " + fecha.getHours + ":" + fecha.getMinutes + ":" + fecha.getSeconds;

}