function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }
    
    return {
        Person,
        Teacher
    }
}

let { Person, Teacher } = personAndTeacher();
let p = new Person('Pesho', 'pesho@pesho.com');
console.log(p);
