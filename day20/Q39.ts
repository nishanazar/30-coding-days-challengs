//-----------Question: 39---------------------------

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(6)); // false
console.log(isPrime(5)); // true
console.log(isPrime(3)); // true
console.log(isPrime(19)); // true
console.log(isPrime(22)); // false

export {};
