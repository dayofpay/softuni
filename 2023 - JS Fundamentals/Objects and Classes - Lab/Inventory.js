function start(inputData){
    let result = [];

    for(let outData of inputData){
        let [name,level,items] = outData.split(" / ");
        let heroes = {
            name : name,
            level: level,
            items: items.split(", "),
        }
        result.push(heroes);
    }
    result.sort((heroesA,heroesB) => heroesA.level -  heroesB.level);
    for(let hero of result){
        console.log("Hero: " + hero.name);
        console.log("level => " + hero.level);
        console.log("items => " + hero.items.join(", "));
    }
}
start([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ] );