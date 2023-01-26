function startGame(inputData){
    // Test Input Data
    // ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]

    // ((inputData[x].split("|")));
    let health = 100;
    let coins = 0;
    var input = inputData.toString();
    var items = input.split("|");
    var objectType = []
items.forEach(function(item){
    var objectData = item.split(" ");
    objectType.push({objectDatatype: objectData[0], value: objectData[1]});
});
let rooms = 0;
//console.log(objectType[0].objectDatatype);
for(let x = 0;x<objectType.length;x++){
    rooms++;
    if(objectType[x].objectDatatype ==="potion"){
        if(Number(objectType[x].value) + Number(health) > 100){
            console.log(`You healed for ${Number(100 - health)} hp.`);
            health = 100;
            console.log(`Current health: ${Number(health)} hp.`);
        }
        else{
            health+=Number(objectType[x].value);
            console.log(`You healed for ${Number(objectType[x].value)} hp.`);
            console.log(`Current health: ${Number(health)} hp.`);
        }
    }
    else if(objectType[x].objectDatatype === "chest"){
        coins+=Number(Number(objectType[x].value));
        console.log(`You found ${Number(objectType[x].value)} coins.`);
    }
    else if(objectType[x].objectDatatype !== "chest" && objectType[x].objectDatatype !== "potion"){
        if(Number(health) - Number(objectType[x].value) > 0){
            console.log(`You slayed ${objectType[x].objectDatatype}.`);
            health-=Number(objectType[x].value);
        }
        else{
            console.log(`You died! Killed by ${objectType[x].objectDatatype}.`);
            console.log(`Best room: ${rooms}`);
            return;
        }
    }
}
if(Number(health) > 0){
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${Number(health)}`);
}

}
startGame(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);