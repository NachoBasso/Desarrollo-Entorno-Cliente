'use strict';

//Basso, Ignacio Gustavo
//Reutilizo el mismo código del ejercicio anterior "clickdown"
const numero = document.querySelector('#number');
const contadorSpn = document.querySelector('#countdown');
const formulario = document.querySelector('#one form');
const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogress = document.querySelector('#inprogress');
const zero = document.querySelector('#zeroreached');
const badamount = document.querySelector('#badamount');

let countdown = 0;

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const cantidad = Number(numero.value);
    const noEsValido = isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad);

    if (noEsValido) {
        badamount.style.display = 'block';
    } else {
        contadorSpn.textContent = cantidad;
        div1.style.display = 'none';
        div2.style.display = 'block';
        countdown = cantidad;
        // Iniciar el contador y mantener el identificador del intervalo
        haciaAtras = setInterval(function() {
            contadorSpn.textContent = countdown;
              countdown--;
            if (countdown === 0) {
                inprogress.style.display = 'none';
                zero.style.display = 'block';
                clearInterval(haciaAtras); // Detener el intervalo cuando llega a cero
            } 
        }, 1000);//1 segundo = 1000 milisegundos.
    }
});


