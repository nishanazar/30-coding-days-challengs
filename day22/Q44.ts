//------------Question: 44------------------

function calculatePower(b: number, e: number): number {
  let result = 1;
  for (let i = 0; i < e; i++) {
    result *= b;
  }
  return result;
}

console.log(calculatePower(2, 3)); // 8
console.log(calculatePower(5, 0)); // 1
