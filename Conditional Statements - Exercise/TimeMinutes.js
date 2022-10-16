function start(input){
    let hour = Number(input[0]);
    let minute = Number(input[1]);
    let resHour = 0;
    let resMin = 0;
    let minutePlus = 15 + minute;
    let hasNull = false;
    if(hour === 23 && minutePlus > 59){
        resMin = minutePlus - 60;
        resHour = 0;
        if(minutePlus - 60 <= 9){
            hasNull = true;
        }
    }
    else if(hour < 23 && minutePlus > 59){
        resMin = minutePlus - 60;
        resHour = hour + 1;
        if(minutePlus - 60 <= 9){
            hasNull = true;
        }
    }
    else if(hour < 23 && minutePlus <= 59){
        resMin = minutePlus;
        resHour = hour;
    }
    else if(hour === 23 && minutePlus <=59){
        resMin = minutePlus;
        resHour = hour;
    }
    if(hasNull){
        console.log(`${resHour}:0${resMin}`);
    }
    else{
        console.log(`${resHour}:${resMin}`);
    }
}
start(["23", "44"])


