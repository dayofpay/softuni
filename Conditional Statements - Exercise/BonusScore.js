function start(input){
    let bonus = 0.0;
    if(Number(input[0] <= 100)){
        bonus = 5;
    }
    else if(Number(input[0] > 100 && Number(input[0] < 1000))){
        bonus = Number(input[0]) * 0.2;
    }
    else if(Number(input[0] >1000)){
        bonus = Number(input[0]) * 0.1;
    }
    if(Number(input[0]) % 2 === 0){
        bonus += 1;
    }
    else if(Number(input[0]) % 5 ==0){
        bonus+=2;
    }
    console.log(bonus.toFixed(1));
    console.log((Number(input[0]) + bonus).toFixed(1));
}
start(["2703"]);