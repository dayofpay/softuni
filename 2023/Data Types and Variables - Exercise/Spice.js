function init(yield) {
    let days = 0;
    let consumedSpices=0;
    let total = 0;
    while (yield >= 100) {
        if(yield - 26 < 26){

        }
        else{
            consumedSpices+=yield;
        }
        yield-=10;
        days++;
    }
    consumedSpices-=26;
    total = consumedSpices - (days * 26);

    console.log(days);
    console.log(total);
  }
  
init(450);