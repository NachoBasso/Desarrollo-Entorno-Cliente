'use strict'

// spread operator ...

const arr = [1,2,3];
const funcion = (a,b,c) => console.log(`Valor a: ${a}, valor b: ${b}, valor c: ${c}`);
funcion(...arr);

// También nos va a servir para concatenar 
// arrays:

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

// O para crear un número indeterminado de parámetros en una función:


const muchosArgumentos = (...argumentos) => {
    for (let i in argumentos) {
            console.log(i);
    }
}

let razones = ['porquesi', 'porqueno','porquetalvez' ]

muchosArgumentos(razones); // log 0

muchosArgumentos('porquetu', 'porqueyo','porquenosotros',razones,'porquelaabuela'); // log 0, 1, 2, 3, 4





/*  Cuando definamos una función con spread 
operator este siempre debe ser el último en 
la definición. En este caso se le denomina 
REST operator */

// destructuring

let [a,b]= [1,2];
console.log(a,b);//1 2
/*
desestructura un array [1, 2], asignando el valor 1 a la variable a y 
el valor 2 a la variable b. Por lo tanto, a tendrá el valor 1 y b 
tendrá el valor 2.
*/
const persona = {
    nombre: 'Pedro',
    apellidos: 'Pereda Mellado',
    edad: 53,
    profesion: 'Informático',
}

let {nombre, apellidos, ...otrosDatos} = persona;

console.log(nombre, apellidos, otrosDatos);//Pedro Pereda Mellado { edad: 53, profesion: 'Informático' }
/*
desestructura un objeto persona:

{nombre, apellidos, ...otrosDatos} = persona; asigna las propiedades nombre y apellidos 
del objeto persona a las variables nombre y apellidos respectivamente.
El operador ... (spread/rest operator) se utiliza para recopilar todas las demás 
propiedades del objeto en un nuevo objeto llamado otrosDatos.

Entonces, en el console.log, se muestra nombre que contiene "Pedro", apellidos 
que contiene "Pereda Mellado", y otrosDatos que contiene un objeto con las 
propiedades "edad" y "profesion", que son "53" e "Informático", respectivamente.

*/




// para reflexionar
// ¿Qué hace este código?:

const useState = () =>  ['valor', () => {} ];

const [valor, setValor] = useState();

console.log(valor, setValor)

// Ternario: ? (igual que en Java)
const activo = false;
const mensaje1 = (activo) ?  'Activo' : 'No Activo';

const activo2 = true;
console.log(mensaje1);
// También nos encontramos muchos:
const mensaje2 = activo2 && 'Activo';
console.log(mensaje2)