function start(num1,num2){
    let numX = 1;
    let numB = 1;
    for(let x = 1;x<=num1;x++){
        numX*=x;
    }
    for(let b = 1;b<=num2;b++){
        numB*=b;
    }
    console.log((numX/numB).toFixed(2));
}
start(6,2);