'use strict'
console.log('Hola Operaciones a Piñon fijo!');

const h1 = document.querySelector('#h1');
const dato1 = +document.querySelector('#dato1').textContent;//Con el simbolo + convierto el String en númerico
const dato2 = +document.querySelector('#dato2').textContent;
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const resto = document.querySelector('#resto');

h1.textContent = 'Operaciones a piñon fijo realizadas';

suma.textContent = suma.textContent.replace('X',dato1 + dato2);
resta.textContent = resta.textContent.replace('Y',dato1 - dato2);
division.textContent = division.textContent.replace('Z',dato1 / dato2);
resto.textContent = resto.textContent.replace('W',dato1 % dato2);