//controls
const nombreInp = document.querySelector('#nombre_input');
const nombreOut = document.querySelector('#nombre_out');
const myform = document.querySelector('#myform');

//on/off
const mydiv1 = document.querySelector('#div1')
const mydiv2 = document.querySelector('#div2');

//listener
myform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    nombreOut.textContent=nombreInp.value;

    mydiv1.style.display = 'none';
    mydiv2.style.display = 'block';
}); 

/* listener plus no nn/off objects declared/required 
myform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    nombreOut.textContent=nombreInp.value;

    div1.style.display = 'none';
    div2.style.display = 'block';
});
*/