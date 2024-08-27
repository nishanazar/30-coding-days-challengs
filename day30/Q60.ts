//---------------Question: 60------------------------

function sumOfNaturalNumbers(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Example usage:
console.log(sumOfNaturalNumbers(5)); // Output: 15
console.log(sumOfNaturalNumbers(10)); // Output: 55
console.log(sumOfNaturalNumbers(25)); // Output: 325
