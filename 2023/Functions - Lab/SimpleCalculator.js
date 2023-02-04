function start(num1,num2,operator){
        const operations = {
          multiply: (a, b) => a * b,
          divide: (a, b) => a / b,
          add: (a, b) => a + b,
          subtract: (a, b) => a - b
        };
        console.log(operations[operator](num1, num2));
      };
      
start(1,5,"add");