"use strict";
// *Task:*
// Create a simple calculator that can perform addition, subtraction, multiplication, and division.
// 1. *Functional Programming Approach:*
// Write functions for each operation: add, subtract, multiply, and divide.
// Implement a function calculate that takes two numbers and an operation (as a string) and
// returns the result of the operation.
//------------- Question 11-----------------------------------
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            throw new Error("Invalid operation");
    }
}
console.log("Using Method Functional Programming:");
console.log(calculate(50, 50, "add"));
console.log(calculate(55, 50, "subtract"));
console.log(calculate(50, 5, "multiply"));
console.log(calculate(50, 10, "divide"));
class Calculate {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    calculate(a, b, operation) {
        switch (operation) {
            case "add":
                return this.add(a, b);
            case "subtract":
                return this.subtract(a, b);
            case "multiply":
                return this.multiply(a, b);
            case "divide":
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }
}
console.log("Using Method Object-Oriented Programming :");
let calculate1 = new Calculate();
console.log(calculate1.calculate(20, 5, "add"));
console.log(calculate1.calculate(20, 10, "subtract"));
console.log(calculate1.calculate(10, 5, "multiply"));
console.log(calculate1.calculate(10, 5, "divide"));
