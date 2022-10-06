function start(input){
    let flowerType = input.shift();
    let flowerQuantity = Number(input.shift());
    let budget = Number(input.shift());
    let cost = 0;
    let flowerPrice = 0;
    switch(flowerType){
        case "Roses":
            flowerPrice = 5.0;
            break;
        case "Dahilas":
            flowerPrice = 3.80;
            break;
        case "Tulips":
            flowerPrice = 2.80;
            break;
        case "Narcissus":
            flowerPrice = 3.0;
            break;
        case "Gladiolus":
            flowerPrice = 2.50;
            break;
    }
    cost = flowerQuantity * flowerPrice;
    if (flowerType == "Roses" && flowerQuantity > 80)
    {
            cost = cost - (cost * 0.1);
    }
    else if (flowerType == "Dahlias" && flowerQuantity > 90)
    { 
            cost = cost - (cost * 0.15);
    }
    else if (flowerType == "Tulips" && flowerQuantity > 80)
    {
            cost = cost - (cost * 0.15);
    }
    else if (flowerType == "Narcissus" && flowerQuantity < 120)
    {
            cost = cost + (cost * 0.15);
    }
    else if (flowerType == "Gladiolus" && flowerQuantity < 80)
    {
            cost = cost + (cost * 0.2);
    }
    if (budget > cost)
    {
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${Math.abs(budget - cost.toFixed(2))} leva left.`);
    }
    else
    {
        console.log(`Not enough money, you need ${Math.abs(budget - cost).toFixed(2)} leva more.`);
    }
}
start(["Roses","120","64"]);