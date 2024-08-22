
// ---------------------- Question 1:------------------------


function reverseString1(input: string): string {
    return input.split("").reverse().join("");
  }
  
  console.log(reverseString1("hello"));



// input.split('') - String ko characters ke array mein convert karta hai.
// .reverse() - Characters ke array ko reverse karta hai.
// .join('') - Reversed characters ke array ko wapas string mein convert karta hai.