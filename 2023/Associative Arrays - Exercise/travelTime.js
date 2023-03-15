function start(inputData) {
    let offers = new Map();
  
    for (let offer of inputData) {
      let [country, town, cost] = offer.split(" > ");
  
      if (!offers.has(country)) {
        offers.set(country, new Map());
      }
  
      let townCosts = offers.get(country);
  
      if (!townCosts.has(town)) {
        townCosts.set(town, Number.MAX_SAFE_INTEGER);
      }
  
      townCosts.set(town, Math.min(townCosts.get(town), Number(cost)));
    }
  
    let sortedCountries = [...offers.keys()].sort();
  
    for (let country of sortedCountries) {
      let sortedTowns = [...offers.get(country).entries()].sort((a, b) =>
        a[1] === b[1] ? a[0].localeCompare(b[0]) : a[1] - b[1]
      );
  
      let result = `${country} -> `;
      for (let [town, cost] of sortedTowns) {
        result += `${town} -> ${cost} `;
      }
  
      console.log(result.trim());
    }
  }
  
  

start([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );