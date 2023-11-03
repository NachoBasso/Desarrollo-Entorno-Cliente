'use strict';

//controls
const recomendacion = document.querySelector('#recomendacion');
const recomBtn = document.querySelector('#recom')
// on/off
// functions

function recomendar() {
  const dediaRdBtn = document.querySelector('input[name="dedia"]:checked');
  const cansadoRdBtn = document.querySelector('input[name="cansado"]:checked');
  const soloRdBtn = document.querySelector('input[name="solo"]:checked');
  let result = "dummy string";
  const esDia = dediaRdBtn.value === "dedia";
  const esDescansado = cansadoRdBtn.value === "descansado";
  //const esCansado = cansadoRdBtn.value === "cansado";
 const esSolo = soloRdBtn.value === "solo";
  //const esAcompanado = soloRdBtn.value === "acompañado";
  const esDeNoche = dediaRdBtn.value === "denoche";

  

  result = esDia && esDescansado && esSolo ? "running.": esDia && !esDescansado && esSolo ? "siesta.": esDia && !esSolo ? "cine.": esDeNoche ? "dormir.": result;
  return result;
}
 
recomBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('clicked Recomendar');
  let result = recomendar();
  console.log ('en el retorno de la funcion',result);
  recomendacion.textContent = String(result);
});



















/**
 * funtion identifyoperands(inputstring)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 
 * @param {string} mathexpresion
 * @returns {number, number, booleam}
 */

/**
 * funtion operate(number1, number2, operation)
 * @param {number, number, booleam}
 * @returns {string} resultado
 */

/**
 * funtion operaSimple(string)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 5.- Perform the operation
 * 6.- Return result or failure(NaN)
 * 
 * 
 * @param {string} mathexpresion
 * @returns {string} resultado
 */