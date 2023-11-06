'use strict';

// controls
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
const miboton = document.querySelector('#enviar');

//listener
miboton.addEventListener('click', (event) => {
    event.preventDefault();
    div1.setAttribute("style", "display:none");
    div2.setAttribute("style", "");
    let valorInput = document.querySelector('#nombre_input').value;
    document.querySelector('#nombre_out').innerHTML = valorInput;
});