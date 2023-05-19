function start(names){
    let editedNames = names.sort((a, b) => a.localeCompare(b));
    let iterator = 1;
    for(let name of editedNames){
        // Първи начин - console.log(editedNames.indexOf(name) + 1 + "."+name);
        console.log(`${iterator}.${name}`);
        iterator++;
    }
}
start(["John",
"Bob",
"Christina",
"Ema"]);