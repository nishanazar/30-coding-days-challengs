//----------Question: 22--------------------------
function firstNonRepeatedCharacter(s) {
    var charCount = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, s_2 = s; _a < s_2.length; _a++) {
        var char = s_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return "";
}
var s = "swiss";
console.log(firstNonRepeatedCharacter(s));
// Expected output: "w"
