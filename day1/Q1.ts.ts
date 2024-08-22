// ---------------------- Question 1:------------------------

let sum = 0;
function sumArray(num: number[]) {
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
let result = sumArray([1, 2, 3, 4, 5]);
console.log(result); //15




