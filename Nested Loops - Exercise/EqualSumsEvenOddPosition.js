function start(input){
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let printLine = '';
    for(let x = n1; x<=n2;x++){
        let currentNum = " " + x;
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j <= currentNum.length;j++){
            let currentDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += currentDigit;
            }
            else{
                oddSum += currentDigit;
            }
        }
        if(oddSum === evenSum){
            printLine += `${x} `;

        }
    }
    console.log(printLine);
}
start(["299900",
"300000"]);