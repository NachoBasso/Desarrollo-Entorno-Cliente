'use strict'
console.log('Hola Operaciones a Piñon fijo!');

const h1 = document.querySelector('#h1');
const dato1 = document.querySelector('#dato1');
const dato2 = document.querySelector('#dato2');
const suma = document.querySelector('#suma');
const sumados = Number(dato1.textContent) + Number(dato2.textContent);
console.log(sumados);
const resta = document.querySelector('#resta');
console.log(resta);
const restados = Number(dato1.textContent) - Number(dato2.textContent);
console.log(restados);
const division = document.querySelector('#division');
console.log(division);
const divididos = Number(dato1.textContent) / Number(dato2.textContent);
console.log(divididos);
const resto = document.querySelector('#resto');
const restos = Number(dato1.textContent) % Number(dato2.textContent);
console.log(restos);
const nuevoContenidoSuma = suma.textContent.replace('X', sumados);
const nuevoContenidoResta = resta.textContent.replace('Y', restados);
const nuevoContenidoDivision = division.textContent.replace('Z', divididos);
const nuevoContenidoResto = resto.textContent.replace('W', restos);

h1.textContent = 'Operaciones a piñon fijo realizadas';
suma.textContent = nuevoContenidoSuma;
resta.textContent = nuevoContenidoResta;
division.textContent = nuevoContenidoDivision;
resto.textContent = nuevoContenidoResto;








