'use strict'
console.log('Inicio del ejercicio');

const h1 = document.querySelector('#h1');
h1.textContent = 'Titulo de la pagina web';

const dato1 = document.querySelector('#dato1');
console.log('Este es el dato 1');
dato1.textContent = '50';//podemos poner cualquier numero
const texto1 = dato1.textContent;
const numero1 = Number(texto1);

console.log(numero1);

const dato2 = document.querySelector('#dato2');
console.log('Este es el dato 2');
dato2.textContent = '10';//podemos poner cualquier numero
const texto2 = dato2.textContent;
const numero2 = Number(texto2);

console.log(numero2);


const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const resto = document.querySelector('#resto');

suma.textContent = suma.textContent.replace('X', numero1 + numero2 );
console.log(`El resultado de la suma de ${numero1} + ${numero2} es ${numero1 + numero2}`);

resta.textContent = resta.textContent.replace('Y', numero1 - numero2 );
console.log(`El resultado de la resta de ${numero1} + ${numero2} es ${numero1 - numero2}`);

division.textContent = division.textContent.replace('Z', numero1 / numero2 );
console.log(`El resultado de la division de ${numero1} + ${numero2} es ${numero1 / numero2}`);

resto.textContent = resto.textContent.replace('W', numero1 % numero2 );
console.log(`El resultado del resto de ${numero1} + ${numero2} es ${numero1 % numero2}`);

