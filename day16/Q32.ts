// *Problem Statement:*
// You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[],
//     arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in
//     the arrays, concatenates these letters for each array, and returns a new array containing the
//     concatenated strings.

// *Example:*
// typescript
// concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])
// // ["abc", "def", "ghk"]

// concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])
// // ["sm", "sp", "gc"]

// concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk",
//     "shelf", "cabinet"])
// // ["tcl", "ccs", "dsc"]

// *Hint:*
// - Iterate through each string in the arrays, extract the first letter, and concatenate them.
// - Store the concatenated result for each array in a new array.
// - Return the new array containing the concatenated strings.

//-----------Question: 32-------------------------------
function concatenateFirstLetters(
  arr1: string[],
  arr2: string[],
  arr3: string[]
): string[] {
  const concatenate = (arr: string[]): string => {
    let result = "";
    for (const str of arr) {
      if (str.length > 0) {
        result += str[0];
      }
    }
    return result;
  };
  const concatenated1 = concatenate(arr1);
  const concatenated2 = concatenate(arr2);
  const concatenated3 = concatenate(arr3);

  return [concatenated1, concatenated2, concatenated3];
}
console.log(
  concatenateFirstLetters(
    ["apple", "banana", "cherry"],
    ["dog", "elephant", "frog"],
    ["grape", "honeydew", "kiwi"]
  )
);
