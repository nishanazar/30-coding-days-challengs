"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.name = "Circle";
        this.radius = radius;
        this.area = this.calculateAreaCircle();
    }
    Circle.prototype.calculateAreaCircle = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
