"use strict";
//  First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array
//  containing only the first and last elements of the input array
//--------------- Question 3:---------------------------------
function firstAndLast(newArray) {
    return newArray.length === 1
        ? [newArray[0], newArray[0]]
        : [newArray[0], newArray[newArray.length - 1]];
}
let element = firstAndLast([10, 20, 30, 40, 100]);
console.log(element);
//-------------- Question: 4-------------------------
function findLargestNumber(num) {
    if (num.length === 0) {
        return undefined;
    }
    let largeNumber = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > largeNumber) {
            largeNumber = num[i];
        }
        //   return largeNumber;
    }
    return largeNumber;
}
let findLargestNo = findLargestNumber([10, 50, 102, 305]); // Output: 305
console.log(findLargestNo);
