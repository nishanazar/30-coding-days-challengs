"use strict";
//---------------Question: 41-----------------------------------
function sumOfDigits(num) {
    const numStr = num.toString();
    let sum = 0;
    for (const char of numStr) {
        sum += Number(char);
    }
    return sum;
}
console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
console.log(sumOfDigits(38951)); // Output: 26
console.log(sumOfDigits(987654321)); // Output: 45
