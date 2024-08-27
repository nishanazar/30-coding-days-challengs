
function numberToWords(num: number): string {
  const singleDigits = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num < 10) {
    return singleDigits[num];
  } else if (num < 20) {
    return teens[num - 10];
  } else {
    const tensWord = tens[Math.floor(num / 10)];
    const singleWord = singleDigits[num % 10];
    return tensWord + (singleWord !== "Zero" ? "-" + singleWord : "");
  }
}

console.log(numberToWords(55)); // Output: Forty-Five
console.log(numberToWords(8)); // Output: Eight 
console.log(numberToWords(90)); // Output: Ninety
