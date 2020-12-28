//Starting number and operator values
let num1 = "";
let num2 = "";
let operator = "";
let newEquation = "";
let decimalPoint = false;
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
    if (num2 == 0) {
        return "Cannot divide by 0";
    } else { 
        return num1 / num2;
    }
}
//Function to include all basic mathematical functions
function operate(operator, num1, num2) {
    if (operator == "add") {
        removeDisplay();
        displayValue.push(add(num1, num2));
        input.nodeValue = arrayConversion();
    } else if (operator == "subtract") {
        removeDisplay();
        displayValue.push(subtract(num1, num2));
        input.nodeValue = arrayConversion()
    } else if (operator == "multiply") {
        removeDisplay();
        displayValue.push(multiply(num1, num2));
        input.nodeValue = arrayConversion()
    } else if (operator == "divide") {
        removeDisplay();
        displayValue.push(divide(num1, num2));
        input.nodeValue = arrayConversion()
    }
}

let display = document.getElementById("display");
let displayValue = [];
function arrayConversion() {
    if (displayValue == "Cannot divide by 0") {
        number = displayValue.join("");
        removeDisplay();
    } else { 
        number = Number(displayValue.join(""));
    }
    return Math.round((number + Number.EPSILON) * 100000000)/100000000;
}
let input = document.createTextNode(0);
display.appendChild(input);

function removeDisplay() {
    input.nodeValue = num1;
    displayValue = [];
}

function fullClear() {
    input.nodeValue = 0;
    displayValue = [];
    num1 = "";
    num2 = "";
    decimalPoint = false;
}

let zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(0);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(0);
        input.nodeValue = arrayConversion();
    }
});

let one = document.getElementById("one");
one.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(1);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(1);
        input.nodeValue = arrayConversion();
    }
});

let two = document.getElementById("two");
two.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(2);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(2);
        input.nodeValue = arrayConversion();
    }
});

let three = document.getElementById("three");
three.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(3);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(3);
        input.nodeValue = arrayConversion();
    }
});

let four = document.getElementById("four");
four.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(4);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(4);
        input.nodeValue = arrayConversion();
    }
});

let five = document.getElementById("five");
five.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(5);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(5);
        input.nodeValue = arrayConversion();
    }
});

let six = document.getElementById("six");
six.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(6);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(6);
        input.nodeValue = arrayConversion();
    }
});

let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(7);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(7);
        input.nodeValue = arrayConversion();
    }
});

let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(8);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(8);
        input.nodeValue = arrayConversion();
    }
});

let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(9);
        input.nodeValue = arrayConversion();
        newEquation = false;
    } else {
        displayValue.push(9);
        input.nodeValue = arrayConversion();
    }
});

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if (decimalPoint == true) {
        return;
    } else {
        displayValue.push(".");
        input.nodeValue = displayValue.join("");
        //Number((input.nodeValue).toFixed());
        return decimalPoint = true;
    }
});

let clear = document.getElementById("clear");
clear.addEventListener("click", fullClear);

let plus = document.getElementById("plus");
plus.addEventListener("click", toAdd);
function toAdd() {
    newEquation = false;
    decimalPoint = false;
    if (num1 != "") {
        toEqual();
        operator = "add";
        num1 = arrayConversion();
        num2 = "";
        removeDisplay();
    }  else {
        operator = "add";
        num1 = arrayConversion();
        removeDisplay();
    }
}

let minus = document.getElementById("subtract");
minus.addEventListener("click", toSubtract);
function toSubtract() {
    newEquation = false;
    decimalPoint = false;
    if (num1 != "") {
        toEqual();
        operator = "subtract";
        num1 = arrayConversion();
        num2 = "";
        removeDisplay();
    } else {
        operator = "subtract";
        num1 = arrayConversion();
        removeDisplay();
    }
}

let product = document.getElementById("multiply");
product.addEventListener("click", toMultiply);
function toMultiply() {
    newEquation = false;
    decimalPoint = false;
    if (num1 != "") {
        toEqual();
        operator = "multiply";
        num1 = arrayConversion();
        num2 = "";
        removeDisplay();
    } else {
        operator = "multiply";
        num1 = arrayConversion();
        removeDisplay();
    }
}

let quotient = document.getElementById("divide");
quotient.addEventListener("click", toDivide);
function toDivide() {
    newEquation = false;
    decimalPoint = false;
    if (num1 != "") {
        toEqual();
        operator = "divide";
        num1 = arrayConversion();
        num2 = "";
        removeDisplay();
    } else { 
        operator = "divide";
        num1 = arrayConversion();
        removeDisplay();
    }
}

let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    decimalPoint = false;
    if (num1 != "") {
            num2 = arrayConversion();
            operate(operator, num1, num2);
            num1 = "";
            newEquation = true;
    } else if (num1 == "") {
            num1 = arrayConversion();
            operate(operator, num1, num2);
            num1 = "";
            newEquation = true;
    }
});

function toEqual() {
        num2 = arrayConversion();
        operate(operator, num1, num2);
        decimalPoint = false;
}