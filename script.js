let num1 = "";
let num2 = "";
//Add two numbers
function add(num1, num2) {
    return num1 + num2;
}
//Subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}
//Multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}
//Divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}
//Function to include all basic mathematical functions
function operate(operator, num1, num2) {
    if (operator == add) {
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2);
    } else if (operator == multiply) {
        return multiply(num1, num2);
    } else if (operator == divide) {
        return divide(num1, num2);
    }
}

let display = document.getElementById("display");

let zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    let displayValue = document.createTextNode(0);
    display.appendChild(displayValue);
});
let one = document.getElementById("one");
one.addEventListener("click", () => {
    let displayValue = document.createTextNode(1);
    display.appendChild(displayValue);
});
let two = document.getElementById("two");
two.addEventListener("click", () => {
    let displayValue = document.createTextNode(2);
    display.appendChild(displayValue);
});
let three = document.getElementById("three");
three.addEventListener("click", () => {
    let displayValue = document.createTextNode(3);
    display.appendChild(displayValue);
});
let four = document.getElementById("four");
four.addEventListener("click", () => {
    let displayValue = document.createTextNode(4);
    display.appendChild(displayValue);
});
let five = document.getElementById("five");
five.addEventListener("click", () => {
    let displayValue = document.createTextNode(5);
    display.appendChild(displayValue);
});
let six = document.getElementById("six");
six.addEventListener("click", () => {
    let displayValue = document.createTextNode(6);
    display.appendChild(displayValue);
});
let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    let displayValue = document.createTextNode(7);
    display.appendChild(displayValue);
});
let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    let displayValue = document.createTextNode(8);
    display.appendChild(displayValue);
});
let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    let displayValue = document.createTextNode(9);
    display.appendChild(displayValue);
});