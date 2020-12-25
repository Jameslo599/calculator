let num1 = "";
let num2 = "";
let operator = "";
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
    if (operator == "add") {
        removeDisplay();
        displayValue.push(add(num1, num2));
        input.nodeValue = arrayConversion();
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
function arrayConversion() {
    number = Number(displayValue.join(""));
    return number;
}
let input = document.createTextNode(0);
display.appendChild(input);

function removeDisplay() {
    input.nodeValue = 0;
    displayValue = [];
}

let zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    displayValue.push(0);
    input.nodeValue = arrayConversion();
});

let one = document.getElementById("one");
one.addEventListener("click", () => {
    displayValue.push(1);
    input.nodeValue = arrayConversion();
});

let two = document.getElementById("two");
two.addEventListener("click", () => {
    displayValue.push(2);
    input.nodeValue = arrayConversion();
});

let three = document.getElementById("three");
three.addEventListener("click", () => {
    displayValue.push(3);
    input.nodeValue = arrayConversion();
});

let four = document.getElementById("four");
four.addEventListener("click", () => {
    displayValue.push(4);
    input.nodeValue = arrayConversion();
});

let five = document.getElementById("five");
five.addEventListener("click", () => {
    displayValue.push(5);
    input.nodeValue = arrayConversion();
});

let six = document.getElementById("six");
six.addEventListener("click", () => {
    displayValue.push(6);
    input.nodeValue = arrayConversion();
});

let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    displayValue.push(7);
    input.nodeValue = arrayConversion();
});

let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    displayValue.push(8);
    input.nodeValue = arrayConversion();
});

let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    displayValue.push(9);
    input.nodeValue = arrayConversion();
});

let clear = document.getElementById("clear");
clear.addEventListener("click", removeDisplay);

let plus = document.getElementById("plus");
plus.addEventListener("click", toAdd);

function toAdd() {
    operator = "add";
    num1 = arrayConversion();
    removeDisplay();
}

let equal = document.getElementById("equal");
equal.addEventListener("click", toEqual);

function toEqual() {
    num2 = arrayConversion();
    operate(operator, num1, num2);
}