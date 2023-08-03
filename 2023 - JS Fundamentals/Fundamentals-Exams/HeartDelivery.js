function start(inputData) {
    let heartsNeeded = inputData[0].split("@").map(Number);
    let currentPosition = 0;
    let failedCount = 0;
  
    for (let i = 1; i < inputData.length; i++) {
      if (inputData[i] === "Love!") {
        break;
      }
  
      let jumpLength = Number(inputData[i].split(" ")[1]);
      currentPosition = (currentPosition + jumpLength) % heartsNeeded.length;
      heartsNeeded[currentPosition] -= 2;
  
      if (heartsNeeded[currentPosition] < 0) {
        console.log(`Place ${currentPosition} already had Valentine's day.`);
      } else if (heartsNeeded[currentPosition] === 0) {
        console.log(`Place ${currentPosition} has Valentine's day.`);
      }
    }
  
    if (heartsNeeded.every((hearts) => hearts === 0)) {
      console.log(`Cupid's last position was ${currentPosition}.`);
      console.log("Mission was successful.");
    } else {
      failedCount = heartsNeeded.filter((hearts) => hearts !== 0).length;
      console.log(`Cupid's last position was ${currentPosition}.`);
      console.log(`Cupid has failed ${failedCount} places.`);
    }
  }
  
start(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
;

// 40/100 Judge - Трябва да поправя начина на индексация