'use strict';

// controls
const entrada = document.querySelector('#nombre_input');
const salida = document.querySelector('#nombre_out')
// on/off
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
// listener

const miFormulario = document.querySelector('#myform'); // guardo el formulario que va a tener el lisenter.

miFormulario.addEventListener('submit', (event) => {   
    event.preventDefault(); 
    salida.textContent=entrada.value;  
    div1.style.display = 'none';// play with display/hide of divs
    div2.style.display = 'block';// play with display/hide of divs
    
}); 