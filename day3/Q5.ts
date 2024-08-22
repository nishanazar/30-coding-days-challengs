//--------------------Question 5:---------------------------
function removeDuplicates(numArray: number[]): number[] {
  let newArray: number[] = [];
  let uniqueElement: { [key: number]: boolean } = {};
  console.log(uniqueElement);

  for (let i = 0; i < numArray.length; i++) {
    let value = numArray[i];

    if (!uniqueElement[value]) {
      uniqueElement[value] = true;
      newArray.push(value);
    }
  }
  return newArray;
}

let result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result1); //[ 1, 2, 3, 4, 5 ]

let result2 = removeDuplicates([10, 10, 20, 30, 30]);
console.log(result2); //[ 10, 20, 30 ]


// // Find the Second Largest Number in an Array
// // Write a TypeScript function named findSecondLargest that takes an array of numbers and returns
// //  the second largest number in the array.

