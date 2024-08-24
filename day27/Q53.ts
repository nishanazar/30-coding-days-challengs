//---------------Question: 53----------------------------

function countDivisors(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
console.log(countDivisors(12)); // Ouput: 6
console.log(countDivisors(7)); // Output: 2
