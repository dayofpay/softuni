function start(data) {
    let rowSum = 0;
  

    for (let i = 0; i < data[0].length; i++) {
      rowSum += data[0][i];
    }
  

    for (let i = 1; i < data.length; i++) {
      let currentRowSum = 0;
  

      for (let j = 0; j < data[i].length; j++) {
        currentRowSum += data[i][j];
      }
  

      if (currentRowSum !== rowSum) {
        console.log(false);
        return;
      }
    }
  

    for (let i = 0; i < data[0].length; i++) {
      let currentColSum = 0;
  

      for (let j = 0; j < data.length; j++) {
        currentColSum += data[j][i];
      }
  

      if (currentColSum !== rowSum) {
        console.log(false);
        return;
      }
    }
  
    console.log(true);
  }
  
  start([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
  