function start(inputNumber, operationOne, operationTwo, operationThree, operationFour, operationFive) {
    let operations = operationOne + "," + operationTwo + "," + operationThree + "," + operationFour + "," + operationFive;
    let theNum = Number(inputNumber);
    let actions = {
      chop: () => theNum /= 2,
      dice: () => theNum = Math.sqrt(theNum),
      spice: () => theNum++,
      bake: () => theNum *= 3,
      fillet: () => theNum *= 8 / 10,
    };
    
    for (let x of operations.split(",")) {
        if(x === "fillet"){
            actions[x]();
            console.log(theNum.toFixed(2));
        }
        else{
            actions[x]();
            console.log(theNum);
        }
    }
  }
  
  start('9', 'dice', 'spice', 'chop', 'bake',
  'fillet');
  