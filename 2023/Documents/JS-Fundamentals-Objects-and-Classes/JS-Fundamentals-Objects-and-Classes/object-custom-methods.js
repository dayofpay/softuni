function dogSleep() {
    console.log('zzzzz......');
}

let dog = {
    name: 'Balkan',
    bark: function() {
        console.log('Wof wof');
    },
    eat: () => console.log('Yum yum'),
    sleep: dogSleep,
    // Object method notation
    play(person) {
        console.log(`${person} is playing with dog`);
    }
}

dog.run = () => {
    console.log('Dog running');
};

console.log(dog.name);
dog.bark();
dog.sleep();
dog.play('Pesho')
