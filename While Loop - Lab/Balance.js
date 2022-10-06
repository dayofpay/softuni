function start(input){
    let totalMoney = 0;
    let index = 0;
    while(Number(input[index] !== "NoMoreMoney")){
        if(Number(input[index] < 0)){
            console.log(`Invalid operation!`);
            break;
        }
        else{
            totalMoney += Number(input[index]);
            console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
            index++;
        }
    }
    console.log(`Total: ${(totalMoney).toFixed(2)}`);
}
start(["120",
"45.55",
"-150"]);