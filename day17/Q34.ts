//--------------Question: 34-------------------------

// ### Question 2: *Find the Longest Word in a Sentence*
// Write a function findLongestWord(sentence: string): string that takes a string sentence as input.
// The function should return the longest word in the sentence. If there are multiple words with the
//  same length, return the first one.

// *Example:*
// typescript
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
// console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"

// *Hint:* Split the sentence into words, compare their lengths, and return the longest one.

//--------------Question: 34-------------------------
function findLongestWord(sentence: string): string {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // quick
console.log(findLongestWord("I love coding in TypeScript")); // TypeScript
console.log(findLongestWord("This is a short sentence.")); // sentence.
