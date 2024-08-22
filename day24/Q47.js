//------------Question: 47-----------------------
function generateFibonacci(n) {
    var fibonacci = [];
    if (n >= 1)
        fibonacci.push(0);
    if (n >= 2)
        fibonacci.push(1);
    for (var i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
