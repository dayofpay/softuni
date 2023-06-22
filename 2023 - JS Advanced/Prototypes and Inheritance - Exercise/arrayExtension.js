(function () {
    Array.prototype.last = function () {
      return this[this.length - 1];
    };
  
    Array.prototype.skip = function (n) {
      return this.slice(n);
    };
  
    Array.prototype.take = function (n) {
      return this.slice(0, n);
    };
  
    Array.prototype.sum = function () {
      return this.reduce((acc, curr) => acc + curr, 0);
    };
  
    Array.prototype.average = function () {
      return this.sum() / this.length;
    };
  })()
  const numbers = [1, 2, 3, 4, 5];

  console.log(numbers.last()); // Output: 5
  console.log(numbers.skip(2)); // Output: [3, 4, 5]
  console.log(numbers.take(3)); // Output: [1, 2, 3]
  console.log(numbers.sum()); // Output: 15
  console.log(numbers.average()); // Output: 3
    