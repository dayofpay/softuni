function init(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);
    for (let num of numbers) {
      console.log(num);
    }
  }