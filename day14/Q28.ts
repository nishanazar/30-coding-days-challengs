//------------- Question: 28 ---------------------

function isPalindrome(str: string): boolean {
  let normalizedStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }

    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      normalizedStr += String.fromCharCode(charCode);
    }
  }

  let left = 0;
  let right = normalizedStr.length - 1;

  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan")); // Output: false
console.log(isPalindrome("reciver")); // Output: false
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("not a pallir")); // Output: false
