// pass value to function
let name = 'Pesho';

function changeName(name) {
    name = 'Gosho';
} 

changeName(name);
console.log(name);

console.log('pass reference to function');
// pass reference to function
let info = {
    name: 'Pesho',
    age: 20,
}

function changeInfoName(info) {
    info.name = 'gosho';
}

changeInfoName(info);
console.log(info.name);

// reference example
let numbers = [1,2,3];

let numberCopy = numbers;
numberCopy[0] = 100;

console.log(numbers);

//value example
let oldName = 'Pesho';

let newName = oldName;

newName = 'Gosho';

console.log(oldName);
