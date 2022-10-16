function start(input){
    let holidayPrice = Number(input[0]);
    let totalPuzzles = Number(input[1]);
    let puzzlePrice = 2.60;
    let talkingDolls = Number(input[2]);
    let dollsPrice = 3;
    let bears = Number(input[3]);
    let bearsPrice = 4.10;
    let totalMinions = Number(input[4]);
    let minionPrice = 8.20;
    let totalTrucks = Number(input[5]);
    let truckPrice = 2;
    let discount = 0;
    let rentPrice = 0;
    let profit= 0;
    let totalPrice = (totalPuzzles * puzzlePrice) + (talkingDolls * dollsPrice) + (bears * bearsPrice) + (totalMinions * minionPrice) + (totalTrucks *truckPrice);
    let totalToys = (totalPuzzles + talkingDolls + bears + totalMinions + totalTrucks);
    if(totalToys >= 50){
        discount = (totalPrice * 25) / 100;
        totalPrice -= discount;
        rentPrice = (totalPrice * 10) / 100;
        profit = totalPrice - rentPrice;
    }
    else{
        rentPrice = (totalPrice * 10) / 100;
        profit = totalPrice - rentPrice;        
    }


    if(profit >= holidayPrice){
        console.log(`Yes! ${(profit - holidayPrice).toFixed(2)} lv left.`);
    }
    else{
        console.log(`Not enough money! ${(holidayPrice - profit).toFixed(2)} lv needed.`);
    }
}
start(["320",
"8",
"2",
"5",
"5",
"1"])