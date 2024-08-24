# 30-coding-days-challengs

### -------------------DAY 1------------------------------

Question 1: Sum of an Array .
1. Write a function named sumArray that takes an array of numbers as input.
2. The function should return the sum of all numbers in the array.
3. Ensure your function works correctly by testing it with different inputs

 Question 2: Reverse a String

Write a function named reverseString that takes a string as input.
The function should return the reversed version of the input string.
Ensure your function works correctly by testing it with different inputs

### -------------------DAY 2------------------------------ 

Question 3: First and Last Element

 Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

Requirements:
If the array has only one element, the function should return an array with that element duplicated.
Ensure the function handles arrays with a single element correctly

Question: 4 Find the Largest Number

 Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

Requirements:
The function should handle arrays with positive and negative numbers.
If the array contains only one number, return that number.
Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
Note:
This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic .

### ---------------------DAY 3------------------------------ 

---Question 5: Remove Duplicates from Array

Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed.

Requirements:
- The function should iterate through the array and check for duplicates manually.
- You can use additional arrays or variables to keep track of seen elements.
- Do not use any built-in methods like filter, reduce, or Set.

-------Question 6: Find the Second Largest Number in an Array

Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.

Requirements:
- The function should manually find the largest and second largest numbers by iterating through the array.
- You can use additional variables to keep track of the largest and second largest numbers.
- Do not use any built-in methods like sort

### ---------------------DAY 4------------------------------ 

 Question 7: Find Duplicate Numbers in an Array

Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

*Hints:*
1. Create an empty array to store the result.
2. Use a nested loop to compare each element with every other element.
3. If a duplicate is found, add it to the result array if it is not already included.

 ------Question 8: Filter Students with Marks Greater than 80

Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.

*Hints:*
1. Loop through the array of student objects.
2. Check if the marks property of each student is greater than 80.
3. If true, print the student's details

### -------------------DAY 5------------------------------ 

Question 9: Array Comparison and Manipulation (Updated)

Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:

1. *If the lengths of both arrays are the same and all elements are the same:*
   - Merge both arrays into one array.
   - Multiply all elements of the merged array to produce a single number.
   - Return the product.

2. *If the lengths of both arrays are different:*
   - Merge both arrays into one array.
   - Return the middle element of the merged array.

3. *If the lengths of both arrays are the same but elements are different:*
   - Make the elements of both arrays the same by adding corresponding elements.
   - Merge the arrays.
   - Return the sum of the elements of the resulting merged array.

*Hints:*
- Use loops to compare elements and calculate new values.
- Avoid using built-in array methods.
- Think about how to find the middle element of an array when lengths are different.

-----Question 10: Extract First Letters from String Array*
Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.

*Hints:*
- Iterate through each name in the array.
- Extract the first letter of each name without using built-in methods

### ----------------DAY 6------------------------------ 

Question 11: Simple Calculator

Create a simple calculator that can perform addition, subtraction, multiplication, and division.
1. *Functional Programming Approach:*
   - Write functions for each operation: add, subtract, multiply, and divide.
   - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.

2. *Object-Oriented Programming (OOP) Approach:*
   - Create a Calculator class with methods for each operation.
   - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.

-----Question 12: Separate Elements by Type

Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean)

### -------------------DAY 7------------------------------

Question 13: OOP Related

Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
1. Display the book details.
2. Check if the book is a recent publication (within the last 5 years).
3. Change the genre of the book.
4. Check if the book's author matches a given author name.

*Hints:*
- Use console.log to print book details in the displayDetails method.
- In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
- Update the genre property in the changeGenre method.
- In the isAuthor method, compare the author property with the given author name.

 ------Question 14: Nested Object with Interfaces
Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

*Hints:*
- Define the Address and Person interfaces with the required properties.
- Use nested loops to iterate through the people array and each person's addresses array.
- Check if the city property matches the given city in the function.
- Return the name and email of the first matching person or undefined if no match is found

### -------------------DAY 8------------------------------ 

Question 15: Exporting and Importing Multiple Functions

Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.

*Hint:*
- Use export to export the functions in the first file.
- Use named imports to bring the functions into the second file.
- Ensure that the file paths are correctly specified when importing.


-----------Question: 16
Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.

*Hint:*
- Use export to export the interface in the first file.
- Use export to export the class in the second file.
- Use named imports to bring the interface and class into the third file.
- Ensure that the file paths are correctly specified when importing

### -------------------DAY 9------------------------------

 Question 17: Implement a Stack using TypeScript

