//-------------Question: 20-----------------------------

class Student {
  name: string;
  grade: number;
  setName(name: string): void {
    this.name = name;
  }
  setGrade(grade: number): void {
    this.grade = grade;
  }
  getRecord(): { name: string; grade: number } {
    return { name: this.name, grade: this.grade };
  }
}

const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord());

// Output: { name: 'Alice', grade: 90 }