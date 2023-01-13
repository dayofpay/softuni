function start(number,precision){
    let num = number;
    let prec = precision;

    if(prec > 15){
        prec = 15;
    }

    num = num.toFixed(prec);
    let finalResult = parseFloat(num);

    console.log(finalResult);
}
start(10.5,3);