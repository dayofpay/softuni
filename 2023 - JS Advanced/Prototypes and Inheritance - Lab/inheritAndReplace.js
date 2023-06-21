function inherit() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student,
    }
}

let { Person, Teacher, Student } = inherit();
let p = new Person('Pesho', 'pesho@pesh.com');
console.log(p.toString());

let t = new Teacher('John Doe', 'john@doe.com', 'Math');
console.log(t.toString());

let s = new Student('Jane Smith', 'jane@smith.com', 'History');
console.log(s.toString());
