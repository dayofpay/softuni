function start(input){
    let goalForDay = Number(input.shift());
    let total = 0;
    let index = 0;
    let customer = 0;
    let operation =0;
    for(let x = 0; x<= input.length;x++){
        if(total >= goalForDay){
            break;
        }
        if(input[x] === "haircut"){
            if(input[x+1]==="mens"){
                total+=15;
            }
            else if(input[x+1] === "ladies"){
                total+=20;
            }
            else if(input[x+1] === "kids"){
                total+=10;
            }
        }
        if(input[x] === "color"){
            if(input[x+1] === "touch up"){
                total+=20;
            }
            else if(input[x+1] === "full color"){
                total+=30;
            }
        }
    }

    if(total >= goalForDay){
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${total}lv.`);
    }else{
        console.log(`Target not reached! You need ${(goalForDay - total)}lv. more.`);
        console.log(`Earned money: ${total}lv.`);
    }
}
start(["50",
"color",
"full color",
"haircut",
"ladies"])

