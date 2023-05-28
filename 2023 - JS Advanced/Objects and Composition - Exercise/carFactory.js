function start(carData) {
    
    let engineData = {
        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        }
    }
    let getRelevantEngine = Object.values(engineData).map(engine => engine.power);
    let result = {
        model: carData.model,
        engine: {
            power: undefined,
            volume: undefined,
        },
        carriage: {
            type: carData.carriage,
            color: carData.color
        },
        wheels: Array.from({ length: 4 }, () => (carData.wheelsize % 2 === 0 ? carData.wheelsize - 1 : carData.wheelsize)),

    }
    if (getRelevantEngine.includes(carData["power"])) {
        for (let engine in engineData) {
            if (engineData[engine]['power'] === carData["power"]) {
                result.engine.power = engineData[engine]["power"];
                result.engine.volume = engineData[engine]["volume"]
            }
        }
    }
    else{
        const filteredNumbers = getRelevantEngine.filter(num => num >= carData.power);
        const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
        const closestNumber = sortedNumbers[0];
        result.engine.power = closestNumber;
        let engineList = {
            0 : "smallEngine",
            1 : "normalEngine",
            2 : "monsterEngine"
        }
        let findEngine = Object.values(engineData).map(engine => engine.power === closestNumber).lastIndexOf(true);
        let engineName = engineList[findEngine];
        result.engine.volume = engineData[engineName]["volume"];
    }
    return result;
}
console.log(start({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));