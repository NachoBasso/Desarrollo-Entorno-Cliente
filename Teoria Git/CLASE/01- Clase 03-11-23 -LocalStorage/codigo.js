'use strict';
// Almacenar una cadena de texto en LocalStorage
localStorage.setItem('nombre', 'Juan');

// Almacenar un objeto JSON en LocalStorage
const usuario = { nombre: 'María', edad: 25 };
localStorage.setItem('usuario', JSON.stringify(usuario));

// Obtener un valor de LocalStorage por su clave
const nombre = localStorage.getItem('nombre');
console.log(nombre); // Imprimirá 'Juan'

// Obtener un objeto JSON de LocalStorage
const usuarioJSON = localStorage.getItem('usuario');
const usuarioJsonbis = JSON.parse(usuarioJSON);
console.log(usuarioJsonBis.nombre); // Imprimirá 'María'

// Eliminar un elemento de LocalStorage por su clave
localStorage.removeItem('nombre');

// Eliminar todos los elementos de LocalStorage
localStorage.clear();

// Comprobar si una clave existe en LocalStorage
if (localStorage.getItem('nombre')) {
    console.log('La clave "nombre" existe en LocalStorage.');
} else {
    console.log('La clave "nombre" no existe en LocalStorage.');
}


for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const valor = localStorage.getItem(clave);
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

