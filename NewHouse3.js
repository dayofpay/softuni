function start(input){
    let flowerType = input.shift();
    let flowerQuantity = Number(input.shift());
    let budget = Number(input.shift()); 
    let totalCost;
    let rosePrice = flowerQuantity * 5;
    let dahilasPrice = flowerQuantity * 3.80;
    let tulipsPrice = flowerQuantity * 2.80;
    let narcissusPrice = flowerQuantity * 3;
    let gladioulusPrice = flowerQuantity * 2.50;
    if(flowerType == "Roses"){
        if(flowerQuantity > 80){
            totalCost = rosePrice;
        }else{
            totalCost = rosePrice;
        }
    }
    else if(flowerType == "Dahlias"){
        if(flowerQuantity > 90){
            totalCost = dahilasPrice - (dahilasPrice * 0.15);
        }else{
            totalCost = dahilasPrice;
        }
    }
    else if(flowerType == "Tulips"){
        if(flowerQuantity >80){
            totalCost = tulipsPrice - (tulipsPrice * 0.15);
        }else{
            totalCost = tulipsPrice;
        }
    }
    else if(flowerType == "Narcissus"){
        if(flowerQuantity < 120){
            totalCost = narcissusPrice * 1.15;
        }
        else{
            totalCost = narcissusPrice;
        }
    }
    else if(flowerType == "Gladiolus"){
        if(flowerQuantity <80){
            totalCost = gladioulusPrice * 1.20;
        }else{
            totalCost = gladioulusPrice;
        }
    }
    let remain = budget - totalCost;
    let nonRemain = totalCost - budget;
    if(budget < totalCost){
        console.log(`Not enough money, you need ${nonRemain.toFixed(2)} leva more.`)
    }else{
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${remain.toFixed(2)} leva left.`);
    }
}
start(["Roses","55","250"]);