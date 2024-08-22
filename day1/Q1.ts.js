"use strict";
// ---------------------- Question 1:------------------------
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15
let sum = 0;
function sumArray(num) {
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
let result = sumArray([1, 2, 3, 4, 5]);
console.log(result); //15
//---------------------Question 3: Reverse a String-----------
// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseString(input) {
    return input.split("").reverse().join("");
}
console.log(reverseString("hello"));
// input.split('') - String ko characters ke array mein convert karta hai.
// .reverse() - Characters ke array ko reverse karta hai.
// .join('') - Reversed characters ke array ko wapas string mein convert karta hai.
