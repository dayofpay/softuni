function start(itemName,itemQuantity){
    let totalPrice = 0;
    if(itemName === "coffee"){
        totalPrice +=itemQuantity*1.50;
    }
    else if(itemName === "water"){
        totalPrice+= itemQuantity * 1.00;
    }
    else if(itemName === "coke"){
        totalPrice+= itemQuantity * 1.40;
    }
    else if(itemName === "snacks"){
        totalPrice+= itemQuantity * 2.00;
    }
    
    console.log(totalPrice.toFixed(2));
}
start("water",5);