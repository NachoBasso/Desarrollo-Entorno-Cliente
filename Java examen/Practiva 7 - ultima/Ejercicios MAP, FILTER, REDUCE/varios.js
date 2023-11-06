/*Con la siguiente lista:
const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

1.- Realiza una función que se le pasen como parámetros la lista y el tipo. Debe devolver una lista 
únicamente con los elementos del tipo indicado
*/const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	]; n 

    function seleccionaTipo(perro, string){
       perro.forEach(element => {
       if(element.tipo==='DC') console.log(element);         
        });
    }
     console.log("Ejercicio 1");
    console.log(seleccionaTipo(superHeroes));
    
   

//2.- Tenemos que cambiar el nombre de todos los super héroes de DC a ‘CAMBIADO’ 
//un espacio en blanco y el nombre del super Héroe

    for (let i = 0; i < superHeroes.length; i++) {
    if (superHeroes[i].tipo === 'DC') {
      superHeroes[i].nombre = 'CAMBIADO ' + superHeroes[i].nombre;
    }
  }
 console.log("Ejercicio 2");
 console.log(superHeroes);

//3.- Muestra en pantalla la cantidad de super Heroes de DC que existen en la tabla

let countDC = 0; // Inicializamos un contador para los superhéroes de DC

superHeroes.forEach(superHero => {
  if (superHero.tipo === 'DC') {
    countDC++;
  }
});

const total = document.querySelector('#cantidasupers');
total.textContent = countDC; 
console.log("EJERCICIO 3");
console.log("El resultado se observa en el DOM en un span creado");

//4.- Ahora la tabla es esta:
/*Observa que es una lista de cadenas con formato JSON, pero no es JSON.
a) crea una nueva lista con elementos objetos JavaScript (Investiga, investiga...)
b) filtra únicamente los elementos de Marvel*/
	const superHeroes2 = [
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
	];

    let superHeroesArray=[];
    superHeroes2.forEach(element => {
        superHeroesArray.push(JSON.parse(element));
    });

    console.log("EJERCICIO 4"); 
    console.log("Se convierte de un JSON a un objeto"); 
    console.log(superHeroesArray);
    

    console.log("FILTRO POR MARVEL"); 
    superHeroesArray.forEach(element => {
        if(element.tipo === "Marvel"){
            console.log(element);
        }
    });


    /* Otra opcion para hacerlo es la siguiente  */
    console.log("OTRA FORMA");
    const otraForma= superHeroesArray.filter(element =>{
       return element.tipo==="Marvel";
        
    });

    console.log(otraForma);

//5.- Añade, en superHeroes, dos nuevos super Héroes al final de la lista

superHeroes.push({nombre:'Tormenta', tipo:'Marvel'},{nombre:'Bruja escarlata', tipo:'Marvel'});
console.log("EJERCICIO 5"); 
console.log(superHeroes);

//6.- Añade otros dos superHeroes al inicio de la lista

superHeroes.unshift({nombre:'Wonder Woman', tipo:'DC'},{nombre:'Flash', tipo:'DC'});
console.log("EJERCICIO 6"); 
console.log(superHeroes);
//7.- Ordena, alfabéticamente, los superHeroes por nombre (investiga)
    
superHeroes.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("EJERCICIO 7"); 
console.log(superHeroes);
//8.- Ordena, alfabéticamente, los superHeroes por tipo (Bueno, ya lo habías investigado antes…)
superHeroes.sort((a, b) => a.tipo.localeCompare(b.tipo));
console.log("EJERCICIO 8"); 
console.log(superHeroes);
//9.-  Crea una lista únicamente con los nombres de los superHéroes como cadenas de caracteres.

const nombresSuperHeroes = superHeroes.map(superHero => superHero.nombre);

console.log("EJERCICIO 9"); 
console.log(nombresSuperHeroes);

//10.- Lo mismo que en 9 pero esta vez debe ser una lista de objetos del tipo { nombre: ‘Batman’ }

const nombresSuperHeroesClaveValor = superHeroes.map(superHero => ({ nombre: superHero.nombre }));
console.log("EJERCICIO 10"); 
console.log(nombresSuperHeroesClaveValor);



	
