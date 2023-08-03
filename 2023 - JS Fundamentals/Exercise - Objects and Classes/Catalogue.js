function start(inputData) {
    let object = {};
    for (let data of inputData) {
        let [item, price] = data.split(" : ");
        object[item] = Number(price);
    }

    let sortItems = Object.keys(object).sort((a,b)=>a.localeCompare(b));
    let gChar = "";
    for(let x of sortItems){
        let name = x;
        if(gChar !== name[0]){
            gChar = name[0];
            console.log(gChar);
        }
        
        let price = object[x];
        console.log(`  ${name}: ${price}`);
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