function start(inputData){
    let budget = Number(inputData[0]);
    let students = Number(inputData[1]);
    let pricePerPackageOfFlour = Number(inputData[2]);
    let singleEggPrice = Number(inputData[3]);
    let singleApronPrice = Number(inputData[4]);

    let freeFlour = Math.floor(students / 5);
    let totalApronPrice = singleApronPrice * Math.ceil(students * 1.2);
    let totalEggPrice = singleEggPrice * 10 * students;
    let totalFlourPrice = pricePerPackageOfFlour * (students - freeFlour);

    let totalCost = totalApronPrice + totalEggPrice + totalFlourPrice;

    if (totalCost > budget) {
        console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);
    } else {
        console.log(`Items purchased for ${(totalCost).toFixed(2)}$.`);
    }
}

start(['50',
'2',
'1.0',
'0.10',
'10.0'])




