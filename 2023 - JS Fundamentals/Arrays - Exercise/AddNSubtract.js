function start(inputData){
    let originalArraySum = 0;
    let modifiedArraySum = 0;
    for(let x = 0;x < inputData.length;x++){
        originalArraySum+=Number(inputData[x]);
    }
    for(let x = 0;x<inputData.length;x++){
        if(Number(inputData[x] % 2 === 0)){
            inputData[x] +=x;
            modifiedArraySum+=inputData[x];
        }
        else{
            inputData[x]-=x;
            modifiedArraySum+=inputData[x];
        }
    }
    console.log(inputData);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}
start([5,15,23,56,35]);