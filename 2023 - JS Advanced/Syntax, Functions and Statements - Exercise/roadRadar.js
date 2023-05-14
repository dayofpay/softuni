function start(currentSpeed,area){
    let limits = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential: 20
    }
    let status = undefined;
    if(currentSpeed > limits[area]){
        let overLimit = currentSpeed - limits[area];
        if(overLimit < 20){
            status = "speeding";
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limits[area]} - ${status}`);
        }
        else if(overLimit >= 21 && overLimit <= 40){
            status = "excessive speeding";
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limits[area]} - ${status}`);

        }
        else if(overLimit > 40){
            status = "reckless driving";
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limits[area]} - ${status}`);

        }
    }
    else{
        console.log(`Driving ${currentSpeed} km/h in a ${limits[area]} zone`);
    }
}
start(21,"residential");