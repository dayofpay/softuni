function start(input){
    let record = Number(input[0]);


    let distance = Number(input[1]);


    let speedPerMeter = Number(input[2]);

    
    let totalDistance = distance * speedPerMeter;

    
    let addTime = Math.floor((distance / 15)) * 12.50;


    let totalTime = totalDistance + addTime;


    if(record <= totalTime){c
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
    else{
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}
start(["10464",
"1500",
"20"])