function start(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      const currentNumber = 2 * i - 1;
      console.log(currentNumber);
      sum += currentNumber;
    }
  
    console.log(`Sum: ${sum}`);
  }
  
start(5);