//-----------------Question: 45 --------------------

function calculateFactorial(num: number): number {
  let factorial = 1;

  for (let i = num; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
