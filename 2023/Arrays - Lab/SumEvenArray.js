function sum(inputData){
    let evenNums = 0;

    for(let x = 0;x<=inputData.length-1;x++){
        if(Number(inputData[x]) % 2 === 0 ){
            evenNums+=Number(inputData[x]);
        }
    }
    console.log(evenNums);
}
sum(['1','2','3','4','5','6'])