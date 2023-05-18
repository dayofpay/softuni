function start(dataNumbers){
    let numbers =[];
    for(let x =0; x < dataNumbers.length; x++){
        if(x % 2 === 0){

        }
        else{
            numbers.push(dataNumbers[x] * 2);
        }
    }
    return numbers.reverse();
}
console.log(start([3, 0, 10, 4, 7, 3]));