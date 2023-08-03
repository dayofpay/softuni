class Dog {
    constructor(dogName, dogBreed) {
        this.name = dogName;
        this.breed = dogBreed;
        this.lovesToEat = true;
    }

    bark() {
        console.log(`${this.name}: wof wof`);
    }
}

let firstDog = new Dog('Sharo', 'UlichnaPrevyzhodna');
let secondDog = new Dog('Balkan', 'BulgarianSheppard');

firstDog.bark();
secondDog.bark();

console.log(secondDog.lovesToEat);
