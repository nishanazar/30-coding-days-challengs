"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//----------------Question: 56------------------------
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}
console.log(lcm(15, 20)); // Output: 60
console.log(lcm(7, 5)); // Output: 35
