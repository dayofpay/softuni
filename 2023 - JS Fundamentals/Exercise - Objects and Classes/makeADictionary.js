function start(inputData){
    let items = {};
    for(let line of inputData){
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        items[keys[0]] = obj[keys[0]];
    }

    let sortKey = Object.keys(items).sort((keyA,keyB) => keyA.localeCompare(keyB));

    for(let key of sortKey){
        console.log(`Term: ${key} => Definition: ${items[key]}`);
    }
}
start(
    [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );