//----------Question: 22--------------------------

function firstNonRepeatedCharacter(s: string): string {
  const charCount: { [key: string]: number } = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "";
}

const s = "swiss";

console.log(firstNonRepeatedCharacter(s));
// Expected output: "w"
