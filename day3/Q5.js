"use strict";
//--------------------Question 5:---------------------------
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a
//  new array with all duplicate elements removed.
// function removeDuplicates(numArray: number[]): number[] {
//   let newArray: number[] = [];
//   let uniqueElement: { [key: number]: boolean } = {};
//   console.log(uniqueElement);
//   for (let i = 0; i < numArray.length; i++) {
//     let value = numArray[i];
//     if (!uniqueElement[value]) {
//       uniqueElement[value] = true;
//       newArray.push(value);
//     }
//   }
//   return newArray;
// }
// let result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(result1); //[ 1, 2, 3, 4, 5 ]
// let result2 = removeDuplicates([10, 10, 20, 30, 30]);
// console.log(result2); //[ 10, 20, 30 ]
// //--------------------Question 6:---------------------------
// // Find the Second Largest Number in an Array
// // Write a TypeScript function named findSecondLargest that takes an array of numbers and returns
// //  the second largest number in the array.
// function findSecondLargest(arr: number[]) {
//  if (arr.length < 2) {
//     return null
//  }
//  let first = 0;
//  let second = 0 ;
//  for (let i = 0; i < arr.length; i++) {
//     let value = arr[i]
// if(value > first){
//     second = first
//     first = value
// // }else if 
// //  }
// // }
// let result3 = findSecondLargest([1, 2, 3, 4, 5]);
// console.log(result3);
// let result4 = findSecondLargest([10, 20, 30, 15, 25]);
// console.log(result4);
// {} , []  true
//  "";// null , undefined , "", 0  false
// if (num) {
//    console.log("1");
// }else{
//     console.log("2");
// }
// console.log("hello".toUpperCase());
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(undefined == null);
// console.log(null == 0);
// console.log(undefined == "");
// console.log(null == 0);
let data;
data = 20;
// data = "hello";
let item;
item = data;
console.log(item.toLowerCase());