*Problem Statement:*
Implement a stack using TypeScript. The stack should have the following methods:
1. push(item: T): void - Adds an item to the top of the stack.
2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.

*Constraints:*
- Use generics to make the stack implementation type-safe.
- The stack should handle various data types (number, string, etc.).

-----Question 18: Implement a Queue using TypeScript
Implement a queue using TypeScript. The queue should have the following methods:
1. enqueue(item: T): void - Adds an item to the end of the queue.
2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.

*Constraints:*
- Use generics to make the queue implementation type-safe.
- The queue should handle various data types (number, string, etc.)
### -------------------DAY 10------------------------------ 

 Question 19: Implement a Basic Counter

Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

increment(): void - Increments the counter by 1.
decrement(): void - Decrements the counter by 1.
getValue(): number - Returns the current value of the counter.
Example Usage:

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue());   -- Output: 2
counter.decrement();
console.log(counter.getValue());   -- Output: 1

Question 20: Implement a Simple Student Record

Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:

setName(name: string): void - Sets the student's name.
setGrade(grade: number): void - Sets the student's grade.
getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
Example Usage:

const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord());   -- Output: { name: "Alice", grade: 90 } .

### -------------------DAY 11------------------------------ 

 Question 21: Merge Two Sorted Arrays
Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. You cannot use any built-in sort function
Hint:

- _Hint 1_: Start with two pointers, one at the beginning of each array.
- _Hint 2_: Compare the elements at both pointers and add the smaller element to the result array.
- _Hint 3_: Move the pointer of the array from which the element was taken.
- _Hint 4_: Repeat until all elements from both arrays are merged.

-------Question 22: Find the First Non-Repeated Character
Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. If all characters repeat, return an empty string.
Hint:

- _Hint 1_: Create an object to count the frequency of each character in the string.
- _Hint 2_: Iterate through the string and update the count for each character.
- _Hint 3_: Iterate through the string again and find the first character with a count of 1 in the object.
- _Hint 4_: If no character with a count of 1 is found, return an empty string.

### -------------------DAY 12------------------------------ 

 Question 23: Remove Duplicates from Sorted Array
You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
*Note:*
* Only return the length of the unique elements.
* Duplicate elements should be ignored.

------Question 24: Move Zeroes
You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.

*Note:*
* You must modify the array in-place.
* The relative order of the non-zero elements should remain the same.
### -------------------DAY 13------------------------------ 

 Question 25: Count Vowels in a String
*Problem Statement:*
Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
*Hints:*
1. *Loop through the string:*
   - Use a loop to iterate over each character in the string.
2. *Check for vowels:*
   - Compare each character with the vowels ('a', 'e', 'i', 'o', 'u'). Make sure to check both lowercase and uppercase vowels.
3. *Counting:*
   - Maintain a counter variable to keep track of the number of vowels found. Increment this counter each time you encounter a vowel.
4. *Return the count:*
   - After completing the loop, return the value of the counter, which represents the total number of vowels in the string.

------Question 26: Find the Missing Number in an Array
*Problem Statement:*
Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from the range 1 to n+1, where one number is missing. The function should find and return the missing number.
*Hints:*
1. *Sum Formula:*
   - Use the formula for the sum of the first n natural numbers: \(\text{Sum} = \frac{n(n+1)}{2}\). This gives you the total sum if no numbers were missing.
2. *Sum the Array:*
   - Calculate the sum of all elements present in the given array.
3. *Subtract to Find Missing Number:*
   - Subtract the sum of the elements in the array from the expected sum (calculated using the formula). The result will be the missing number.
4. *Edge Cases:*
   - Consider edge cases where the missing number might be the smallest (1) or the largest number in the range.
### -------------------DAY 14------------------------------ 

------Question 27 *Find the Maximum Sum from Two Arrays* 
Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum number from each array and return the sum of these two maximum numbers.
*Hints:*  
1. *Step 1: Write a Helper Function to Find the Maximum Value in an Array*
   - Start by creating a function findMax that takes an array of numbers as its parameter.
   - Initialize a variable (e.g., let max = array[0];) to store the first element of the array, assuming it to be the maximum.
   - Use a for loop to iterate over the remaining elements of the array.
   - During each iteration, compare the current element with max. If the current element is greater, update max.
   - After the loop, max will hold the largest number in the array. Return this value.
2. *Step 2: Apply the Helper Function to Both Arrays*
   - Use the findMax function to find the maximum value in both input arrays.
   - Store these maximum values in two separate variables.
