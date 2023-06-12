function solve(area, vol, input) {
    const figures = JSON.parse(input);
    const results = [];
  
    for (const figure of figures) {
      const x = Number(figure.x);
      const y = Number(figure.y);
      const z = Number(figure.z);
  
      const areaValue = area.call({ x, y });
      const volumeValue = vol.call({ x, y, z });
  
      results.push({ area: areaValue, volume: volumeValue });
    }
  
    return results;
  }
  const input1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
  ]`;
  
  const result1 = solve(area, vol, input1);
  console.log(result1);
  // Output: [
  //   { area: 2, volume: 20 },
  //   { area: 49, volume: 490 },
  //   { area: 10, volume: 100 }
  // ]
  
  const input2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
  ]`;
  
  const result2 = solve(area, vol, input2);
  console.log(result2);
  // Output: [
  //   { area: 220, volume: 2200 },
  //   { area: 329, volume: 1645 },
  //   { area: 440, volume: 0 },
  //   { area: 10000, volume: 1000000 },
  //   { area: 4400, volume: 1100000 }
  // ]
    