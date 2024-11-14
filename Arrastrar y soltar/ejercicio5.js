let cuerpo = document.getElementsByClassName('body');
let caja;
for (let i = 1; i < 11; i++) {
    caja = document.createElement('div');
    caja.id = "caja" + i;
    caja.setAttribute('dragable', 'true');
    caja.style.height = "30px";
    caja.style.width = "30px";
    caja.style.backgroundColor = "orange";
    console.log(i);
}
