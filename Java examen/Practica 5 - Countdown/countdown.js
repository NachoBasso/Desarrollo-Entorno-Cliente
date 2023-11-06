'use strict';

const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');

const numeroEntra = document.querySelector('#number');//numero de entrada
const numInvalido = document.querySelector('#badamount');//texto que mostraremos si da error
const formulario = document.forms[0];

let decrecer = document.querySelector('#countdown');
const final = document.querySelector('#zeroreached');
const textoFin = document.querySelector('#inprogress');

let intervalo;// creamos una variable para el set del intervalo de 1 segundo
let contador;
formulario.addEventListener('submit', (event) => {

    event.preventDefault();
    console.log("he sido pulsado");
    let cantidad = Number(numeroEntra.value);//convertimos a numero con una nueva variable

    if (cantidad > 0){//condicion para evitar errores
        console.log(typeof cantidad);//------------------------------comprobadores
        console.log(cantidad);       //------------------------------comprobadores
        //pasamos de fase
        div1.style.display = 'none';//quitamos el primer div
        div2.style.display = 'block';//mostramos el siguiente

        decrecer.textContent = cantidad;//numero que aparece en pantalla
        contador = cantidad + 1;// creamos un contador para que lea la funcion(nose por que motivo funciona)
                                //al cual le sumamos 1 para que cuando empieze a restar se vea el numero 10
        decreContador();// llamamos a la funcion
        intervalo = setInterval(decreContador, 1000);// y aqui le decimos que se haga cada 1 segundo


    }else{//error que salta si hay un numero invalido
        numInvalido.style.display = 'block';
    }

});

function decreContador (){//nuestra funcion que luego llamaremos
    //condicion antes de que llege a 0
        contador--;
        decrecer.textContent = contador;
    if(contador === 0){//condicion cuando llegue a 0
        console.log('cero alcanzado');
        final.style.display = 'block';
        textoFin.style.display = 'none';
        clearInterval(intervalo);
    };
};