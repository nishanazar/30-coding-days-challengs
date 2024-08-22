//------------Question: 50-------------------------------
function smallestDivisor(num) {
    for (var i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i;
        }
    }
    return num;
}
console.log(smallestDivisor(15)); // Output: 3
console.log(smallestDivisor(12)); // Output: 2
console.log(smallestDivisor(7)); // Output: 7
