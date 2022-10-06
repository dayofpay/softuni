function start(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let totalFishermens = Number(input.shift());
    let totalCost = 0;
    let springPrice = 3000;
    let summerPrice = 4200;
    let autumnPrice = 4200;
    let winterPrice = 2600;
    if(season == "Autumn"){
        if(totalFishermens <= 6){
            totalCost = autumnPrice - (autumnPrice * 0.10);
        }
        else if(totalFishermens >= 7 && totalFishermens <=11){
            totalCost = autumnPrice - (autumnPrice * 0.15);
        }
        else if(totalFishermens > 12){
            totalCost = autumnPrice - (autumnPrice * 0.25);
        }
    }
    if(season == "Spring"){
        if(totalFishermens <= 6){
            totalCost = springPrice - (springPrice * 0.10);
        }
        else if(totalFishermens >= 7 && totalFishermens <= 11){
            totalCost = springPrice - (springPrice * 0.15);
                
        }
        else if(totalFishermens > 12){
            totalCost = springPrice - (springPrice * 0.25);
        }
    }
    if(season == "Summer"){
        if(totalFishermens <=6){
            totalCost = summerPrice - (summerPrice * 0.10);
        }
        else if(totalFishermens >= 7 && totalFishermens <= 11){
            totalCost = summerPrice - (summerPrice * 0.15);
        }
        else if(totalFishermens > 12){
            totalCost = summerPrice - (summerPrice * 0.25);
        }
    }
    if(season == "Winter"){
        if(totalFishermens <=6){
            totalCost = winterPrice - (winterPrice * 0.10);
        }
        else if(totalFishermens >= 7 && totalFishermens <= 11){
            totalCost = winterPrice - (winterPrice * 0.15);
        }
        else if(totalFishermens > 12){
            totalCost = winterPrice - (winterPrice * 0.25);
        }
    }
    if(totalFishermens % 2 == 0 && season !=='Autumn'){
        totalCost = totalCost - (totalCost - 0.05);
    }
    let final = totalCost - budget;
    if(budget >= totalCost){
        console.log(`Yes! You have ${Math.abs(final).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${final.toFixed(2)} leva.`);
    }
}
start((["3000",
"Summer",
"11"]));