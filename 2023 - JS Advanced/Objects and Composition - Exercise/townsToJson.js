function start(inputData) {
    let result = [];
  
    for (let startIndex = 1; startIndex < inputData.length; startIndex++) {
      let data = inputData[startIndex].split(" | ").map(element => element.replace(/\|/g, "").trim());
      result.push({
        Town: data[0],
        Latitude: Number(parseFloat(data[1]).toFixed(2)),
        Longitude: Number(parseFloat(data[2]).toFixed(2))
      });
    }
  
    console.log(JSON.stringify(result));
  }
  
  start(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Montevideo | 34.50 | 56.11 |']);
  