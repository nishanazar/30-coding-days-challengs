"use strict";
//------Question 15 part: 01
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
function calculateArea(width, height) {
    return width * height;
}
exports.calculateArea = calculateArea;
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}
exports.calculatePerimeter = calculatePerimeter;
