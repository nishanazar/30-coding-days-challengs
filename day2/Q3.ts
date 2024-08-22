//--------------- Question 3:---------------------------------

function firstAndLast(newArray: number[]) {
    return newArray.length === 1
      ? [newArray[0], newArray[0]]
      : [newArray[0], newArray[newArray.length - 1]];
  }
  let element = firstAndLast([10, 20, 30, 40, 100]);
  console.log(element);