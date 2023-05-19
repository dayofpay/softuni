function start(array){
    let mainArray = array.sort((a,b) => a.localeCompare(b));
    let sortedArray = mainArray.sort((a,b) => a.length-b.length);
    for(let x of sortedArray){
        console.log(x);
    }
}
start(['alpha','beta','gamma']);