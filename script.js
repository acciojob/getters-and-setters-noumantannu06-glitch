//complete this code
describe('Person Getters/Setters To-Do App', () => {
  beforeEach(() => {
    cy.visit('/');  // Your HTML page with classes
    cy.window().then((win) => {
      win.person = new (win as any).Person('John', 25);
    });
  });

  it('should get the name', () => {
    cy.window().its('person.name').should('eq', 'John');
  });

  it('should change age via setter', () => {
    cy.window().then((win) => {
      (win as any).person.age = 30;
      expect((win as any).person.age).to.eq(30);
    });
  });

  it('Student should study', () => {
    cy.window().then((win) => {
      const student = new (win as any).Student('Alice', 22);
      student.study();  // Check console or spy
      cy.spy(console, 'log').should('have.been.calledWith', 'Alice is studying');
    });
  });
});

class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
