function startFight(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){

    // lostFights = изгубени битки
    // helmetPrice = Цена на каска
    // swordPrice = Цена на меч
    // shieldPrice = Цена на щит
    // armorPrice = Цена на броня
    
    let helmetCount = Math.floor(lostFights / 2);
    let swordCount = Math.floor(lostFights / 3);
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shieldCount++;
        }
    }

    for (let i = 1; i <= shieldCount; i++) {
        if (i % 2 === 0) {
            armorCount++;
        }
    }

    let expenses =
    helmetCount * helmetPrice
     + swordCount * swordPrice 
     + shieldCount * shieldPrice
     + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
startFight(7,2,3,4,5);