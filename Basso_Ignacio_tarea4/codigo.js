'use strict';
//Basso, Ignacio Gustavo
//CONTROLES
//Selecciono los elementos del DOM que necesito por su ID y los asigno a una variable
const numero = document.querySelector('#number'); // Entrada de número
//const numero = +document.querySelector('#number').textContent;
const contadorSpn = document.querySelector('#countdown');//para mostrar el contador
const clickmeBtn = document.querySelector('#clickme'); //botón para hace click
const formulario = document.querySelector('#one form');
//ON - OFF
const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogress = document.querySelector('#inprogress'); // Elemento para mostrar el progreso
const zero = document.querySelector('#zeroreached');//mostrar cuando se alcanza cero
const badamount = document.querySelector('#badamount');//para mostrar cantidad no válida

let countdown = 0; // Inicializar countdown

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const cantidad = parseFloat(numero.value); // Capturar el valor y lo convierte a número
    const noEsValido = isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad);

    if (noEsValido) {
        badamount.style.display = 'block';//mensaje no válido
    } else {//si la cantidad es válida
        countdown = cantidad; //configura contador
        contadorSpn.textContent = String(countdown);
        div1.style.display = 'none';
        div2.style.display = 'block';
    }
});

clickmeBtn.addEventListener('click', () => {
    if (countdown > 0) {//decrementar el contador si aún es mayor que cero
        countdown--;
        contadorSpn.textContent = String(countdown);
      if (countdown === 0) {  // si el contador llega a cero, actualiza el mensaje
            inprogress.style.display = 'none';
            zero.style.display = 'block';
            clickmeBtn.disabled = true;
      }
    }
});