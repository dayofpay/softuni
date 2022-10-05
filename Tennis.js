function start(input){
    let totalTour = Number(input[0]);
    let startPoints = Number(input[1]);
    let totalPoints = startPoints;
    let avaragePoints = 0;
    let percentage = 0;
    let totalWon = 0;
    for(let x = 2; x <= input.length -1 ;x++){
        if(input[x] == "W"){
            totalPoints += 2000;;
            totalWon += 1;
        }
        else if(input[x] == "F"){
            totalPoints+=1200;
        }
        else if(input[x] == "SF"){
            totalPoints+= 720;
        }
    }
    avaragePoints = (totalPoints - startPoints) / totalTour;
    percentage = (totalWon / totalTour) * 100;
    console.log(`Final points: ${(totalPoints)}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(`${(percentage).toFixed(2)}%`);
} 
start((["7",
"1200",
"SF",
"F",
"W",
"F",
"W"]));