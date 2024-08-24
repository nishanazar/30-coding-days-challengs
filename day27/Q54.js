//---------------Question: 54----------------------------
function isPerfectSquare(n) {
    if (n < 0) {
        return false;
    }
    var sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
}
console.log(isPerfectSquare(16)); // Output: true 
console.log(isPerfectSquare(20)); // Output: false
console.log(isPerfectSquare(25));
Input: 16;
// (4 * 4 = 16)
Input: 20;
