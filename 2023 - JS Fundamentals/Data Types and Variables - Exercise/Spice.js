function init(yield) {
    let days = 0;
    let consumedSpices=0;
    while (yield >= 100) {
        consumedSpices+=(yield-26);
        yield-=10;
        days++;
    }
    if(yield != consumedSpices){
        consumedSpices-=26;
    }

    console.log(days);
    console.log(consumedSpices);
  }
init(450);