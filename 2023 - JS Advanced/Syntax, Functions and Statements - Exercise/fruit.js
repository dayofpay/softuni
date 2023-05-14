function start(fruitType,fruitWeight,fruitPrice){
    let weightToKg = fruitWeight / 1000;
    let calc = (weightToKg * fruitPrice).toFixed(2);

    console.log(`I need $${calc} to buy ${weightToKg.toFixed(2)} kilograms ${fruitType}.`);
}

start('orange', 2500, 1.80);