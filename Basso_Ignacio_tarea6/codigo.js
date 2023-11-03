'use strict';
//Basso, Ignacio Gustavo
// ejercicio 1

/* dada la fecha actual, en qué día de la 
semana nos encontramos (lunes, martes...)? */
let nuevaFecha= new Date();
let semana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado'];
//console.log('prueba ejercicio 1');
console.log(semana[nuevaFecha.getDay()]);


// Ejercicio2 : 
/* dada cualquier fecha, devolverla 
formateada como dd-mm-yyyy */
//console.log('prueba ejercicio 2');
console.log(nuevaFecha.toLocaleDateString('es-ES'));

// Ejercicio 3: 
// simular la tirada de una moneda, cara o cruz?
// Genera un número aleatorio (0 o 1)
const numeroAleatorio = Math.floor(Math.random() * 2);

// Asigna "cara" si el número es 0, de lo contrario, asigna "cruz"
const resultado = (numeroAleatorio === 0) ? "cara" : "cruz";
//console.log('prueba ejercicio 3');
console.log(`El resultado de tirar la moneda es: ${resultado}`);



// Ejercicio 4.
// dada una cadena de texto y un carácter 
// (o secuencia de caracteres), 
// eliminar estos últimos de la cadena de texto

let cadena = "abcdefghijq";
let caracteres = "fgh";
let nuevaCadena = cadena.replace(caracteres, '');
//console.log('prueba ejercicio 4');
console.log(nuevaCadena);


// Ejercicio 5
// modificar la función de crear un array (n,min, max) 
// para que devuelva 
// un array ordenado (ver método sort())
// Crea array de n elementos de números aleatorios entre min y max
function creaArray(n, min, max) {
  let a = []; 

  for (let i = 0; i < n; i++) {
    a.push(Math.round(min + Math.random() * (max - min)));
  }

  let arrayOrdenado = [...a].sort((a, b) => a - b);

  return arrayOrdenado;
}

let numeros= creaArray(10, 0, 1000);
//console.log('prueba ejercicio 5');
console.log('numeros:', numeros);

// Ejercicio 6: modificar la función de crear un array 
// y añadirle que en  
// el caso de proporcionar dos argumentos 
// (número de elementos y valor mínimo). Si 
// no se proporciona el tercer parámetro 
// éste debe ser el valor mínimo más 100.
// tip - numero de argumentos variables e inicializacion 

function crearArrayDosArgumentos(n, min, max) {
    let a= []; 
    if (max === undefined) {
        
        max= min + 100;
      }
  
    for (let i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));
  
    return a;
  }
  console.log('prueba ejercicio 6');
  numeros= crearArrayDosArgumentos(10, 1000);  
  console.log('numeros:', numeros);

/*Ejercicio 7 : escribir una función que devuelva el 
número mayor de todos los pasados como argumentos.
*/

function calcularElMayor() {
    let esMayor =0;
  
    for (let i= 0; i < arguments.length; i++) {
        if(arguments[i] > esMayor){
            esMayor = arguments[i];
        }
    }
    return esMayor;
  }
  //resultado del profesor en clase:
function mayor(){
  let result = Math.max(...arguments); // si o si van los tres puntos
  return result;
}
let mayores = calcularElMayor(3,888,60);
//console.log('prueba ejercicio 7');
console.log("El mayor entre 3, 888 y 60 es: "+ mayores); //El mayor entre 3, 888 y 60 es: 888



