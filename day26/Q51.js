//-------------Question: 51----------------------
function reverseNumber(n) {
    var reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = n - (n % 10);
        n = n / 10;
    }
    return reversed;
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567)); // Output: 765
