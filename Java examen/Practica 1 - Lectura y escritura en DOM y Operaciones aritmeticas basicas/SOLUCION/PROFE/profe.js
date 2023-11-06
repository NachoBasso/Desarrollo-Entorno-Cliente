'use strict'

console.log('Hola Operaciones a PiÃ±on fijo!');
const h1 = document.querySelector('#h1');

const dato1plus =document.querySelector('#dato1');//agarramos
console.log(dato1plus);//mostramos

const valordato1enString = dato1plus.textContent;//convertimos a texto
console.log(valordato1enString);//mostramos en texto

const dato1number = Number(valordato1enString);//convertimos en numero
console.log(dato1number);//mostramos el number

const dato1bisnumber =+valordato1enString;
console.log(dato1bisnumber);

const dato1 = +document.querySelector('#dato1').textContent;
const dato2 = +document.querySelector('#dato2').textContent;
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const resto = document.querySelector('#resto');
console.log(dato1);

console.log(suma.textContent.replace('X',dato1+dato2));

suma.textContent = suma.textContent.replace('X',dato1+dato2)
resta.textContent=resta.textContent.replace('Y',dato1-dato2);
division.textContent=division.textContent.replace('Z',dato1/dato2)
resto.textContent=resto.textContent.replace('W',dato1%dato2)
h1.textContent = 'Operaciones a piÃ±on fijo realizadas';