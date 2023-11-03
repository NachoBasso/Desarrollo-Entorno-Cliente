'use strict';
let counter = 0;
const clickmeBtn = document.querySelector('#clickme');
const counterSpn = document.querySelector('#counter');
clickmeBtn.addEventListener('click', () => {    
    counterSpn.textContent = counter++;
});




