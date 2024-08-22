//-----------Question: 24-----------------* 

function moveZeroes(nums: number[]): void {
    let nonZeroIndex = 0;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

 
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]



export{}