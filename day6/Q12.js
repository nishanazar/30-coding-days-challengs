"use strict";
// *Task:*
// Given an array with mixed types of elements, separate them into different arrays based
//  on their type (number, string, boolean).
//-----------------Question 12---------------------------
let mixArray = [20, "hello", true, 50, "world", false];
let stringArray = [];
let numberArray = [];
let booleanArray = [];
for (let mix of mixArray)
    if (typeof mix === "string") {
        stringArray.push(mix);
    }
    else if (typeof mix === "number") {
        numberArray.push(mix);
    }
    else if (typeof mix === "boolean") {
        booleanArray.push(mix);
    }
console.log("String:", stringArray);
console.log("Number:", numberArray);
console.log("Boolean:", booleanArray);
