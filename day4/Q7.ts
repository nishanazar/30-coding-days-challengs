//------------------------- Question 07-----------------------

function findDuplicates(num: number[]): number[] {
  const counts: { [key: number]: number } = {};
  const duplicates: number[] = [];

  // Har number ka count increase karo
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (counts[number]) {
      counts[number]++;
    } else {
      counts[number] = 1;
    }
  }

  // Duplicate numbers collect karo
  for (const number in counts) {
    if (counts[number] > 1) {
      duplicates.push(Number(number));
    }
  }

  return duplicates;
}

let duplicates = findDuplicates([1, 2, 3, 2, 4, 5, 5, 6]);
console.log(duplicates);

