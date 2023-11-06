
//Introduccion---------------------------------------------------------------------

//https://xguaita.github.io/mtig-js/modulo2/


//Objetos predefinidos, arrays y funciones-----------------------------------------


//https://xguaita.github.io/mtig-js/modulo3/

//Trabajando con Objetos en JS - MDN-----------------------------------------------


//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects

/*Existen tipo de primitivos String Number Boolean Null Undefined*/

/*  Incremento ++
    Decremento--
    Convertir a un numero +
    Negar un numero -
    Negar un booleano!
    Eliminar una propiedad 'delete'
    Tipo de dato 'typeof'
*/
/*  Multiplicar *
    Dividir /
    Resto %
    Suma +
    Resta-
*/
//CONDICIONALES
/*
              IF ELSE

        if (a < 0) {
          console.log('a es un número negativo');

        } else if (a == 0) {
          console.log('a es 0');

        } else if (a <= 100) {
          console.log('a está entre 1 y 100');

        } else {
          console.log('a es mayor que 100');
        }

*/
/*
              SWITCH

        switch (tipo) {
          case 0:
            valor=* 0.5;
            break;
          case 1:
            valor=* 0.75;
            break;
          case 2:
            valor=* 0.8;
            break;
          default:
            valor=* 0.2;
        }

        switch (dia) {
          case 'lunes':
          case 'martes':
          case 'miércoles':
          case 'jueves':
          case 'viernes':
            console.log('trabajo');
            break;
          default:
            console.log('descanso');
        }

*/

//BUCLES

/*
              WHILE

        var i= 0;
        while (i <= 10) {
          console.log('5 x ' + i + ' = ' + 5 * i);
          i= i + 1; 
        }

              DO WHILE

        var i= 0;
        do {
          console.log('5 x ' + i + ' = ' + 5 * i);
        } while (++i <= 10);


              FOR

        for (var i= 0; i <= 10; i++) {
          console.log('5 x ' + i + ' = ' + 5 * i);
        }
*/

let miVariable = 1;     // asi se crea una variable.
const miConstante = 23; // asi se crea una cosntante.

console.log();          //para llamar a las variables y constantes.

//template string se usan comillas simples------------------------------------------------TEMPLATE STRING ``

const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

//

const producto1 = "Manzanas";
const cantidad = 10;
const precio = 2.5;
const factura = `Has comprado ${cantidad} ${producto1}(s) a un precio de $${precio} cada uno, por un total de $${cantidad * precio}.`;

//split()-------------------------------------------------------------------------------SPLIT()

//Ejemplo 1: Dividir una cadena en palabras utilizando un espacio como separador:
const frase = "Hola, soy un ejemplo";
const palabras0 = frase.split(" ");
console.log(palabras0); // ["Hola,", "soy", "un", "ejemplo"]

//Ejemplo 2: Dividir una cadena en elementos usando una coma como separador:
const lista1 = "manzana,pera,naranja,uva";
const elementos = lista1.split(",");
console.log(elementos); // ["manzana", "pera", "naranja", "uva"]

//Ejemplo 3: Limitar el número de divisiones utilizando el tercer argumento:
const texto = "Uno, dos, tres, cuatro, cinco";
const partes = texto.split(", ", 3);
console.log(partes); // ["Uno", "dos", "tres"]

//filter-------------------------------------------------------------------------------FILTER()

const mumeros = [0,1,2,3];
const filtrado = mumeros.filter( x => x > 1 );
//                          |   como filtrar.                      
console.log(filtrado);

//map-----------------------------------------------------------------------------------MAP()

// Duplicar cada elemento de un array:
const numeros1 = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.map(numero => numero * 2);
console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

//Ejemplo 2: Obtener un nuevo array de longitudes de cadenas de texto:

const palabras = ["manzana", "pera", "naranja", "uva"];
const longitudes = palabras.map(palabra => palabra.length);
console.log(longitudes); // [7, 4, 7, 3]

//reduce---------------------------------------------------------------------------------REDUCE()

//ejemplo
const numeros2 = [2, 3, 4, 5];
const producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(producto); // 120 (2 * 3 * 4 * 5)

//ejemplo
const numeros3 = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 15

//setAttribute---------------------------------------------------------------------------SETATTRIBUTE()

elemento.setAttribute(nombreAtributo, valorAtributo);

//ejemplo
const enlace = document.getElementById("miEnlace");
enlace.setAttribute("href", "https://www.ejemplo.com");
//ejemplo
const imagen = document.getElementById("miImagen");
imagen.setAttribute("src", "nueva-imagen.jpg");

//.value----------------------------------------------------------------------------------.VALUE

//ejemplo
const inputElement1 = document.getElementById("miInput");
const valorActual = inputElement.value;
console.log(valorActual); // Imprime el valor actual del campo de entrada

