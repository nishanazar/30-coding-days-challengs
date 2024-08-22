"use strict";
//------------------------- Question 07-----------------------
function findDuplicates(num) {
    const counts = {};
    const duplicates = [];
    // Har number ka count increase karo
    for (let i = 0; i < num.length; i++) {
        const number = num[i];
        if (counts[number]) {
            counts[number]++;
        }
        else {
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
function printTopStudents(student) {
    let topStudent = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].marks > 80) {
            topStudent.push(student[i]);
        }
    }
    return topStudent;
}
const students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
let result = printTopStudents(students);
console.log(result);
// output
// name: 'Sara', age: 22, marks: 85
// name: 'John', age: 21, marks: 90
