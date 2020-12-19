let num1 = "";
let num2 = "";
//Add two numbers
let add = function(num1, num2) {
    return num1 + num2;
}
//Subtract two numbers
let subtract = function(num1, num2) {
    return num1 - num2;
}
//Multiply two numbers
let multiply = function(num1, num2) {
    return num1 * num2;
}
//Divide two numbers
let divide = function(num1, num2) {
    return num1 / num2;
}
let operate = function(operator, num1, num2) {
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