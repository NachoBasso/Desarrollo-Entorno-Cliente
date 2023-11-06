'use strict';

let countdown;

const numberInp = document.querySelector('#number');
const countSpn = document.querySelector('#countdown');
const clickmeBtn = document.querySelector('#clickme');
const form = document.querySelector('#one form');

const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogress = document.querySelector('#inprogress');
const zeroreached = document.querySelector('#zeroreached');
const badamount = document.querySelector('#badamount');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(numberInp.value);
  
  console.log((amount-parseInt(amount)==0))

  const invalidAmount = isNaN(amount) || amount <= 0 || (!(amount-parseInt(amount)==0));
  if (invalidAmount) {
    badamount.style.display = 'block';
    return;
  }

  countdown = amount;
  console.log(`countdown is ${countdown}`);  
  countSpn.textContent = String(countdown);

  div1.style.display = 'none';
  div2.style.display = 'block';
});

clickmeBtn.addEventListener('click', () => {
  console.log('clicked!');
  countdown --;
  console.log(`new counter is ${countdown}`);
  countSpn.textContent = String(countdown);

  if (countdown === 0) {

    inprogress.style.display = 'none';
    zeroreached.style.display = 'block';
    clickmeBtn.disabled = true;
  }
});