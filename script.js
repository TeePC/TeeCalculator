let number_1;
let number_2;
let operator;

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}




function operate(num1, num2, operator) {

    if (operator === 'add') {
        add(num1, num2);

    } else if ( operator === 'subtract') {
        subtract(num1, num2 ); 

    } else if ( operator === 'multiply') {
        multiply(num1, num2 ); 

    } else if ( operator === 'divide') {
        divide(num1, num2 ); 

    }

}

 const display = document.getElementById("userInput");
 const numberButtons = document.querySelectorAll('.numbers');


numberButtons.forEach( btn => {
    btn.onclick = function(btn) {

        display.placeholder += btn.target.value;
        console.log(btn.target.value);
        
    }
})


 function update() {
    const p = document.createElement("h1");
    

 }