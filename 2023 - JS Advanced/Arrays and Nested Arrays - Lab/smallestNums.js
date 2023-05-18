function start(numberData){
    let sortedArray = numberData.sort((a,b) => a-b);
    let result = "";
    for(let x = 0; x<=1;x++){
        result+=sortedArray[x]+" ";
    }
    console.log(result);
}
start([3, 0, 10, 4, 7, 3]);