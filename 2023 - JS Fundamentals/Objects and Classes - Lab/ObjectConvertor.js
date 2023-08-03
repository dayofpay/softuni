function start(jsonData){
    let personData = JSON.parse(jsonData);
    for(let [data,value] of Object.entries(personData)){
        console.log(`${data}: ${value}`);
    }
}
start('{"name": "George", "age": 40, "town": "Sofia"}');