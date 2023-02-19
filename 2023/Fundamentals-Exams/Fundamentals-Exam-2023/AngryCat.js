function start(prices, entryPoint, itemType) {
    let leftSum = 0;
    let rightSum = 0;
  
  // Изчисляване на щетите до лявата начална точка
    for (let i = 0; i < entryPoint; i++) {
      if (itemType === "cheap" && prices[i] < prices[entryPoint]) {
        leftSum += prices[i];
      }
      if (itemType === "expensive" && prices[i] >= prices[entryPoint]) {
        leftSum += prices[i];
      }
    }
  
  // Изчисляване на щетите до дясната начална точка
    for (let i = entryPoint + 1; i < prices.length; i++) {
      if (itemType === "cheap" && prices[i] < prices[entryPoint]) {
        rightSum += prices[i];
      }
      if (itemType === "expensive" && prices[i] >= prices[entryPoint]) {
        rightSum += prices[i];
      }
    }
  // Правим проверка коя страна има по-голяма щета
    if (leftSum >= rightSum) {
      console.log(`Left - ${leftSum}`);
    } else {
      console.log(`Right - ${rightSum}`);
    }
  }
  
start([1, 5, 1],
    1,
    "cheap");    