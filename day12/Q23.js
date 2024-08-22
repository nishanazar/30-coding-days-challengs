//-----------Question: 23-----------------*
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    var uniqueIndex = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
}
var nums = [1, 1, 2, 2, 3, 4, 4, 5];
var leght = removeDuplicates(nums);
console.log(leght); // Output: 5
console.log(nums.slice(0, leght)); // Output: [1, 2, 3, 4, 5]
