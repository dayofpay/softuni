function isPrime(num) {
    if (num < 2) {
        console.log(false);
    }
    let totalPrimes = 0;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log(false);
        totalPrimes++;
        break;
      }
    }
    if(totalPrimes === 0){
        console.log(true);
    }
  }
  
isPrime(8);