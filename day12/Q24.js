"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function moveZeroes(nums) {
    var nonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (var i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}
var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
