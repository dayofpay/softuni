function start(input){
    let mazniniPercent = Number(input[0]);
    let proteinsProcent = Number(input[1]);
    let vuglehidratiProcent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let totalWater = Number(input[4]);
    let gramMaznini =((totalCalories * mazniniPercent) / 100) / 9;
    let protein =((totalCalories * proteinsProcent) / 100) / 4;
    let vuglTotal =((totalCalories * vuglehidratiProcent) / 100) / 4;
    let food = gramMaznini+protein+vuglTotal;
    let perOne = totalCalories  / food;
    let water = 100 - totalWater;
    console.log(((perOne *  water) / 100).toFixed(4));
}
start(["40",
"40",
"20",
"3000",
"40"])
