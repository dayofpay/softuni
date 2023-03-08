function start(inputData) {
    let object = {};
    for (let data of inputData) {
        let [item, price] = data.split(" : ");
        object[item] = price;
    }
    for(let x of Object.entries(object)){
        console.log(x);
    }
}

start([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);