function start(object){
    


    for (let [key,value] of Object.entries(object)){
        console.log(`${key} -> ${value}`);
    }
}
start(
    {
    area : 492,
    population : 12312321,
    country : "Bulgaria",
    postCode : 9300,
    }
    )