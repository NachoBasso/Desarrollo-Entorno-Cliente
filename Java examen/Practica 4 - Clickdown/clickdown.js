const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');

const numeroEntra = document.querySelector('#number');//numero de entrada
const numInvalido = document.querySelector('#badamount');//texto que mostraremos si da error
const formulario = document.forms[0];

let decrecer = document.querySelector('#countdown');
const boton = document.querySelector('#clickme');
const final = document.querySelector('#zeroreached');
const textoFin = document.querySelector('#inprogress');


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

        boton.addEventListener('click', (event) => {//listener del boton
            event.preventDefault();
            console.log("me presionaron");

            if (cantidad >1){//condicion antes de que llege a 0
                cantidad--;
                decrecer.textContent = cantidad;
            }else {//condicion cuando llegue a 0
                console.log('cero alcanzado');
                final.style.display = 'block';
                textoFin.style.display = 'none';
                boton.disabled = true;
            }


        });

    }else{//error que salta si hay un numero invalido
        numInvalido.style.display = 'block';
    }

  });