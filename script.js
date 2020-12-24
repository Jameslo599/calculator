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
let displayValue = [];
let zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    let input = document.createTextNode(0);
    display.appendChild(input);
    displayValue.push(0)
});
let one = document.getElementById("one");
one.addEventListener("click", () => {
    let input = document.createTextNode(1);
    display.appendChild(input);
    displayValue.push(1);
});
let two = document.getElementById("two");
two.addEventListener("click", () => {
    let input = document.createTextNode(2);
    display.appendChild(input);
    displayValue.push(2)
});
let three = document.getElementById("three");
three.addEventListener("click", () => {
    let input = document.createTextNode(3);
    display.appendChild(input);
    displayValue.push(3)
});
let four = document.getElementById("four");
four.addEventListener("click", () => {
    let input = document.createTextNode(4);
    display.appendChild(input);
    displayValue.push(4)
});
let five = document.getElementById("five");
five.addEventListener("click", () => {
    let input = document.createTextNode(5);
    display.appendChild(input);
    displayValue.push(5)
});
let six = document.getElementById("six");
six.addEventListener("click", () => {
    let input = document.createTextNode(6);
    display.appendChild(input);
    displayValue.push(6)
});
let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    let input = document.createTextNode(7);
    display.appendChild(input);
    displayValue.push(7)
});
let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    let input = document.createTextNode(8);
    display.appendChild(input);
    displayValue.push(8)
});
let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    let input = document.createTextNode(9);
    display.appendChild(input);
    displayValue.push("9")
});
function arrayConversion() {
    number = Number(displayValue.join(""));
    return number;
}