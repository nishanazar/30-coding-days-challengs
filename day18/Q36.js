"use strict";
//-------------Question: 36-------------------
Object.defineProperty(exports, "__esModule", { value: true });
function squareEvenNumbers(numbers) {
    var squaredEvens = [];
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (num % 2 === 0) {
            squaredEvens.push(num * num);
        }
    }
    return squaredEvens;
}
var result = squareEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result); // Output: [4, 16, 36]
