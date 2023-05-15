function start(inputData){
    let words = inputData.split(', ');
    let result = "";
    for(let x of words){
        for(let b of x.split(" ")){
            result += b.toUpperCase()+", ";
        }
    }
    console.log(result);
}
start('Hi, how are you?');