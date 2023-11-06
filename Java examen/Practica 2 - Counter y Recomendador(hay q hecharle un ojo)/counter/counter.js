
/*
            Debes ajustar el proyecto actual 
            para que cada vez que se clicke el boton
            se incremente el literal del html
            alli donde pone:

            You clicked 0 times

            pase a:

            You clicked 1 times
            You clicked 2 times
            You clicked 3 times
            ..
            You clicked N times
*/

'use strict';
const clickmeBtn = document.querySelector('#clickme')
let numero = document.querySelector('#counter');
let cambiaNumero = 0 ;

clickmeBtn.addEventListener('click', () => {
    
    console.log('clicked!');
    cambiaNumero++
    numero.textContent = cambiaNumero;

});