"use strict";
//------------------Question: 58-------------------------------
function differenceBetweenLargestAndSmallestDigit(num) {
    let largestDigit = 0;
    let smallestDigit = 9;
    while (num > 0) {
        let digit = num;
        while (digit >= 10) {
            digit -= 10;
        }
        if (digit > largestDigit) {
            largestDigit = digit;
        }
        if (digit < smallestDigit) {
            smallestDigit = digit;
        }
        let temp = 0;
        let multiplier = 1;
        while (num >= 10) {
            temp += (num - digit) / 10;
            multiplier *= 10;
        }
        num = temp;
    }
    return largestDigit - smallestDigit;
}
console.log(differenceBetweenLargestAndSmallestDigit(7593)); // Output: 6
console.log(differenceBetweenLargestAndSmallestDigit(12345)); // Output: 4
