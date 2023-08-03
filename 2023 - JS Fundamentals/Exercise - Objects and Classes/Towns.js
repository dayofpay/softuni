function start(inputData){
    class Towns{
        constructor(town, latitude, longitude){
            this.town = town;
            this.latitude = parseFloat(latitude).toFixed(2);
            this.longitude = parseFloat(longitude).toFixed(2);
        }
    }
    for(let x = 0; x < inputData.length; x++){
        let townData = inputData[x].split(" | ");
        let townObj = new Towns(townData[0], townData[1], townData[2]);
        // console.log(JSON.stringify(townObj));
        console.log("{ town: '" + townObj.town + "', latitude: '" + townObj.latitude + "', longitude: '" + townObj.longitude + "' }");
    }
}

// start(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);


start(['Plovdiv | 136.45 | 812.575']);