3. *Step 3: Sum the Maximum Values*
   - Calculate the sum of the two maximum values obtained from the arrays.
   - Return the final sum.
4. *Step 4: Test with Multiple Scenarios*
   - Test the function with different arrays to ensure it correctly finds the maximum values and sums them.
By following these steps, students will have a clear path to solving the problem, allowing them to build their understanding of both array traversal and function utilization in TypeScript.

--- Question 28: *Check if a String is a Palindrome*
*Problem Statement:*  
Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward. The function should return true if the string is a palindrome and false otherwise.
*Hints:*  
1. *Step 1: Normalize the String*
   - Convert the string to lowercase to handle case sensitivity (str = str.toLowerCase();).
   - If necessary, remove non-alphanumeric characters (e.g., spaces, punctuation) to focus on the actual content.
2. *Step 2: Use Two-Pointer Technique*
   - Initialize two pointers: one at the start of the string (let left = 0;) and one at the end (let right = str.length - 1;).
   - Use a while loop to compare characters at these pointers. Continue looping until the two pointers meet in the middle.
   - If at any point the characters at left and right pointers do not match, return false.
3. *Step 3: Complete the Loop*
   - If the loop completes without finding a mismatch, the string is a palindrome. Return true.
4. *Step 4: Test with Various Strings*
   - Test the function with both palindromes and non-palindromes to verify that it works as expected.
### -------------------DAY 15------------------------------ 

 Question 29: Anagrams
Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once.
*Hints:*
*Normalize Case:*
   - Convert both strings to lowercase to ensure that the comparison is case-insensitive.
   - Traverse each character of the strings and convert uppercase characters to lowercase.
*Count Characters:*
   - Use a fixed-size data structure like an array to count the occurrences of each character in both strings. Since we're only dealing with lowercase letters, an array of size 26 (for 'a' to 'z') will suffice.
   - Initialize two arrays (or two objects with 26 keys) to keep track of character frequencies for each string.
*Compare Character Counts:*
   - After populating the frequency arrays for both strings, compare them to determine if they are identical.
   - If they match, then the two strings are anagrams; otherwise, they are not.
*Edge Cases:*
   - Check if the strings have different lengths initially. If they do, they cannot be anagrams.
   - Handle empty strings as valid anagrams of each other.

-------Question 30: Reverse Words in a Sentence
Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given sentence. For example, if the input is "Hello world", the output should be "world Hello".

*Hints:*
*Identify Word Boundaries:*
   - Traverse the sentence character by character.
   - Detect the start and end of each word by identifying spaces or the start/end of the string.
*Extract Words:*
   - Use indices to keep track of where each word starts and ends.
   - Build an array of words from these indices by manually copying characters into new strings.
*Reverse the Order of Words:*
   - After extracting the words, create a new array to hold them in reverse order.
   - Iterate through the original array of words from the end to the beginning and insert them into the new array.
*Reconstruct the Sentence:*
   - Concatenate the reversed array of words into a single string, ensuring that words are separated by spaces.
*Edge Cases:*
   - Handle multiple spaces between words by treating consecutive spaces as single separators.
   - Consider sentences with leading, trailing, or multiple spaces.
### Detailed Steps:
*Anagrams:*
*Normalize Case:*
   - Convert each character to lowercase.
   - Example: Convert "Listen" and "Silent" to "listen" and "silent".
*Count Characters:*
   - Use an array of size 26 for lowercase letters.
   - Traverse the first string and increment counts in the array for each character.
   - Traverse the second string and decrement counts in the array for each character.
   - If the array contains only zeroes after processing both strings, they are anagrams.
*Compare Counts:*
   - After processing both strings, ensure that the frequency counts match exactly.
Reverse Words in a Sentence:*
*Identify Word Boundaries:*
   - Loop through the sentence and track the start of a word when encountering a non-space character.
   - Track the end of a word when encountering a space or the end of the sentence.
*Extract Words:*
   - Use substring operations to extract words between the tracked start and end indices.
   - Store these words in an array.
*Reverse Order:*
   - Use a loop to iterate from the end of the word array to the beginning, adding each word to a new array.
*Reconstruct Sentence:*
   - Build the final string by joining words from the reversed array with spaces between them.

### -------------------DAY 16------------------------------ 

Question:31 *Sum of Even Numbers from Multiple Arrays*
You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers from each of the three arrays.
*Hint:*
- Iterate through each array and sum up only the even numbers.
- Store the sum for each array in a new array.
- Return the new array containing the sums

