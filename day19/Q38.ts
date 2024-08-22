//----------Question: 38 ------------------------------------

function charFrequency(str: string) {
  let obj: { [key: string]: number } = {};

  for (const char of str) {
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(charFrequency("miss")); // Output   { m: 1, i: 1, s: 2 }
console.log(charFrequency("Tameeri residency"));
// Output  { T: 1,a: 1, m: 1, e: 4,r: 2, i: 2,' ': 1,s: 1,d: 1,n: 1,c: 1, y: 1}
