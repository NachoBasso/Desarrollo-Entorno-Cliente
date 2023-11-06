'use strict'
//***************** JAVASCRIPT BASICO I ********************
//spread operator
const arr = [ 1,2,3 ];
const funcion = (a,b,c) => console.log(`Valor a: ${a}, valor b: ${b}, valor c:${c}`);
funcion(...arr);


//También nos va a servir para concatenar arrays:

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// ------------------- EJEMPLOS QUE YO AGREGUE ------------------
console.log("Elementos de arr1:", ...arr1);
console.log("Elementos de arr2:", ...arr2);
console.log("Elementos de arr3:", ...arr3);
//Realizar alguna operación en los elementos antes de imprimirlos. Por ejemplo, 
//duplicar cada elemento de arr3 y mostrar el nuevo arreglo:

const arrayDuplicado = arr3.map((elemento) => elemento * 2);
console.log("Duplicar elementos de arr3:", ...arrayDuplicado);

//Combinar los elementos de arr1 y arr2 en un nuevo arreglo y luego imprimir ese arreglo:
const combinado = [...arr1, ...arr2];
console.log("Elementos combinados de arr1 y arr2:", ...combinado);

// --------------- FIN EJEMPLOS QUE YO AGREGUE ------------------


//O para crear un número indeterminado de parámetros en una función:

const muchosArgumentos = (...argumentos) => {
for (let i in argumentos) {
   	 console.log(i);
   	 }
}

let razones = ['porquesi', 'porqueno','porquetalvez' ]

muchosArgumentos(razones); // log 0

muchosArgumentos('porquetu', 'porqueyo','porquenosotros',razones,'porquelaabuela'); // log 0, 1, 2, 3, 4

//Cuando definamos una función con spread operator este siempre debe ser 
//el último en la definición. En este caso se le denomina REST operator
let probando=new Array("hola",44,"Cristian");//Lo hice yo en clase
console.log(muchosArgumentos(...probando));//Lo hice yo en clase

//DESTRUCTURING
let [a,b]= [1,2];
console.log(a,b);

const persona = {
    nombre: 'Pedro',
    apellidos: 'Pereda Mellado',
    edad: 53,
    profesion: 'Informático',
    }
let {nombre, apellidos, ...otrosDatos} = persona;
console.log(nombre, apellidos, otrosDatos);

//PARA REFLEXIONAR - ¿Qué hace este código?
const useState = () =>  ['valor', () => {} ];

const [valor, setValor] = useState();
/*
El código que proporcionaste define una función llamada useState que 
utiliza una función flecha para devolver un arreglo con dos elementos:

1. 'valor': Este es el primer elemento del arreglo y es simplemente 
una cadena de texto que representa un valor inicial. 
En este caso, se establece como "valor".

2. () => {}: Este es el segundo elemento del arreglo y es una función anónima (una función
flecha vacía en este caso). Esta función no hace nada, ya que no contiene código en su interior.

Luego, se llama a la función useState y su valor de retorno se asigna a la
variable valor y setValor utilizando la destructuración de arreglos. 
En otras palabras, valor será igual a "valor" y setValor será 
igual a la función vacía () => {}.

Este código es similar a cómo se implementa el hook useState en React,
donde el primer elemento del arreglo representa el estado actual y 
el segundo elemento representa la función que se utiliza para actualizar
ese estado. Sin embargo, en este caso, la función de actualización 
no hace nada en particular, por lo que este código no tiene un uso práctico 
evidente en sí mismo. Puedes considerarlo como un ejemplo simplificado y 
básico de cómo podrías crear una función useState personalizada en JavaScript.
*/

// Ternario: ? (igual que en Java)
const activo = false;
const mensaje1 = (activo) ?  'Activo' : 'No Activo';

const activo2 = true;
console.log(mensaje1);
// También nos encontramos muchos:
const mensaje2 = activo2 && 'Activo';
console.log(mensaje2)

//FILTER - FILTRADO
const ejemploarr = [0,1,2,3];
const filtrado = ejemploarr.filter( x => x > 1 );
console.log(ejemploarr[1], ejemploarr[3]);//imprimirá 1 3, que son los valores en las posiciones 1 y 3 del array ejemploarr.
console.log(ejemploarr);//que es el array original sin cambios.
console.log(filtrado);//que es un nuevo array que contiene los elementos mayores que 1, como resultado de la función .filter().

//MAP - MAPEO
const mapeado = arr.map( x => x ** 2 )
console.log(mapeado)

// En este caso devuelve un único valor 
// después de aplicar una función a los 
// elementos del array:

const suma = arr.reduce((acumulador,elemento)=>acumulador + elemento,0);

// ----Hasta aca era lo que estaba en el github----
// ----Apartir de ahora es el contenido extra del PowerPoint

