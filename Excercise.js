function printStrings(){
    let array = [];
    let combined = String;
    const totalStrings = {
        totalRows : 5,
        character : "*",
        startPoint : 0
    }
    array.forEach(element => {
        combined += element;
    });
    let calcIndex = totalStrings.totalRows * Math.PI;
        for(let startMulti = 0; startMulti <= calcIndex; startMulti++){ // Безкраен LOOP
        console.log(startMulti);
    }
}
printStrings();