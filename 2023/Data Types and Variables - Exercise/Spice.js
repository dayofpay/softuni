function init(yield) {
    let days = 0;
    let consumedSpices=0;
    let total = 0;
    let abandoned = false;
    while (yield >= 100) {
        if(yield >= 26){
            consumedSpices+=yield;
        }
        else{
            consumedSpices+=0;
        }
        yield-=10;
        days++;
    }
    if(yield < 100){
        abandoned = true;
    }


    if(abandoned){
        consumedSpices-=26;
    }
    total = consumedSpices - days * 26;

    console.log(days);
    console.log(total);
  }
  
init(450);