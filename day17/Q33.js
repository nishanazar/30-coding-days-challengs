// Day 17
// ### Question 1: *Calculate the Product of Odd Numbers*
// Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input.
//  The function should calculate the product of all odd numbers in the array and return the result.
//   If there are no odd numbers, return 1.
// *Example:*
// typescript
// console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
// console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
// *Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd
// numbers are present.
//--------------Question: 33-------------------------
function productOfOdds(numbers) {
    var product = 1;
    var hasOdd = false;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 2 !== 0) {
            product *= num;
            hasOdd = true;
        }
    }
    return hasOdd ? product : 1;
}
console.log(productOfOdds([2, 3, 5, 6]));
console.log(productOfOdds([2, 4, 6, 8]));