---- Question:32 *Concatenate Strings from Arrays*

*Problem Statement:*
You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.
*Hint:*
- Iterate through each string in the arrays, extract the first letter, and concatenate them.
- Store the concatenated result for each array in a new array.
- Return the new array containing the concatenated strings.
### -------------------DAY 17------------------------------ 

 Question 33: *Calculate the Product of Odd Numbers*
Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
*Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.

-----Question 34: *Find the Longest Word in a Sentence*
Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.

*Hint:* Split the sentence into words, compare their lengths, and return the longest one.
### -------------------DAY 18------------------------------ 

Question: 35 *Sum of Odd Numbers and Multiplication Table*
Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.

*Hint:*
1. Use a loop to iterate through the array and sum the odd numbers.
2. Use another loop to create the multiplication table for the sum.

---Question: 36 *Filter and Square Even Numbers*
Write a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.

*Hint:*
1. Use a loop or array method to filter out the even numbers.
2. Square each of the filtered numbers and store the results in a new array.
### -------------------DAY 19------------------------------ 

Question 37: Find the Maximum Difference
Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.
*Hint:*  
Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.

----- Question 38: String Character Frequency
*Problem Statement:*
Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.
*Hint:*  
Use an object to store the frequency of each character. Iterate over the string and update the count for each character
### -------------------DAY 20------------------------------ 

 Question 39: Check for Prime Number
Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

*hint:*  
- Use a loop to check divisibility from 2 up to the square root of the number.
- If the number is divisible by any of these, it is not prime.

------Question 40: Reverse a Number
Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

*Hint:*  
- Convert the number to a string, reverse the string, and then convert it back to a number.
### -------------------DAY 21------------------------------ 

Question 41: Sum of Digits
*Problem:*  
Write a function sumOfDigits that takes a number as input and returns the sum of its digits.

*Example:*  
typescript
sumOfDigits(123);   -- Output: 6 (1 + 2 + 3)
sumOfDigits(4567);   -- Output: 22 (4 + 5 + 6 + 7)
*Hint:*  
You can convert the number to a string, split it into individual digits, and then sum them up.

Question 42: Count Consonants in a String
*Problem:*  
Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).

*Example:*  
typescript
countConsonants("hello");   -- Output: 3
countConsonants("TypeScript");   -- Output: 7
*Hint:*  
Loop through the string and check each character to see if it is a consonant by excluding vowels.

### -------------------DAY 22------------------------------ 


Question 43: Count Digits in a Number
Given a number, your task is to count and return the number of digits in that number.

  -- Example usage
console.log(countDigits(12345));   -- Output: 5
console.log(countDigits(987));   -- Output: 3

------ Question 44: Calculate the Power of a Number
Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.

### -------------------DAY 23------------------------------ 


Question 45: Calculate the Factorial of a Number
Task: Write a function calculateFactorial that takes a number as input and returns its factorial.

Hint: Factorial means multiplying a number by all positive integers less than it. For example, the factorial of 5 is 5 _ 4 _ 3 _ 2 _ 1 = 120.

------ Question 46: Convert a Number to Binary (Without Using Built-in Functions)
Task: Write a function convertToBinary that takes a number as input and converts it into its binary form.

Hint: Repeatedly divide the number by 2 and note down the remainder. Join the remainders in reverse order to get the binary representation.

### -------------------DAY 24------------------------------ 

Question 47: _Generate Fibonacci Sequence_
Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
_Hint:_ Use a loop or recursion to build the sequence.

------Question 48: _Replace Vowels with Asterisks_
Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be case-insensitive.
*Hint:\* You can use a loop or a regular expression to find and replace vowels.

### -------------------DAY 25------------------------------ 

Question 49: Calculate the Difference Between the Sum of Odd and Even Digits
You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.

_Hint:_ Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.

------- Question 50: Find the Smallest Divisor of a Number (Greater than 1)
_Problem:_ You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.

_Hint:_ Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.


### -------------------DAY 26------------------------------ 

Question 51: Reverse a Number

Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.

Example:
reverseNumber(1234); // Output: 4321
reverseNumber(567);  // Output: 765

----Question 52: Find the Average of Numbers in a String

Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.

Example:
typescript
averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
averageOfNumbersInString('No numbers here!'); // Output: NaN

### -------------------DAY 27------------------------------ 

-- Question 53: Count the Number of Divisors
Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

*Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number 

-----Question 54: Check if a Number is a Perfect Square
Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.

*Hint:* Use the square root function Math.sqrt() and check if the result is an integer.