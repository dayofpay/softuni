function start(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let cubicMetersAvaliable = width * length * height;
    let cubicMeters = 0;
    while(Number(input[index]) != "Done"){
        
        cubicMeters += Number(input[index]);
        index++;
        if(input[index] === "Done"){
            break;
        }
        else if(cubicMetersAvaliable - cubicMeters < 0){
            console.log(`No more free space! You need ${Math.abs(cubicMetersAvaliable - cubicMeters)} Cubic meters more.`);
            break;
        }
    }
    if(cubicMetersAvaliable - cubicMeters > 0){
        console.log(`${cubicMetersAvaliable - cubicMeters} Cubic meters left.`);
    }
    }
start(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);