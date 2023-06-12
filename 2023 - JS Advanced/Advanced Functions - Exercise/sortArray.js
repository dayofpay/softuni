function start(numbers, orderType) {
    if (orderType === 'asc') {
      return numbers.sort((a, b) => a - b);
    } else if (orderType === 'desc') {
      return numbers.sort((a, b) => b - a);
    }
  }
  
  start([14, 7, 17, 6, 8], 'desc');
  