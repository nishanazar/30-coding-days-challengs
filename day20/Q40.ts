//-----------Question: 40---------------------------

function reverseNumber(num: number): number {
  
    let numStr = num.toString();
    
 
    let reversedStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    
    
    return parseInt(reversedStr, 10);
}


console.log(reverseNumber(1234)); //  4321
console.log(reverseNumber(987654321)); // 123456789 
console.log(reverseNumber(987)); // 789
console.log(reverseNumber(789)); // 987