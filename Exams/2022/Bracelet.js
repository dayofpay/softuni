function start(input){
    let moneyPerDay = Number(input[0]);
    let moneyProfitPerDay = Number(input[1]);
    let totalMoney = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoney = 5 * moneyPerDay;

    let profitMoney = 5 * moneyProfitPerDay;

    let totalSaved = (savedMoney + profitMoney) - totalMoney;

    if(totalSaved >= giftPrice){
        console.log(`Profit: ${totalSaved.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice -  totalSaved).toFixed(2)} BGN.`);
    }
}
start(["5.12",
"32.05",
"15",
"150"]);