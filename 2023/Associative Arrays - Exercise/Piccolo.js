function start(inputData){
    let vehicles = new Set();
    for(let x of inputData){
        let data = x.split(', ');

        if(data[0] === 'IN'){
            if(vehicles.has(data[1])){
                // Нищо
            }
            else{
                vehicles.add(data[1]);
            }
        }
        else if(data[0] === 'OUT'){
            if(vehicles.has(data[1])){
                vehicles.delete(data[1]);
            }
        }
    }
    let sortedData = Array.from(vehicles).sort((a, b) => a.localeCompare(b));

    if(vehicles.size === 0){
        console.log('Parking Lot is Empty');
    }
    else{
        for(let x of sortedData){
            console.log(x);
        }
    }
}
start(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

);