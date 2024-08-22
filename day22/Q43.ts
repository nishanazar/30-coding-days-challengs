//------------Question: 43-----------------

function countDigits(num: number): number {
  return num.toString().length;
}

console.log(countDigits(12345)); //Output: 5
console.log(countDigits(987)); // Output: 3
console.log(countDigits(12345678910)); // Output: 11
console.log(countDigits(1000000000000)); // Output: 13
