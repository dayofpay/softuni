function start(input){
    let change = Number(input[0]);
    let coinsin = Math.floor(change * 100);
    let coinsCounter = 0;
    while(coinsin > 0){
        if(coinsin >= 200){
            coinsin = coinsin - 200;
            coinsCounter++;
        }
        else if(coinsin >= 100){
            coinsin = coinsin - 100;
            coinsCounter++;
        }
        else if(coinsin >= 50){
            coinsin = coinsin - 50;
            coinsCounter++;
        }
        else if(coinsin >= 20){
            coinsin = coinsin - 20;
            coinsCounter++;
        }
        else if(coinsin >= 10){
            coinsin = coinsin - 10;
            coinsCounter++;
        }
        else if(coinsin >= 5){
            coinsin = coinsin - 5;
            coinsCounter++;
        }
        else if(coinsin >= 2){
            coinsin = coinsin - 2;
            coinsCounter++;
        }
        else if(coinsin >= 1){
            coinsin = coinsin - 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
start(["1.23"]);