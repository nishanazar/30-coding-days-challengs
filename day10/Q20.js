//-------------Question: 20-----------------------------
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getRecord = function () {
        return { name: this.name, grade: this.grade };
    };
    return Student;
}());
var student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord());
// Output: { name: 'Alice', grade: 90 }
