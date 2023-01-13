function start(number){
    let theNumber = Number(number);
    let highest = 0;

    if((theNumber % 2) == 0){
        highest = 2;
    }
    if((theNumber % 3) == 0){
        highest = 3;
    }
    if((theNumber % 6) == 0){
        highest = 6;
    }
    if((theNumber % 7) == 0){
        highest = 7;
    }
    if((theNumber % 10) == 0){
        highest = 10;
    }

    if(!highest != 0){
        console.log('Not divisible');
    }
    else{
        console.log(`The number is divisible by ${highest}`);
    }
}
start(30);