//  ----MAP----- Agregado por mi
const arr0123 = [0,1,2,3];
const filtrando = arr0123.map( x => x ** 2 );
console.log(filtrando);//lo agregue yo.  imprimirá [0, 1, 4, 9], 
//que son los cuadrados de los elementos originales [0, 1, 2, 3].

//En React nos vamos a encontrar muchos map para la creación de listas de esta manera:
/*<>
	<h1> Estamos funcionando </h1>
	<AddCategory onNewCategory = {onAddCategory}/>
	{ categories.map( element => <GifGrid key={element} element = {element} /> )}
</>*/
//
//  ------------- REDUCE -------------
//En este caso devuelve un único valor después de aplicar una función a los elementos del array:

const arrEjemplo = [ 1, 2, 3 ];
const sumaEjemplo = arrEjemplo.reduce((acumulador,elemento)=>acumulador + elemento,0);
console.log(sumaEjemplo);

/*
El código que proporcionaste utiliza la función reduce() para calcular la suma de los 
elementos en el array arrEjemplo. El resultado se almacena en sumaEjemplo. 
En este caso, el valor inicial del acumulador se establece en 0.
El código calculará la suma de los elementos en arrEjemplo de la siguiente manera:
Iteración 1: acumulador = 0 + 1 = 1
Iteración 2: acumulador = 1 + 2 = 3
Iteración 3: acumulador = 3 + 3 = 6
Por lo tanto, console.log(sumaEjemplo); imprimirá 6, que es la suma de los elementos en el array [1, 2, 3]
*/
//Para reflexionar ¿Qué hace este código?
const arrayNum = [0,1,2,3,4];
const sumar = arrayNum
    .map(x=> x**2)//[0,1,4,9,16]
    .filter(x=> x >= 4)//[4,9,16]
    .reduce((acumulador, elemento)=> acumulador + elemento,0 );//
console.log(sumar); //29
/*
El código que proporcionaste realiza una serie de operaciones en un array llamado `arrayNum` que contiene 
los elementos [0, 1, 2, 3.4]. Las operaciones se realizan en cadena utilizando los métodos `map`, 
`filter`, y `reduce`. Aquí está lo que hace cada parte del código:

1. `.map(x => x ** 2)`: Este método `map` itera sobre cada elemento del array `arrayNum` y eleva 
al cuadrado cada elemento (calcula x^2). Después de aplicar esta operación, obtendrás un nuevo
 array con los elementos resultantes de la operación de elevar al cuadrado. En este caso, 
 obtendrás [0, 1, 4, 11.56].

2. `.filter(x => x >= 4)`: El método `filter` filtra los elementos del array que cumplan con la condición 
de ser mayores o iguales a 4. En este caso, elimina el primer elemento (0) y el segundo elemento (1) del 
nuevo array resultante. El nuevo array será [4, 11.56].

3. `.reduce((acumulador, elemento) => acumulador + elemento, 0)`: Finalmente, el método `reduce` toma el 
array resultante de la operación de filtro y calcula la suma de todos los elementos. El valor inicial del 
acumulador es 0, por lo que comienza sumando 0 a los elementos del array. La suma se realiza de la 
siguiente manera:

   - Iteración 1: acumulador = 0 + 4 = 4
   - Iteración 2: acumulador = 4 + 11.56 = 15.56

El resultado final de este proceso es 15.56. Por lo tanto, la variable `sumar` contendrá el valor 15.56
 después de ejecutar este código.
En resumen, el código toma un array de números, eleva al cuadrado cada número, filtra los números 
mayores o iguales a 4, y luego suma los números filtrados. El resultado final es 15.56.
*/

//EJEMPLOS QUE YO AGREGUE:
// arr3 = [1, 2, 3, 4, 5,6];
console.log(arr3);//imprime completo
console.log("Longitud de arr3:", arr3.length);//imprime la longitud del arreglo. (6)
for (const elemento of arr3) {//imprime los elementos uno por uno en un bucle (imprime los números del 1 al 6)
	console.log(elemento);
  }
console.log("Elementos de arr3:", arr3.join(", "));//imprime los elementos de arr3 en una cadena de texto formateada
console.log("Primer elemento de arr3:", arr3[0]);//imprimir el primer elemento de arr3


//Imprimir el último elemento de arr3:
console.log("Último elemento de arr3:", arr3[arr3.length - 1]);

//Realizar una operación en cada elemento y luego imprimir el resultado. Por ejemplo duplicar
//cada elemento y mostrar el nuevo arreglo: 
const arrDuplicado = arr3.map((elemento) => elemento * 2);
console.log("Duplicar elementos de arr3:", arrDuplicado);
// FIN EJEMPLOS QUE YO AGREGUE