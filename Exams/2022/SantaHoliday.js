function start(input){
    let stayTime = Number(input[0]);
    let roomType = input[1];
    let review = input[2];

    let totalNoshtuvki = stayTime-1;

    let roomForOnePersonPrice = 18;
    let apartmentPrice = 25;
    let presidentApratmentPrice = 35;
    let totalPrice = 0;
    let discount = 0;
    if(roomType === 'room for one person'){
        totalPrice = totalNoshtuvki * roomForOnePersonPrice;
    }
    else if(roomType === "apartment"){
        if(stayTime < 10){
            totalPrice = totalNoshtuvki * apartmentPrice;
            discount = (totalPrice * 30) / 100;
        }
        else if(stayTime >=10 && stayTime <=15){
            totalPrice = totalNoshtuvki * apartmentPrice;
            discount = (totalPrice * 35) / 100;
        }
        else if(stayTime >15){
            totalPrice = totalNoshtuvki * apartmentPrice;
            discount = (totalPrice * 50) / 100;
        }
    }
    else if(roomType === "president apartment"){
        if(stayTime < 10){
            totalPrice = totalNoshtuvki * presidentApratmentPrice;
            discount = (totalPrice * 10) / 100;
        }
        else if(stayTime >=10 && stayTime <=15){
            totalPrice = totalNoshtuvki * presidentApratmentPrice;
            discount = (totalPrice * 15) / 100;
        }
        else if(stayTime > 15){
            totalPrice = totalNoshtuvki * presidentApratmentPrice;
            discount = (totalPrice * 20) / 100;
        }
    }
    let finalPrice = totalPrice - discount;
    let final = 0;
    if(review === "positive"){
        final = (finalPrice * 25) / 100;
        console.log((finalPrice + final).toFixed(2));
    }
    else if(review === "negative"){
        final = (finalPrice * 10) / 100;
        console.log((finalPrice - final).toFixed(2));
    }
}
start(["12",
"room for one person",
"positive"])
