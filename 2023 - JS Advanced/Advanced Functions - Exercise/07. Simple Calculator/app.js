function calculator() {
    let num1Selector, num2Selector, resultSelector;
  
    class calulate{
        constructor(){
            function init(selector1, selector2, result) {
                num1Selector = selector1;
                num2Selector = selector2;
                resultSelector = result;
              }
            
              function add() {
                const num1 = Number(document.querySelector(num1Selector).value);
                const num2 = Number(document.querySelector(num2Selector).value);
                const result = num1 + num2;
                document.querySelector(resultSelector).value = result;
              }
            
              function subtract() {
                const num1 = Number(document.querySelector(num1Selector).value);
                const num2 = Number(document.querySelector(num2Selector).value);
                const result = num1 - num2;
                document.querySelector(resultSelector).value = result;
              }
        }

    }


    return {
      init,
      add,
      subtract
    };
  }
  