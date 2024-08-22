//-------------- Question: 4-------------------------

function findLargestNumber(num: number[]) {
  if (num.length === 0) {
    return undefined;
  }
  let largeNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largeNumber) {
      largeNumber = num[i];
    }
    //   return largeNumber;
  }
  return largeNumber;
}

let findLargestNo = findLargestNumber([10, 50, 102, 305]); // Output: 305
console.log(findLargestNo);
