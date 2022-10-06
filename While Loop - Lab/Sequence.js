function start(input){
    let totalSum = 1;
    console.log(totalSum);
    while(2 * totalSum + 1 <= Number(input[0])){
        totalSum = totalSum * 2 + 1;
        console.log(totalSum);
    }
}
start(["17"]);