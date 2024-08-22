//------------Question: 48-----------------------
function replaceVowels(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var lowerChar = char >= "A" && char <= "Z"
            ? String.fromCharCode(char.charCodeAt(0) + 32)
            : char;
        if (lowerChar === "a" ||
            lowerChar === "e" ||
            lowerChar === "i" ||
            lowerChar === "o" ||
            lowerChar === "u") {
            result += "*";
        }
        else {
            result += char;
        }
    }
    return result;
}
console.log(replaceVowels("Hello World")); // Output: 'H*ll* W*rld'
console.log(replaceVowels("TypeScript")); // Output: 'Typ*Scr*pt'
