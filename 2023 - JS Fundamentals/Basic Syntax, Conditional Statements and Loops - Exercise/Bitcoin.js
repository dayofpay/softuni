function init(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalMoney = 0;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;
    
    for (let i = 0; i < goldMined.length; i++) {
      let stolenGold = (i + 1) % 3 === 0 ? goldMined[i] * 0.3 : 0;
      let goldInMoney = (goldMined[i] - stolenGold) * goldPrice;
      totalMoney += goldInMoney;
      while (totalMoney >= bitcoinPrice) {
        bitcoinsBought++;
        totalMoney -= bitcoinPrice;
        if (bitcoinsBought === 1) {
          dayOfFirstBitcoin = i + 1;
        }
      }
    }
    
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
      console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
  }