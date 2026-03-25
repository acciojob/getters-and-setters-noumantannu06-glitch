//complete this code
const person = new Person("John", 25);
console.log(person.name);  // "John"
person.age = 30;
console.log(person.age);  // 30

const student = new Student("John", 30);
student.study();  // "John is studying"

const teacher = new Teacher("John", 30);
teacher.teach();  // "John is teaching"

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
