function start(input){
    let filmBudget = Number(input[0]);
    let totalStatist = Number(input[1]);
    let clothPrice = Number(input[2]) * totalStatist; 
    if(totalStatist > 150){
        clothPrice -=(clothPrice * 10)/100;
    }
    let filmDecor = (filmBudget * 10) / 100;

    let totalPrice = filmDecor + clothPrice;



    if(totalPrice <= filmBudget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - totalPrice).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(Math.abs(filmBudget-totalPrice)).toFixed(2)} leva more.`);

    }
}
start(["15437.62",
"186",
"57.99"])