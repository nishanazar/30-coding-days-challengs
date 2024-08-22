//-----------Question: 40---------------------------
function reverseNumber(num) {
    var numStr = num.toString();
    var reversedStr = '';
    for (var i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    return parseInt(reversedStr, 10);
}
console.log(reverseNumber(1234)); // 
console.log(reverseNumber(987654321)); // 
console.log(reverseNumber(987)); // 
console.log(reverseNumber(789)); // 
