function start(inputData){
    let sourceData = new Map();
    for(let i = 0; i < inputData.length; i += 2){
        let resource = inputData[i];
        let quantity = Number(inputData[i + 1]);
        if(sourceData.has(resource)){
            let oldValue = sourceData.get(resource);
            sourceData.set(resource, oldValue + quantity);
        }
        else{
            sourceData.set(resource, quantity);
        }
    }
    for(let [resource, quantity] of sourceData){
        console.log(`${resource} -> ${quantity}`);
    }
}

start([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]    
      
    );