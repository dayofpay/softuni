function start(number){
    let findTotalPercentage = number / 10;
    let percentages = "";
    for(let x=1;x<=findTotalPercentage;x++){
        percentages+="%";
    }
    if(percentages.length < 10){
        for(let x=percentages.length;x<10;x++){
            percentages+=".";
        }
    }
    if(findTotalPercentage < 10){
        console.log(`${number}% [${percentages}]`);
        console.log('Still loading...');
    }
    else{
        console.log(`${number}% Complete!`);
        console.log(`[${percentages}]`);
    }
}
start(100);  