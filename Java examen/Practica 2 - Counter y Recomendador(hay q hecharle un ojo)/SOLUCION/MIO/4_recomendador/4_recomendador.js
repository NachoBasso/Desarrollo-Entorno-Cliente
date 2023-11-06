'use strict';

// Controles
const recomendacion = document.querySelector('#recomendacion');
const recomBtn = document.querySelector('#recom');

// Función para recomendar actividades
function recomendar() {
  const dediaRdBtn = document.querySelector('input[name="dedia"]:checked').value;
  const cansadoRdBtn = document.querySelector('input[name="cansado"]:checked').value;
  const soloRdBtn = document.querySelector('input[name="solo"]:checked').value;

  const actividad = (dediaRdBtn === "dedia" && cansadoRdBtn === "descansado" && soloRdBtn === "solo") ? "Running"
  : (dediaRdBtn === "dedia" && cansadoRdBtn ==="cansado" && soloRdBtn === "solo") ? "Siesta"
  : (dediaRdBtn === "dedia" && soloRdBtn === "acompañado") ? "Cine" :"Dormir";
  return actividad;
}


recomBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('clicked Recomendar');
  let result = recomendar();
  console.log ('en el retorno de la funcion',result);
  recomendacion.textContent = result;
});
