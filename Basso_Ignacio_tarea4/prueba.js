'use strict';

// Seleccionar elementos del DOM por su ID y asignarlos a variables
const numero = document.querySelector('#number'); // Campo de entrada de número
const contadorSpn = document.querySelector('#countdown'); // Elemento para mostrar el contador
const clickmeBtn = document.querySelector('#clickme'); // Botón para hacer clic
const badamount = document.querySelector('#badamount'); // Elemento para mostrar un mensaje de cantidad no válida
const formulario = document.querySelector('#one form'); // Formulario
const div1 = document.querySelector('#one'); // División 1
const div2 = document.querySelector('#two'); // División 2
const inprogress = document.querySelector('#inprogress'); // Elemento para mostrar el progreso
const zero = document.querySelector('#zeroreached'); // Elemento para mostrar cuando se alcanza cero

let countdown = 0; // Inicializar la variable de contador en 0

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Capturar el valor del campo de entrada y convertirlo a un número
    const amount = Number(numero.value);

    // Verificar si el valor es inválido (no es un número o es menor o igual a cero)
    const invalidAmount = isNaN(amount) || amount <= 0;

    if (invalidAmount) {
        // Mostrar un mensaje de cantidad no válida si es necesario
        badamount.style.display = 'block';
    } else {
        // Si la cantidad es válida, configurar el contador y actualizar la interfaz
        countdown = amount;
        console.log(`countdown is ${countdown}`);
        contadorSpn.textContent = String(countdown);
        div1.style.display = 'none';
        div2.style.display = 'block';
    }
});

// Agregar un evento de clic para el botón "clickme"
clickmeBtn.addEventListener('click', () => {
    // Decrementar el contador si aún es mayor que cero
    if (countdown > 0) {
        countdown--;
        contadorSpn.textContent = String(countdown);

        // Si el contador llega a cero, actualizar la interfaz
        if (countdown === 0) {
            inprogress.style.display = 'none';
            zero.style.display = 'block';
            clickmeBtn.disabled = true;
        }
    }
});

