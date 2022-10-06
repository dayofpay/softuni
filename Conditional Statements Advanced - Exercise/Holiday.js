function start(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let summerPrice = 0;
    let winterPrice = 0;
    let destination = "";
    let place = "";
    if(budget <= 100 && season == "summer"){
        summerPrice = (budget / 100) * 30;
        destination = "Bulgaria";
        place = "Camp";
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${summerPrice.toFixed(2)}`);
    }
    else if(budget <=100 && season == "winter"){
        winterPrice = (budget / 100) * 70;
        destination = "Bulgaria";
        place = "Hotel";
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${winterPrice.toFixed(2)}`);
    }
    if(budget <= 1000 && season == "summer" && budget >100){
        summerPrice = (budget / 100) * 40;
        destination = "Balkans";
        place = "Camp"
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${summerPrice.toFixed(2)}`);
    }
    else if(budget <= 1000 && season == "winter" && budget > 100){
        winterPrice = (budget / 100) * 80;
        destination = "Balkans";
        place = "Hotel";
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${winterPrice.toFixed(2)}`);
    }
    else if(budget > 1000 && season == "winter"){
        winterPrice = (budget / 100) * 90;
        destination = "Europe";
        place = "Hotel";
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${winterPrice.toFixed(2)}`);

    }
    else if(budget > 1000 && season == "summer"){
        summerPrice = (budget / 100) * 90;
        destination = "Europe";
        place = "Hotel";
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${summerPrice.toFixed(2)}`);

    }

}
start(["678.53","winter"]);