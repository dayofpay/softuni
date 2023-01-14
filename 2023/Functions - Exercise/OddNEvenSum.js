function check(num){
    let toString = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    for(let x = 0; x <= toString.length -1;x++){
        if(Number(toString[x]) % 2 === 0){
            evenSum+=Number(toString[x]);
        }
        if(Number(toString[x] % 2 !== 0)){
            oddSum+=Number(toString[x]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
check(1000435);