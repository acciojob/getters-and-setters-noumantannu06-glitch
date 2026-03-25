//complete this code
describe('Person Class Tests', () => {
  let person;

  beforeEach(() => {
    // This will run before each test
    person = new Person("John", 25);
  });

  it('should get the name', () => {
    expect(person.name).to.equal("John");
  });

  it('should change the age', () => {
    person.age = 30;
    expect(person.age).to.equal(30);
  });

  it('should log student studying', () => {
    const student = new Student("Alice", 22);
    cy.spy(console, 'log'); // Spy on console.log
    student.study();
    expect(console.log).to.have.been.calledWith("Alice is studying");
  });

  it('should log teacher teaching', () => {
    const teacher = new Teacher("Bob", 40);
    cy.spy(console, 'log'); // Spy on console.log
    teacher.teach();
    expect(console.log).to.have.been.calledWith("Bob is teaching");
  });
});
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
