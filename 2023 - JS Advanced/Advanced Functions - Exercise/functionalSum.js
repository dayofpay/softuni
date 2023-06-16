function add(num) {
    let sum = num;
  
    function innerAdd(nextNum) {
      sum += nextNum;
      return innerAdd;
    }
  
    innerAdd.valueOf = function () {
      return sum;
    };
  
    return innerAdd;
  }
  
  console.log(add(1).valueOf()); // 1
  console.log(add(1)(6)(-3).valueOf()); // 4
  