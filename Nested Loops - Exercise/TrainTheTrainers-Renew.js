function start(input){
    let judges = Number(input.shift());
    let total = 0;
    let count = 0;
    let final = 0;
    while(true){
        let projectName = input.shift();
        let rate = 0;
        if(projectName != "Finish"){
            for(let x = 0; x < judges;x++){
                rate += Number(input.shift());
                count++;
            }
            let currentTotal = rate / judges;
            final+=rate;
            console.log(`${projectName} - ${currentTotal.toFixed(2)}.`);
        }else{
            total = final / count;
            console.log(`Student's final assessment is ${(total).toFixed(2)}.`);
            break;
        }
    }
}
start(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);