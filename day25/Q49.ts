//------------Question: 49-------------------------------

function oddEvenDigitDiff(num: number): number {
  let oddSum = 0;
  let evenSum = 0;

  let numStr = "";

  while (num > 0) {
    numStr = (num % 10) + numStr;
    num = num - (num % 10);
    num = num / 10;
  }

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }
  return oddSum - evenSum >= 0 ? oddSum - evenSum : evenSum - oddSum;
}

console.log(oddEvenDigitDiff(1234)); // Output: 2
console.log(oddEvenDigitDiff(2468)); // Output: 0
console.log(oddEvenDigitDiff(1357)); // Output: 4
