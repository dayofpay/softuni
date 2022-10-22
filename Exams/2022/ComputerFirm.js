function start(input){
    let totalPC = Number(input[0]);
    let possibleSales = 0;
    let sales = 0;
    let rating = 0;
    let avg = 0;
    let rateCount = 0;
    for(let x = 1; x<= totalPC;x++){
        let len = input[x].length; // Дължина
        let rate = Number(input[x][len-1]); // Рейтинг
        let posSales = Number(input[x][len-3] + Number(input[x][len-2])); // Възможни продажби
        rateCount++;
        rating+=rate;
        possibleSales+=posSales;
        if(rate === 2){
            sales += (posSales * 0) / 100;
        }
        else if(rate === 3){
            sales+= (posSales * 50) / 100;
        }
        else if(rate === 4){
            sales+= (posSales * 70) / 100;
        }
        else if(rate === 5){
            sales+= (posSales * 85) / 100;
        }
        else if(rate === 6){
            sales+= (posSales * 100) / 100;
        }
    }
    avg = rating / rateCount;
    console.log(sales.toFixed(2));
    console.log(avg.toFixed(2));


}
start(["5",
"122",
"156",
"202",
"214",
"185"])