function start(inputData){
    let townData = {}
    for(let x = 0; x < inputData.length; x++){
        let splitData = inputData[x].split("<->");

        // Using Ternary
        townData.hasOwnProperty(splitData[0]) ? townData[splitData[0]] += Number(splitData[1]) : townData[splitData[0]] = Number(splitData[1]);

        // Using Object.prototype.hasOwnProperty()

        
        // if(townData.hasOwnProperty(splitData[0])){
        //     townData[splitData[0]] += Number(splitData[1]);
        // }
        // else{
        //     townData[splitData[0]] = Number(splitData[1]);
        // }
    }
    for(let data of Object.entries(townData)){
        console.log(`${data[0]}: ${data[1]}`);
    }
}
start(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);