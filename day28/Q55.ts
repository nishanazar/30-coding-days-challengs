//----------------Question: 55------------------------
function is_Arm_strong(num: number): boolean {
  let original_Num = num;
  let sum = 0;
  let digit_Count = 0;

  let temp = num;
  while (temp > 0) {
      digit_Count++;
      temp = Math.floor(temp / 10);
  }

  temp = num;
  while (temp > 0) {
      let last_Digit = temp % 10; 
      let power = 1;

     
      for (let i = 0; i < digit_Count; i++) {
          power *= last_Digit; 
      }

      sum += power; 
      temp = Math.floor(temp / 10);
  }
  return sum === original_Num;
};

console.log(is_Arm_strong(153)); // Output: true
console.log(is_Arm_strong(123)); // Output: false

export {}