function start(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      mainDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }
  
    console.log(mainDiagonalSum, secondaryDiagonalSum);
  }
  
  start([[20, 40], [10, 60]]);
  