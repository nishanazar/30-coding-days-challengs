//-------------Question:52----------------------
function averageOfNumbersInString(str) {
    var sum = 0;
    var count = 0;
    var num = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            num += str[i];
        }
        else if (num !== '') {
            sum += parseFloat(num);
            count++;
            num = '';
        }
    }
    if (num !== '') {
        sum += parseFloat(num);
        count++;
    }
    return count > 0 ? sum / count : NaN;
}
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
