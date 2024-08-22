function areAnagrams(str1: string, str2: string): boolean {
  const normalizedStr1 = str1.toLowerCase();
  const normalizedStr2 = str2.toLowerCase();

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  const charCount1 = new Array(26).fill(0);
  const charCount2 = new Array(26).fill(0);

  const charToIndex = (char: string) => char.charCodeAt(0) - "a".charCodeAt(0);

  for (let i = 0; i < normalizedStr1.length; i++) {
    charCount1[charToIndex(normalizedStr1[i])]++;
    charCount2[charToIndex(normalizedStr2[i])]++;
  }

  for (let i = 0; i < 26; i++) {
    if (charCount1[i] !== charCount2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("hello", "world")); // false
