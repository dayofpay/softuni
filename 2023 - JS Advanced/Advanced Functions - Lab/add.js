function solution(number) {
    let currentNumber = number;
  
    function addFunction(value) {
      currentNumber += value;
      return currentNumber;
    }
  
    return addFunction;
  }
  
  let add5 = solution(5);
  console.log(add5(2)); // Output: 7 (5 + 2)
  console.log(add5(3)); // Output: 10 (7 + 3)