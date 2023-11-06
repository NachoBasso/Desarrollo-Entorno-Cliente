
//1.- Realiza una función que se le pasen 
//    como parámetros la lista y el tipo. 
//    Debe devolver una lista únicamente con los elementos del tipo indicado

const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
];

console.log('Ejercicio 1');

function busquedaSuper (lista,empresa){
	console.log('Buscando');
	const busqueda = lista.filter(tipoSuper => tipoSuper.tipo == empresa);
	console.log(busqueda);
	return busqueda;
};

busquedaSuper(superHeroes,'Marvel');

//2.- Tenemos que cambiar el nombre de 
//    todos los super héroes de DC a ‘CAMBIADO’ 
//    un espacio en blanco y el nombre del super Héroe

let cambiar = superHeroes.map((elemento)=>{
	if (elemento.tipo == 'DC') {
		elemento.nombre =  'CAMBIADO ' + elemento.nombre ;
	}
})
console.log('Ejercicio 2');
console.log(superHeroes);


//3.- Muestra en pantalla la cantidad de 
//    super Heroes de DC que existen en la tabla
console.log('Ejercicio 3');

const totalHeroes = superHeroes.filter((heore) => heore.tipo == 'DC').length
console.log('Hay un total de ' + totalHeroes + ' Heroes')

//4.- Ahora la tabla es esta:
	const superHeroes2 = [
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
	];

console.log('Ejercicio 4');
//Observa que es una lista de cadenas 
//con formato JSON, pero no es JSON.

//a) crea una nueva lista con elementos 
//   objetos JavaScript (Investiga, investiga...)
console.log('Ejercicio 4a');
const superHeroesJSON = superHeroes2.map(jsonString => JSON.parse(jsonString));
console.log(superHeroesJSON);

//b) filtra únicamente los elementos de Marvel
console.log('Ejercicio 4b');
const marvelHeroes = superHeroesJSON.filter(hero => hero.tipo === 'Marvel');

console.log("Superhéroes de Marvel:");
console.log(marvelHeroes);

//5.- Añade, en superHeroes, dos 
//    nuevos super Héroes al final de la lista.
console.log('Ejercicio 5');
superHeroes.push({ nombre: 'NuevoHero1', tipo: 'DC' });
superHeroes.push({ nombre: 'NuevoHero2', tipo: 'Marvel' });

//6.- Añade otros dos superHeroes al inicio de la lista
console.log('Ejercicio 6');
superHeroes.unshift({ nombre: 'NuevoHero3', tipo: 'DC' });
superHeroes.unshift({ nombre: 'NuevoHero4', tipo: 'Marvel' });

//7.- Ordena, alfabéticamente, los superHeroes por nombre (investiga).
console.log('Ejercicio 7');
superHeroes.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log("Superhéroes ordenados por nombre:");
console.log(superHeroes);

//8.- Ordena, alfabéticamente, los superHeroes 
//    por tipo (Bueno, ya lo habías investigado antes…).
console.log('Ejercicio 8');
superHeroes.sort((a, b) => a.tipo.localeCompare(b.tipo));

console.log("Superhéroes ordenados por tipo:");
console.log(superHeroes);

//9.- Crea una lista únicamente con los nombres de 
//    los superHéroes como cadenas de caracteres.
console.log('Ejercicio 9');
const heroNames = superHeroes.map(hero => hero.nombre);

console.log("Nombres de superhéroes como cadenas:");
console.log(heroNames);

//10.- Lo mismo que en 9 pero esta vez debe 
//     ser una lista de objetos del tipo { nombre: ‘Batman’ }.
console.log('Ejercicio 10');

const heroObjects = superHeroes.map(hero => ({ nombre: hero.nombre }));

console.log("Lista de objetos con nombres:");
console.log(heroObjects);
