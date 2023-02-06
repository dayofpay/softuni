function startWash(inputData){
    let cleanPercentage = 0;

    for(let x = 0; x <= inputData.length-1;x++){
        if(inputData[x] === 'soap'){
            cleanPercentage += 10;
        }
        else if(inputData[x] === 'water'){
            cleanPercentage+= (cleanPercentage * 0.2);
        }
        else if(inputData[x] === 'vacuum cleaner'){
            cleanPercentage+= (cleanPercentage * 0.25);
        }
        else if(inputData[x] === 'mud'){
            cleanPercentage-= (cleanPercentage * 0.1) ;
        }
    }
    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}
startWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);