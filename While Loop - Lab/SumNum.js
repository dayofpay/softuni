function start(input){
    let number = Number(input[0]);
    let totalSum = 0;
    let index = 0;
    while(totalSum < number){
        index++;
        totalSum+=Number(input[index]);
    }
    console.log(`${totalSum}`);
}
start(["100",
"10",
"20",
"30",
"40"]);