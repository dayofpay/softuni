function start(number) {
    let average = 0;
    let modifiedNumber = number;
  
    while (average <= 5) {
      modifiedNumber = Number(String(modifiedNumber) + "9");
      average = Array.from(String(modifiedNumber), Number).reduce((a, b) => a + b) / String(modifiedNumber).length;
    }
  
    console.log(modifiedNumber);
  }

  modifyNumber(101);