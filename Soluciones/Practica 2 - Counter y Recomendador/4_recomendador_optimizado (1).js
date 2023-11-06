'use strict';

//controls
const recomendacion = document.querySelector('#recomendacion');
const recomBtn = document.querySelector('#recom')

// on/off

// functions

function recomendar() {
  let result;
  let dedia = document.querySelector('input[name="dedia"]:checked').value==='dedia';
  let cansado = document.querySelector('input[name="cansado"]:checked').value==='cansado'; 
  let solo = document.querySelector('input[name="solo"]:checked').value==='solo';

  console.log(dedia)
  console.log(cansado)
  console.log(solo)

  dedia & !cansado & solo? result = "Running" : 
    dedia & cansado & solo? result = "Siesta" : 
      dedia & !solo? result="Cine":
      result ="Dormir";
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
