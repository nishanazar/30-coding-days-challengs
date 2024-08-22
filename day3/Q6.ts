//--------------------Question 6:---------------------------
function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    return null;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value > first) {
      second = first;
      first = value;
    } else if (value > second && value !== first) {
      second = value;
    }
  }

  return second === -Infinity ? null : second;
}

let result3 = findSecondLargest([1, 2, 3, 4, 5]);
console.log(result3); // Output: 4

let result4 = findSecondLargest([10, 20, 30, 15, 25]);
console.log(result4); // Output: 25

let result5 = findSecondLargest([10]);
console.log(result5); // Output: null (kyunki array mein ek hi element hai)
