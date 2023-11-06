'use strict';

let countdown;
let interval;

// Elementos de control
const numberInput = document.querySelector('#number');
const countdownDisplay = document.querySelector('#countdown');
const formElement = document.querySelector('#one form');

// Estados
const section1 = document.querySelector('#one');
const section2 = document.querySelector('#two');
const inProgressMessage = document.querySelector('#inprogress');
const zeroReachedMessage = document.querySelector('#zeroreached');
const invalidAmountMessage = document.querySelector('#badamount');

function updateCountdown() {
    countdown--;
    countdownDisplay.textContent = String(countdown);

    if (countdown === 0) {
        inProgressMessage.style.display = 'none';
        zeroReachedMessage.style.display = 'block';
        clearInterval(interval);
    }
}

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("¡Clickeado!");
    const amount = Number(numberInput.value);
    const isInvalidAmount = isNaN(amount) || amount <= 0;
    
    if (isInvalidAmount) {
        invalidAmountMessage.style.display = 'block';
        return;
    }

    countdown = amount + 1;
    updateCountdown();

    section1.style.display = 'none';
    section2.style.display = 'block';
    interval = setInterval(updateCountdown, 1000);
});