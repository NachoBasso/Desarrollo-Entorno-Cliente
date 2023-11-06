'use strict';

let clickmeBtn = document.querySelector('#clickme');
let contador = document.querySelector('#counter');
let contadorClicks = 0;

clickmeBtn.addEventListener('click', () => {

  console.log('clicked!');
  contador.textContent = contadorClicks;

  contadorClicks ++;

});