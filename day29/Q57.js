"use strict";
//------------------Question: 57-------------------------------
function non_Zero_Digits(num) {
    let count = 1;
    while (num > 0) {
        let digits = num % 10;
        if (digits !== 0) {
            count *= digits;
        }
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(non_Zero_Digits(4056)); // Output: 120  
console.log(non_Zero_Digits(1002)); // Output: 2
