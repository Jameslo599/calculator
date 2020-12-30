//Starting number and operator values
let num1 = "";
let num2 = "";
let operator = "";
let newEquation = "";
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
    return num1 / num2;
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
        input.nodeValue = Math.round((add(num1, num2)) * 10000000)/10000000;
    } else if (operator == "subtract") {
        removeDisplay();
        displayValue.push(subtract(num1, num2));
        input.nodeValue = Math.round((subtract(num1, num2)) * 10000000)/10000000;
    } else if (operator == "multiply") {
        removeDisplay();
        displayValue.push(multiply(num1, num2));
        input.nodeValue = Math.round((multiply(num1, num2)) * 10000000)/10000000;
    } else if (operator == "divide") {
        removeDisplay();
        if (num2 == 0) {
            displayValue = [];
            displayValue.push("ERROR x/0");
            input.nodeValue = displayValue.join("");
        } else {
        displayValue.push(divide(num1, num2));
        input.nodeValue = Math.round((divide(num1, num2)) * 10000000)/10000000;
        }
    } else if (operator == "power") {
        removeDisplay();
        displayValue.push(power(num1, num2));
        input.nodeValue = Math.round((power(num1, num2)) * 10000000)/10000000;
    }
}
//Displays number on calculater screen converted from array
let display = document.getElementById("display");
let displayValue = [];
function arrayConversion() {
    if (negativeNumber == true) {
        number = Number(displayValue.join(""));
        return -Math.abs(Math.round((number) * 10000000)/10000000);
    } else { 
        number = Number(displayValue.join(""));
        return Math.round((number) * 10000000)/10000000;
    }
}
let input = document.createTextNode(0);
display.appendChild(input);
//Stores previous input number on calculator screen
function removeDisplay() {
    input.nodeValue = num1;
    displayValue = [];
}
//Completely resets calculator
function fullClear() {
    input.nodeValue = 0;
    displayValue = [];
    num1 = "";
    num2 = "";
    operator = "";
    negativeNumber = false;
    newEquation = false;
}
//Numerical buttons
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
//Decimal button
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if (displayValue.includes(".")) {
        return;
    } else if (displayValue == 0) {
        displayValue.push(0);
        displayValue.push(".");
        input.nodeValue = displayValue.join("");
    } else {
        displayValue.push(".");
        input.nodeValue = displayValue.join("");
    }
});
    
//Toggle negative number or positive number
let negative = document.getElementById("negative");
negative.addEventListener("click", () => {
    if (negativeNumber == true) {
        displayValue.splice(0, 1);
        Math.abs(arrayConversion());
        input.nodeValue = displayValue.join("");
        return negativeNumber = false;
    } else {
        displayValue.unshift("-");
        -Math.abs(arrayConversion())
        input.nodeValue = displayValue.join("");
        return negativeNumber = true;
    }
});
//All clear button
let allClear = document.getElementById("allClear");
allClear.addEventListener("click", fullClear);
//Clears current inputed number
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    input.nodeValue = 0;
    displayValue = [];
});
//Removes last inputted value from calculator screen
let backSpace = document.getElementById("backSpace");
backSpace.addEventListener("click", () => {
    displayValue.splice(-1, 1);
    input.nodeValue = displayValue.join("");
})
//Plus operation
let plus = document.getElementById("plus");
plus.addEventListener("click", toAdd);
function toAdd() {
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
//Minus operation
let minus = document.getElementById("subtract");
minus.addEventListener("click", toSubtract);
function toSubtract() {
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
//Multiply operation
let product = document.getElementById("multiply");
product.addEventListener("click", toMultiply);
function toMultiply() {
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
//Divide operation
let quotient = document.getElementById("divide");
quotient.addEventListener("click", toDivide);
function toDivide() {
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
//Power operation
let exponent = document.getElementById("exponent");
exponent.addEventListener("click", () => {
    operator = "power";
    num1 = arrayConversion() || num1;
    negativeNumber = false;
    displayValue.push("^");
    input.nodeValue = num1 + "^";
    displayValue = [];
    num2 = "";
});
//Executes selected operation if equals button is pressed
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
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
//Executes selected operation if an operator button is pressed
function toEqual() {
    if (num2 == "") {
        return;
    } else {
        operate(operator, num1, num2);
    }
}
