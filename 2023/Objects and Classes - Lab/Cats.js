function start(inputData){
    let cats = [];
    class Cat{
        constructor(catName,age){
            console.log(`${catName}, age ${age} says Meow`);
        }
    }
    for(let x = 0; x < inputData.length;x++){
        let catData = inputData[x].split(' ');
        let name;
        let age;
        [name,age] = catData = [catData[0],catData[1]];
        cats.push(new Cat(name,age));
    }
}
start(['Candy 1', 'Poppy 3', 'Nyx 2']);