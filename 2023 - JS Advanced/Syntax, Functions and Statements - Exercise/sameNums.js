function start(num){
    // let biggest = Array.from(String(num), Number);
    // let maxnum = Math.max(...biggest);
    // console.log(maxnum === Number(String(num)[0]) ? "true"  : "false");
    // console.log(biggest.reduce((accumulator, digit) => accumulator + digit, 0));
    let x = String(num).split('');
    let nums = Array.from(String(num), Number)
    let biggestNum = (Math.max(...nums));
    let totalSum = 0;
    let c = true;
    for(let b of x){
        totalSum += Number(b);
        if(Number(b) === biggestNum){
            //c = true;
        }
        else{
            c = false;
        }
    }
    if(c){
        console.log(true);
        console.log(totalSum);
    }
    else{
        console.log(false);
        console.log(totalSum);
    }
}
start(444);