function solution(number) {
    let currentNumber = number;
  
    function addFunction(value) {
      return currentNumber + value;
    }
  
    return addFunction;
  }
  

let add7 = solution(7);
console.log(add7(2)); 
console.log(add7(3)); 
  