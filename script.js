//Starting number and operator values
let num1 = "";
let num2 = "";
let operator = "";
let newEquation = "";
let decimalPoint = false;
let negativeNumber = false;
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
//Raise first number to the power of second number
function power(num1, num2) {
    return num1**num2;
}
//Function to include all basic mathematical functions
function operate(operator, num1, num2) {
    if (operator == "add") {
        removeDisplay();
        displayValue.push(add(num1, num2));
        input.nodeValue = add(num1, num2);
    } else if (operator == "subtract") {
        removeDisplay();
        displayValue.push(subtract(num1, num2));
        input.nodeValue = subtract(num1, num2);
    } else if (operator == "multiply") {
        removeDisplay();
        displayValue.push(multiply(num1, num2));
        input.nodeValue = multiply(num1, num2);
    } else if (operator == "divide") {
        removeDisplay();
        displayValue.push(divide(num1, num2));
        input.nodeValue = divide(num1, num2);
    } else if (operator == "power") {
        removeDisplay();
        displayValue.push(power(num1, num2));
        input.nodeValue = power(num1, num2);
    }
}

let display = document.getElementById("display");
let displayValue = [];
function arrayConversion() {
    if (displayValue == "Cannot divide by 0") {
        number = displayValue.join("");
        removeDisplay();
    } else if (negativeNumber == true) {
        number = Number(displayValue.join(""));
        return -Math.abs(Math.round((number + Number.EPSILON) * 100000000)/100000000);
    } else { 
        number = Number(displayValue.join(""));
        return Math.round((number + Number.EPSILON) * 100000000)/100000000;
    }
}
function arrayConversion2() {
    if (negativeNumber == true) {
        number = displayValue.join("").split("^").join("");
        finalNum = Number(number.replace(num1, ""));
        return -Math.abs(Math.round((finalNum + Number.EPSILON) * 100000000)/100000000);
    } else {
        number = displayValue.join("").split("^").join("");
        finalNum = Number(number.replace(num1, ""));
        return Math.round((finalNum + Number.EPSILON) * 100000000)/100000000;
    }
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
    operator = "";
    negativeNumber = false;
}

let zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(0);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(0);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(0);
        input.nodeValue = displayValue.join("");
    }
});

let one = document.getElementById("one");
one.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(1);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(1);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(1);
        input.nodeValue = displayValue.join("");
    }
});

let two = document.getElementById("two");
two.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(2);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(2);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(2);
        input.nodeValue = displayValue.join("");
    }
});

let three = document.getElementById("three");
three.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(3);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(3);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(3);
        input.nodeValue = displayValue.join("");
    }
});

let four = document.getElementById("four");
four.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(4);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(4);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(4);
        input.nodeValue = displayValue.join("");
    }
});

let five = document.getElementById("five");
five.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(5);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(5);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(5);
        input.nodeValue = displayValue.join("");
    }
});

let six = document.getElementById("six");
six.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(6);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(6);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(6);
        input.nodeValue = displayValue.join("");
    }
});

let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(7);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(7);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(7);
        input.nodeValue = displayValue.join("");
    }
});

let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(8);
        input.nodeValue = displayValue.join("");        
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(8);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(8);
        input.nodeValue = displayValue.join("");    }
});

let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    if (newEquation == true) {
        fullClear();
        displayValue.push(9);
        input.nodeValue = displayValue.join("");
        newEquation = false;
    } else if (negativeNumber == true) {
        displayValue.push(9);
        input.nodeValue = -Math.abs(displayValue.join(""));
        } else {
        displayValue.push(9);
        input.nodeValue = displayValue.join("");
    }
});

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if (decimalPoint == true) {
        return;
    } else {
        displayValue.push(".");
        input.nodeValue = displayValue.join("");
        return decimalPoint = true;
    }
});

let negative = document.getElementById("negative");
negative.addEventListener("click", () => {
    if (negativeNumber == true) {
        input.nodeValue = Math.abs(arrayConversion());
        return negativeNumber = false;
    } else {
        input.nodeValue = -Math.abs(arrayConversion());
        return negativeNumber = true;
    }
});

let allClear = document.getElementById("allClear");
allClear.addEventListener("click", fullClear);

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    input.nodeValue = 0;
    displayValue = [];
});

let plus = document.getElementById("plus");
plus.addEventListener("click", toAdd);
function toAdd() {
    decimalPoint = false;
    if (operator == "add") {
        num2 = arrayConversion();
        toEqual();
        num1 = arrayConversion() || num1;
        displayValue = [];
    } else {
        num2 = arrayConversion();
        toEqual();
        operator = "add";
        num1 = arrayConversion() || num1;
        negativeNumber = false;
        displayValue.push("+");
        input.nodeValue = num1 + "+";
        displayValue = [];
    }
};

let minus = document.getElementById("subtract");
minus.addEventListener("click", toSubtract);
function toSubtract() {
    decimalPoint = false;
    if (operator == "subtract") {
        num2 = arrayConversion();
        toEqual();
        num1 = arrayConversion() || num1;
        displayValue = [];
    } else {
        num2 = arrayConversion();
        toEqual();
        operator = "subtract";
        num1 = arrayConversion() || num1;
        negativeNumber = false;
        displayValue.push("-");
        input.nodeValue = num1 + "-";
        displayValue = [];
    }
};

let product = document.getElementById("multiply");
product.addEventListener("click", toMultiply);
function toMultiply() {
    decimalPoint = false;
    if (operator == "multiply") {
        num2 = arrayConversion();
        toEqual();
        num1 = arrayConversion() || num1;
        displayValue = [];
    } else {
        num2 = arrayConversion();
        toEqual();
        operator = "multiply";
        num1 = arrayConversion() || num1;
        negativeNumber = false;
        displayValue.push("*");
        input.nodeValue = num1 + "*";
        displayValue = [];
    }
};

let quotient = document.getElementById("divide");
quotient.addEventListener("click", toDivide);
function toDivide() {
    decimalPoint = false;
    if (operator == "divide") {
        num2 = arrayConversion();
        toEqual();
        num1 = arrayConversion() || num1;
        displayValue = [];
    } else {
        num2 = arrayConversion();
        toEqual();
        operator = "divide";
        num1 = arrayConversion() || num1;
        negativeNumber = false;
        displayValue.push("/");
        input.nodeValue = num1 + "/";
        displayValue = [];
    }
};

let exponent = document.getElementById("exponent");
exponent.addEventListener("click", () => {
    decimalPoint = false;
    operator = "power";
    num1 = arrayConversion() || num1;
    negativeNumber = false;
    displayValue.push("^");
    input.nodeValue = num1 + "^";
    displayValue = [];
    num2 = "";
});

let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    decimalPoint = false;
    if (num1 != "" && operator != "power") {
            num2 = arrayConversion();
            operate(operator, num1, num2);
            num1 = "";
            newEquation = true;
    } else if (num1 == "") {
            num1 = arrayConversion();
            operate(operator, num1, num2);
            num1 = "";
            newEquation = true;
    } else if (operator == "power") {
        num2 = arrayConversion();
        operate(operator, num1, num2);
        num1 = "";
        newEquation = true;
}
});

function toEqual() {
    if (num2 == "") {
        return;
    } else {
        operate(operator, num1, num2);
        decimalPoint = false;
    }
}
