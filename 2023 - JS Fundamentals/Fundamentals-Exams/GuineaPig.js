function start(inputData){
    let foodToGrams = Number(inputData[0]) * 1000;
    let hayToGrams = Number(inputData[1]) * 1000;
    let coverToGrams = Number(inputData[2]) * 1000;
    let pigWeightToGrams = Number(inputData[3]) * 1000;

    // Food
    let food = foodToGrams;
    // Hay
    let hay = hayToGrams;
    // Cover
    let cover = coverToGrams;
    // PigWeight
    let pigWeight = pigWeightToGrams;
    for(let x = 1; x<=30;x++){
        food-=300;
        if(x % 2 === 0){
            // Изчисляване на 5% от остатъка от храната

            hay-=(food * 5) / 100;
        }
        if(x % 3 ===0){
            cover-=(pigWeight / 3);
        }
    }

    if(food > 0 && hay > 0 && cover > 0 && pigWeight > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    }
    else{
        console.log(`Merry must go to the pet store!`);
    }
}
start(["10","5","5.2","1"]);