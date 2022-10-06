function start(input){
    let flower = input.shift();
    let flowerQuantity = Number(input.shift());
    let budget = Number(input.shift());
    let totalSum;
    if(flower == "Roses"){
        totalSum = flowerQuantity * 5;
        if(totalSum <= budget && flowerQuantity <80){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - totalSum).toFixed(2)} leva more.`);
        }
        else if(flowerQuantity * 5 >= budget){
            console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
        }
        else if(flowerQuantity > 80){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${budget - (flowerQuantity *(5-(5/100) * 15)).toFixed(2)} leva more.`);
        }
    }
    if(flower == "Dahlias"){
        totalSum = flowerQuantity * 3.80;
        if(totalSum >= budget){
            console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
        }else if(totalSum <= budget && flowerQuantity < 90){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - totalSum).toFixed(2)} leva more.`);
        }
        else if(flowerQuantity > 90){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - (flowerQuantity *(3.80 -(3.80/100) * 15))).toFixed(2)} leva left.`);
        }
    }
    if(flower == "Tulips"){
        totalSum = flowerQuantity * 2.80;
        if(totalSum >= budget){
            console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more`);
        }
        else if(flowerQuantity > 80){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${budget - (flowerQuantity *(2.80 -(2.80/100) * 15)).toFixed(2)} leva left.`);
        }
        else if(totalSum <= budget && flowerQuantity <80){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - totalSum).toFixed(2)} leva left.`);
        }
    }
    if(flower == "Narcissus"){
        totalSum = flowerQuantity * 3;
        if(flowerQuantity < 120){
            if(flowerQuantity *(3 + (3/100) * 15)){
                console.log(`Not enough money, you need ${Math.abs((budget - flowerQuantity *(3 + (3/100) * 15)).toFixed(2))} leva more.`);
            }
        }
        else if(flowerQuantity < 120){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(flowerQuantity *(3 + (3/100) * 15))} leva left.`);
        }
        else if(totalSum <= budget && flowerQuantity > 120){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - totalSum).toFixed(2)} leva left.`);
        }
    }
    if(flower == "Gladiolus"){
        totalSum = flowerQuantity * 2.50;
        if(flowerQuantity < 80){
            if(flowerQuantity *(2.50+(2.50/100) * 20)){
                console.log(`Not enough money, you need ${Math.abs(budget - flowerQuantity *(2.50 + (2.50/100) * 20)).toFixed(2)} leva more.`);
            }
        }
        else if(totalSum <= budget && flowerQuantity >80){
            console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${(budget - totalSum).toFixed(2)} leva left.`);
        }
    }
}

start(["Narcissus","119","360"]);