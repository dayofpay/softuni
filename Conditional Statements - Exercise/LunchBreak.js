function start(input){
    let movieName = input[0];


    let brakeLength = Number(input[1]);


    let movieLength = Number(input[2]);


    let lunchTime = movieLength / 8;


    let relaxTime = movieLength / 4;


    let remainTime = movieLength - lunchTime - relaxTime;



    if(remainTime >= brakeLength){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil((remainTime - brakeLength))} minutes free time.`);
    }
    else{
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(brakeLength - remainTime)} more minutes.`);
    }
}
start(["Teen Wolf",
"48",
"60"])