//ejemplo
const inputElement2 = document.getElementById("miInput");
inputElement.value = "Nuevo valor";// le cambiamos el valor

//innerHTML--------------------------------------------------------------------------------.INNERHTML

//ejemplo Sintaxis para acceder o modificar el contenido HTML de un elemento:
elemento.innerHTML // Obtener el contenido HTML
elemento.innerHTML = nuevoContenido // Establecer un nuevo contenido HTML

//Ejemplo 1: Obtener el contenido HTML de un elemento <div>:
const divElement = document.getElementById("miDiv");
const contenido = divElement.innerHTML;
console.log(contenido); // Imprime el contenido HTML del elemento

//Ejemplo 2: Modificar el contenido HTML de un elemento <p>:
const parrafo = document.getElementById("miParrafo");
parrafo.innerHTML = "Este es un nuevo párrafo con <strong>texto en negrita</strong>.";

//Ejemplo 3: Agregar contenido adicional a un elemento <ul>:
const lista = document.getElementById("miLista");
lista.innerHTML += "<li>Nuevo ítem de lista</li>";



// objetos literales-------------------------------------------------------------------------------OBJETOS LITERALES

// Creación de un objeto literal
const persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Desarrollador",
    decirHola: function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};
  
  // Acceso a propiedades del objeto
  console.log(persona.nombre); // Imprime "Juan"
  console.log(persona.edad);   // Imprime 30
  
  // Llamada a un método del objeto
  persona.decirHola(); // Imprime "Hola, soy Juan y tengo 30 años."

//Spread operator-------------------------------------------------------------------------------SPREAD OPERATOR

//copiar un array
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
console.log(copiaArray); // [1, 2, 3]

//fusionar un array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const fusionArray = [...array1, ...array2];
console.log(fusionArray); // [1, 2, 3, 4, 5, 6]

//agregar elementos a un array
const arrayOriginal = [1, 2, 3];
const nuevoArray = [...arrayOriginal, 4, 5];
console.log(nuevoArray); // [1, 2, 3, 4, 5]

//copiar propiedades de objetos
const objetoOriginal = { a: 1, b: 2 };
const copiaObjeto = { ...objetoOriginal };
console.log(copiaObjeto); // { a: 1, b: 2 }

//Arrow functions-------------------------------------------------------------------------------ARROW FUNCTIONS
(parámetros) => expresión;

//sin parametros
() => "Hola, mundo";

//con un parametro
nombre => `Hola, ${nombre}`;

//con varios parametros
(a, b) => a + b;

//ejemplo
const cuadrado = x => x * x;
console.log(cuadrado(5)); // Imprime 25

//Clases-------------------------------------------------------------------------------------CLASES

class Rabbit {

    constructor(type) {
      this.type = type;
      console.log(`soy un conejo de tipo: ${this.type}`);
    }

    speak(line) {
      console.log(`The ${this.type} rabbit says: '${line}'`);
    }

  }
  
  let killerRabbit = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");

  killerRabbit.speak("I'm going to eat you!");
  blackRabbit.speak("I prefer carrots.");

//get an set-------------------------------------------------------------------------------GETS AND SETS

class Persona {
    constructor (nombre, apellido){
      this.nombre= nombre;
      this.apellido= apellido;
      }
    get nombreCompleto() {
      return `${this.nombre} ${this.apellido}`
    }
    set nombreCompleto(nom) {
      const palabras = nom.split(' ');
      this.nombre = palabras[0] || '';
      this.apellido = palabras[1] || '';
    }
}

let ejemploPersona = new Persona('Luis Fernández');
ejemploPersona.nombreCompleto = 'Pedro Pereda'  //setter

console.log(ejemploPersona.nombreCompleto); //getter

//---------------------------------------------------------------------------------------------------EJEMPLOS

//ejemplo--------------------------------------------------------------------------------
const arr = [ 1,2,3 ]; // array con tres valores

const funcion = (a,b,c) => console.log(`Valor a: ${a}, valor b: ${b}, valor c:${c}`);
//            | valores a introducir  | devolvemos el textto con los valores referenciados

funcion(...arr); //llamamos al array y sacamos el texto con el array refereciado.

//ejemplo--------------------------------------

const argumentos = [ 1,2,3 ];
const muchosArgumentos = (...argumentos) => {
    for (let i in argumentos) {
            console.log(i);
            }
    }
muchosArgumentos(...argumentos);

//ejemplo--------------------------------------

const personaEj = {
    nombre: 'Pedro',
    apellidos: 'Pereda Mellado',
    edad: 53,
    profesion: 'Informático',
    }
let {nombre1, apellidos, ...otrosDatos} = personaEj;
console.log(nombre1, apellidos, otrosDatos);