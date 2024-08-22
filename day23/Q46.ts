//-------------------Question: 46 --------------------

function convertToBinary(num: number): string {
  let binary = "";
  while (num > 0) {
    const remainder = num % 2;
    binary = remainder + binary;
    num = num - remainder;
    num = num / 2;
  }
  return binary;
}

console.log(convertToBinary(10)); // Output: 1010
console.log(convertToBinary(25)); // Output: 11001