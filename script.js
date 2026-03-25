//complete this code
class Person {
            private _name: string;
            private _age: number;

            constructor(name: string, age: number) {
                this._name = name;
                this._age = age;
            }

            get name(): string {
                return this._name;
            }

            set age(age: number) {
                this._age = age;
            }

            get age(): number {
                return this._age;
            }
        }

        class Student extends Person {
            study(): void {
                console.log(`${this.name} is studying`);
                document.getElementById('output')!.innerHTML += 
                    `<div style="color: #38a169; font-weight: bold;">📚 ${this.name} is studying</div><br>`;
            }
        }

        class Teacher extends Person {
            teach(): void {
                console.log(`${this.name} is teaching`);
                document.getElementById('output')!.innerHTML += 
                    `<div style="color: #dd6b20; font-weight: bold;">📖 ${this.name} is teaching</div><br>`;
            }
        }

        // Demo functions
        function demoPerson() {
            const person = new Person("John", 25);
            document.getElementById('output')!.innerHTML = `
                <div style="color: #4299e1; font-weight: bold;">
                    👤 Person: ${person.name} (Age: ${person.age})<br>
                    🔄 Changing age to 30...<br>
                    👤 Updated: ${person.name} (Age: ${person.age})
                </div><br>
            `;
            person.age = 30;
            document.getElementById('output')!.innerHTML += `
                <div style="color: #4299e1;">
                    ✅ Getter/Setter working! Age is now ${person.age}
                </div>
            `;
        }

        function demoStudent() {
            const student = new Student("Alice", 22);
            document.getElementById('output')!.innerHTML += `
                <div style="color: #38a169; font-weight: bold;">
                    🎓 Student: ${student.name}<br>
                    📚 Calling study()...
                </div>
            `;
            student.study();
        }

        function demoTeacher() {
            const teacher = new Teacher("Bob", 40);
            document.getElementById('output')!.innerHTML += `
                <div style="color: #dd6b20; font-weight: bold;">
                    👨‍🏫 Teacher: ${teacher.name}<br>
                    📖 Calling teach()...
                </div>
            `;
            teacher.teach();
        }

        function clearOutput() {
            document.getElementById('output')!.innerHTML = 
                'Output cleared! Click any button to test the classes.';
        }
class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
