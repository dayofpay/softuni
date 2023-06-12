function createFormatter(separator, symbol, symbolFirst, formatter) {
    return function(value) {
      return formatter(separator, symbol, symbolFirst, value);
    };
  }
  
  function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
  }
  
  let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
  console.log(dollarFormatter(5345)); // Output: $ 5345,00
  console.log(dollarFormatter(3.1429)); // Output: $ 3,14
  console.log(dollarFormatter(2.709)); // Output: $ 2,71
  