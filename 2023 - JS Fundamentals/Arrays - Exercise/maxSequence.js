function init(arr) {
    let currentCount = 1;
    let maxCount = 0;
    let element = arr[0];
    let maxElement;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i-1]) {
        currentCount++;
      } else {
        if (currentCount > maxCount) {
          maxCount = currentCount;
          maxElement = element;
        }
        currentCount = 1;
        element = arr[i];
      }
    }
  
    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxElement = element;
    }
  
    let result = Array(maxCount).fill(maxElement);
    console.log(result.join(" "));
  }
  init([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);