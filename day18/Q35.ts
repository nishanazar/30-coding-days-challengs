//-------------Question: 35-------------------

function oddSumMultiplicationTable(numbers: number[]): number[] {
  let sumOfOdds = 0;

  for (let num of numbers) {
    if (num % 2 !== 0) {
      sumOfOdds += num;
    }
  }

  let multiplicationTable: number[] = [];

  for (let i = 1; i <= 10; i++) {
    multiplicationTable.push(sumOfOdds * i);
  }

  return multiplicationTable;
}

const result = oddSumMultiplicationTable([2, 4, 3, 6, 8, 3, 7]); //13
console.log(result); // Output: [13, 26,  39,  52,  65,78, 91, 104, 117, 130]
