"use strict";
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// Examples
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript")); // Output: 2
