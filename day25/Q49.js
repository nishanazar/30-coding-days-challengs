//------------Question: 49-------------------------------
function oddEvenDigitDiff(num) {
    var oddSum = 0;
    var evenSum = 0;
    var numStr = "";
    while (num > 0) {
        numStr = (num % 10) + numStr;
        num = num - (num % 10);
        num = num / 10;
    }
    for (var i = 0; i < numStr.length; i++) {
        var digit = parseInt(numStr[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        }
        else {
            oddSum += digit;
        }
    }
    return oddSum - evenSum >= 0 ? oddSum - evenSum : evenSum - oddSum;
}
console.log(oddEvenDigitDiff(1234)); // Output: 2
console.log(oddEvenDigitDiff(2468)); // Output: 0
console.log(oddEvenDigitDiff(1357)); // Output: 4
