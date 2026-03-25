//complete this code
describe('To-Do App Tests', () => {
    beforeEach(() => {
        // Code to set up the test, such as visiting the app
        cy.visit('your-app-url'); // Replace with your app's URL
    });

    it('should get the name', () => {
        // Your test code here
        cy.get('.name-selector').should('have.text', 'Expected Name'); // Replace with your actual selector and expected text
    });
});

class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
