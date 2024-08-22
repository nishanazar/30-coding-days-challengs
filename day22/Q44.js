//------------Question: 44------------------
function calculatePower(b, e) {
    var result = 1;
    for (var i = 0; i < e; i++) {
        result *= b;
    }
    return result;
}
console.log(calculatePower(2, 3)); // 8
console.log(calculatePower(5, 0)); // 1
console.log(calculatePower(10, 55)); //
