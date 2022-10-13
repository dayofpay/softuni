function start(input){
    let index = 0;
    let budgetNeeded = Number(input[index++]);
    let savedMoney = Number(input[index++]);
    let spendDays = 0;
    let days = 0;
        for (let i = index; i < input.length; i++) {
        let action = input[i++];
        let moneyPerDay = Number(input[i]);
        days++;
 
        if (action === "spend") {
            spendDays++;
            if (spendDays === 5) {
                break;
            }
            if (moneyPerDay <= savedMoney) {
                savedMoney -= moneyPerDay;
            } else {
                savedMoney = Math.max(0, savedMoney - moneyPerDay);
            }
 
        } else {
            spendDays = 0;
            savedMoney += moneyPerDay;
        }
    }
    if (savedMoney >= budgetNeeded) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    }
}
start(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);