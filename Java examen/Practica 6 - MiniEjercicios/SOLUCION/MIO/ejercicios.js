
'use strict';
// ejercicio 1

/* dada la cadena de texto 0123456789, 
recuperar los tres primeros caracteres, 
los 3 últimos, y del índice 2 al 7 (incluido)*/

let a = '0123456789';

console.log('3 primeros:', a.slice(0, 3));
console.log('3 últimos:', a.slice(-3));
console.log('Del índice 2 al 7 (incluido):', a.slice(2, 8));

// ejercicio 2

/* dada la fecha actual, en qué día de la 
semana nos encontramos (lunes, martes...)? 
tip - Objeto Date() tip array semana para convertir*/

let horaActual=new Date();
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaDeLaSemana = diasSemana[horaActual.getDay()];

console.log("Hoy es " + diaDeLaSemana);



// Ejercicio 3: 
/* dada cualquier fecha, devolverla 
formateada como dd-mm-yyyy 
tip - metodos locale***/

let fecha1 = new Date();
let dia = fecha1.getDate();
let mes = fecha1.getMonth() + 1; //Porque los meses van del 0 al 11
let año = fecha1.getFullYear();

let resultado = dia + '-' + mes + '-' + año;

console.log(resultado);

// Ejercicio 4: 

// simular la tirada de una moneda, cara o cruz?
// uso de Random()

let moneda = Math.random(); ///Numero decimal aleatorio intervalo [0 y 1)
let caracruz = (moneda < 0.5) ? "cara" : "cruz"; //Si menor de 0.5 cara sino cruz
console.log(caracruz);

// Ejercicio 5:

/* ahora que sabemos más cosas, 
dada la fecha actual en qué día de 
la semana nos encontramos (lunes, martes...)?*/

let fecha5 = new Date();

const numeroSemana = ["7", "1", "2", "3", "4", "5", "6"];
const resultado5 = numeroSemana[fecha5.getDay()];

console.log("Estamos a dia " + resultado5 + " de la semana");

// Ejercicio 6.
// dada una cadena de texto y un carácter 
// (o secuencia de caracteres), 
// eliminar estos últimos de la cadena de texto
// metodos de String

let lorem = "Lorem ipsum dolor sit amet";
let parteEliminada = "amet";
let texto = lorem.replace(parteEliminada, '');

console.log(texto);


// Ejercicio 7.
// modificar la función de crear un array (n,min, max) 
// para que devuelva 
// un array ordenado (ver método sort())
// tip - numero de argumentos variables e inicializacion 

function creaArray(n, min, max) {
    let a= [];// modifico var por let que es la forma correcta de declarar
  
    if (min === undefined || max === undefined) {
      min= 0;
      max= 100;
    }
    for (let i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
    a.sort((a,b)=>a-b);
    return a;
  }
    let nuevoArrayuno=creaArray(10,10,50);
    console.log(nuevoArrayuno);

// Ejercicio 8: modificar la función de crear un array 
// y añadirle que en  
// el caso de proporcionar dos argumentos 
// (número de elementos y valor mínimo). Si 
// no se proporciona el tercer parámetro 
// éste debe ser el valor mínimo más 100.
// tip - numero de argumentos variables e inicializacion 

function creaArray(n, min, max) {
    let a= [];// modifico var por let que es la forma correcta de declarar
  
    if (max === undefined) {
      max= min+ 100;
    }
    for (let i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
    a.sort((a,b)=>a-b);
    return a;
  }
    let nuevoArray=creaArray(50,10,100);
    console.log(nuevoArray);

/*Ejercicio  9: escribir una función que devuelva el 
número mayor de todos los pasados como argumentos.*/

function numeroMayor(...numeros) {
    if (numeros.length === 0) {
      return undefined; // En caso de que no se pase ningún argumento
    }
  
    let max = numeros[0]; // Suponemos que el primer número es el mayor
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > max) {
        max = numeros[i]; // Si encontramos un número mayor, lo actualizamos
      }
    }
  
    return max;
  }

  const pruebaNumeroMayor = numeroMayor(10, 25, 5, 30, 15);
  console.log("El número mayor es:", pruebaNumeroMayor);

/*
// tip - argumentos de funcion como elementos de array... */

//ejercicio 10.

/*escribir la función contarPalabras 
a la que se le pasa un string y 
devuelve el número de palabras */

function contarPalabras(str){
  const palabra = str;
  return palabra.length;
}
contarPalabras('Mateo');





