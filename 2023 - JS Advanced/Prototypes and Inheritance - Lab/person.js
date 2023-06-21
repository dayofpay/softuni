class Person{
    firstName;
    lastName;
    constructor(firstName,lastName) {
        this.firstName = firstName
        this.lastName = lastName;
    }
    set fullName(name){
        let [fname,lname] = name.split(' ');
        this.firstName = fname;
        this.lastName = lname;
    }
    get fullName(){
        return this.firstName + " " +this.lastName
    }
    set firstName(name){
        this.firstName = name;
    }
    set lastName(name){
        this.lastName = name;
    }
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla