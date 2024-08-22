//-------------Question: 35-------------------
function oddSumMultiplicationTable(numbers) {
    var sumOfOdds = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num % 2 !== 0) {
            sumOfOdds += num;
        }
    }
    var multiplicationTable = [];
    for (var i = 1; i <= 10; i++) {
        multiplicationTable.push(sumOfOdds * i);
    }
    return multiplicationTable;
}
var result = oddSumMultiplicationTable([2, 4, 3, 6, 8, 3, 7]); //13
console.log(result); // Output: [13, 26,  39,  52,  65,78, 91, 104, 117, 130]
