'use strict'
console.log('Hola Operaciones a Piñon fijo!');

const h1 = document.querySelector('#h1');
h1.textContent = 'Operaciones a piñon fijo realizadas';

let dato1 = document.querySelector('#dato1').lastChild.data;
let dato2 = document.querySelector('#dato2').lastChild.data;
let suma = dato1 + dato2;
let resta = dato1 - dato2;
let division = dato1 / dato2;
let resto = dato1 % dato2;

document.querySelector('#suma').innerHTML = " Resultado de la suma de Dato1 + Dato2 es " +  suma;
document.querySelector('#resta').innerHTML = " Resultado de la resta de Dato1 - Dato2 es " + resta;
document.querySelector('#division').innerHTML = " Resultado de la multiplicacion de Dato1 / Dato2 es " + division;
document.querySelector('#resto').innerHTML = " Resultado del resto de Dato1 % Dato2 es " + resto;