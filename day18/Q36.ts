//-------------Question: 36-------------------

function squareEvenNumbers(numbers: number[]): number[] {
  const squaredEvens: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num % 2 === 0) {
      squaredEvens.push(num * num);
    }
  }

  return squaredEvens;
}

const result = squareEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result); // Output: [4, 16, 36]






export {};
