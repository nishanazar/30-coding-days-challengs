//----------Question: 37------------------------------------

function findMaxDifference(arr: number[]): number {
  let min = arr[0];
  let maxDifference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > maxDifference) {
      maxDifference = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxDifference;
}

console.log(findMaxDifference([2, 7, 9, 5, 1, 3, 5])); // Output:7



export {};
