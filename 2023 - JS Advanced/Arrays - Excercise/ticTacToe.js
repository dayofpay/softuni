function start(moveData) {
    let dashboard = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    let playerData = {
      first: "X",
      second: "O",
      current: "X",
      printDashboard: (dashboard) => {
        for (let row = 0; row < 3; row++) {
          let rowString = "";
          for (let col = 0; col < 3; col++) {
            rowString += dashboard[row][col] ? dashboard[row][col] : "false";
            if (col !== 2) {
              rowString += "\t";
            }
          }
          console.log(rowString);
        }
      }
    };
  
    let moveCount = 0;
    let gameEnded = false;
  
    for (let moveValue = 0; moveValue < moveData.length; moveValue++) {
      let rowData = moveData[moveValue].split(" ");
      let row = parseInt(rowData[0]);
      let col = parseInt(rowData[1]);
  
      if (dashboard[row][col]) {
        console.log("This place is already taken. Please choose another!");
        continue;
      }
  
      dashboard[row][col] = playerData.current;
      moveCount++;
  
      let currentPlayerWins = false;
  
      for (let i = 0; i < 3; i++) {
        if (
          dashboard[i][0] === playerData.current &&
          dashboard[i][1] === playerData.current &&
          dashboard[i][2] === playerData.current
        ) {
          currentPlayerWins = true;
          break;
        }
      }
  
      if (!currentPlayerWins) {
        for (let i = 0; i < 3; i++) {
          if (
            dashboard[0][i] === playerData.current &&
            dashboard[1][i] === playerData.current &&
            dashboard[2][i] === playerData.current
          ) {
            currentPlayerWins = true;
            break;
          }
        }
      }
  
      if (!currentPlayerWins) {
        if (
          (dashboard[0][0] === playerData.current &&
            dashboard[1][1] === playerData.current &&
            dashboard[2][2] === playerData.current) ||
          (dashboard[0][2] === playerData.current &&
            dashboard[1][1] === playerData.current &&
            dashboard[2][0] === playerData.current)
        ) {
          currentPlayerWins = true;
        }
      }
  
      if (currentPlayerWins) {
        console.log(`Player ${playerData.current} wins!`);
        playerData.printDashboard(dashboard);
        gameEnded = true;
        break;
      }
  
      playerData.current =
        playerData.current === playerData.first
          ? playerData.second
          : playerData.first;
  
      if (moveCount === 9) {
        console.log("The game ended! Nobody wins :(");
        playerData.printDashboard(dashboard);
        gameEnded = true;
        break;
      }
    }
  
    if (!gameEnded) {
      console.log("The game ended! Nobody wins :(");
      playerData.printDashboard(dashboard);
    }
  }
  
  start([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
  ]);
  