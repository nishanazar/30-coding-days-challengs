"use strict";
//-------------Question: 19---------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.decrement = function () {
        this.count--;
    };
    Counter.prototype.getValue = function () {
        return this.count;
    };
    return Counter;
}());
var counter = new Counter();
counter.increment(); // 0
counter.increment(); // 1
console.log(counter.getValue()); // 2
counter.decrement(); // 2
console.log(counter.getValue()); // 1
