function getFibonator() {
    let current = 1;
    let next = 1;
  
    return function() {
      const fib = current;
      current = next;
      next = fib + current;
      return fib;
    };
  }
  let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13