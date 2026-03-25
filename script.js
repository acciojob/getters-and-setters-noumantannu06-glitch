//complete this code
const person = new Person("John", 25);
console.log(person.name);  
person.age = 30;  
console.log(person.age);  

const student = new Student("Alice", 22);
student.study();  

const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
