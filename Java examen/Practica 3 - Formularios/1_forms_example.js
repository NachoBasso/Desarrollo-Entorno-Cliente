'use strict';

// controls
const nombreEntrada = document.querySelector('#nombre_input');//nombre que introducimos
const nombreSalida = document.querySelector('#nombre_out');//nombre el cual luego mostraremos
const miFormulario = document.querySelector('#myform');// formulario

// on/off
const div1 = document.querySelector('#div1');//div a apagar
const div2 = document.querySelector('#div2');//div a encender

// listener
miFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("he sido pulsado");
    nombreSalida.textContent = nombreEntrada.value;
    div1.style.display = 'none';//acordarse del .STYLE y el .DISPLAY
    div2.style.display = 'block';
  });