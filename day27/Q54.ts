//---------------Question: 54----------------------------

function isPerfectSquare(n: number): boolean {
  if (n < 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
}
console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(20)); // Output: false
console.log(isPerfectSquare(25)); // Output: true
