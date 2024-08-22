"use strict";
//-----------Question: 31-------------------------------
function sumEvenNumbers(arr1, arr2, arr3) {
    const sumEven = (arr) => {
        let sum = 0;
        for (const num of arr) {
            if (num % 2 === 0) {
                sum += num;
            }
        }
        return sum;
    };
    const sum1 = sumEven(arr1);
    const sum2 = sumEven(arr2);
    const sum3 = sumEven(arr3);
    return [sum1, sum2, sum3];
}
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]));
