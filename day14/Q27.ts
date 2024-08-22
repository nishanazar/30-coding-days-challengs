//------------- Question: 27 ---------------------

function findMax(array: number[]): number {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function findMaxSum(arr1: number[], arr2: number[]): number {
    const max1 = findMax(arr1);
    const max2 = findMax(arr2);

    return max1 + max2;
}

// Test cases
console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38
console.log(findMaxSum([1, 2, 3], [4, 5, 6])); // Output: 9