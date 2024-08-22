//------------- Question: 28 ---------------------
function isPalindrome(str) {
    var normalizedStr = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode += 32;
        }
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
            normalizedStr += String.fromCharCode(charCode);
        }
    }
    var left = 0;
    var right = normalizedStr.length - 1;
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
console.log(isPalindrome("A man, a plan")); // Output: true
console.log(isPalindrome("reciver")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("not a pallir")); // Output: false
