function calc(num){
    let toString = num.toString();
    let finalSum = 0;
    for(let x = 0;x<=toString.length -1;x++){
        finalSum += Number(toString[x]);
    }
    console.log(finalSum);
}
calc(642);