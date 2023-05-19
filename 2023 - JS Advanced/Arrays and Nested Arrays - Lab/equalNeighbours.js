function start(matrixData) {
    let totalEquals = 0;
    for (let y = 0; y < matrixData.length; y++) {
      for (let z = 0; z < matrixData[y].length; z++) {
        if (z < matrixData[y].length - 1 && matrixData[y][z] === matrixData[y][z + 1]) {
          totalEquals++;
        }
        if (y < matrixData.length - 1 && matrixData[y][z] === matrixData[y + 1][z]) {
          totalEquals++;
        }
      }
    }
    console.log(totalEquals);
  }
  
  start([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
  ]);
  