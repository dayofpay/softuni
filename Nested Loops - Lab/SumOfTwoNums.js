function start(input){
    let combations = 0;
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magical = Number(input[2]);
    let final = true;
    for(let a = start; a <= end;a++){
        for(let b = start;b<=end;b++){
            combations++;
            if(a + b == magical){
                console.log(`Combination N:${combations} (${a} + ${b} = ${magical})`);
                final = false;
                a = end;
            }
        }
    }
    if(final){
        console.log(`${combations} combinations - neither equals ${magical}`);
    }
}
start(["88",
"888",
"1000"]);