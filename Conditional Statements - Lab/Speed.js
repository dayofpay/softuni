function start(input){
    let mySpeed = Number(input[0]);
    let slow = "slow";
    let avarage = "average";
    let fast = "fast";
    let ultraFast = "ultra fast";
    let extremelyFast = "extremely fast";
    if(mySpeed <= 10){
        console.log(slow);
    }
    else if(mySpeed > 10 && mySpeed <= 50){
        console.log(avarage);
    }
    else if(mySpeed > 50 && mySpeed <= 150){
        console.log(fast);
    }
    else if(mySpeed > 150 && mySpeed <= 1000){
        console.log(ultraFast);
    }
    else{
        console.log(extremelyFast);
    }
}