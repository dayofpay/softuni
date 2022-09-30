function implement(input){
    let projectType = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let income = 0;
    if(projectType == "Premiere"){
        income = rows * columns * 12;
    }
    else if(projectType == "Normal"){
        income = rows * columns * 7.50;
    }
    else if(projectType == "Discount"){
        income = rows * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}
implement(["Normal","21","13"]);