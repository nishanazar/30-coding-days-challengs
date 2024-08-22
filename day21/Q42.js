"use strict";
//---------------Question: 42-----------------------------------
function countConsonants(str) {
    let consonants = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char >= "a" && char <= "z" && !"aeiou".includes(char)) {
            consonants++;
        }
    }
    return consonants;
}
console.log(countConsonants("hello world")); // Output: 7
console.log(countConsonants("TypeScript language")); // Output: 8
