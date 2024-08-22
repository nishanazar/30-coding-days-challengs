//------------------------- Question 08-----------------------

interface Student {
    name: string;
    age: number;
    marks: number;
  }
  
  function printTopStudents(student: Student[]) {
    let topStudent = [];
    for (let i = 0; i < student.length; i++) {
      if (student[i].marks > 80) {
        topStudent.push(student[i]);
      }
    }
    return topStudent;
  }
  
  const students: Student[] = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
  ];
  let result = printTopStudents(students);
  console.log(result);
  // output
  // name: 'Sara', age: 22, marks: 85
  // name: 'John', age: 21, marks: 90
  