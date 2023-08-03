function start(stock, orderedProducts) {
    let storeObject = {};
    
    // Create the stock object
    for (let i = 0; i < stock.length; i += 2) {
      const productName = stock[i];
      const productQuantity = Number(stock[i + 1]);
      storeObject[productName] = productQuantity;
    }
  
    // Add the ordered products to the stock object
    for (let i = 0; i < orderedProducts.length; i += 2) {
      const productName = orderedProducts[i];
      const productQuantity = Number(orderedProducts[i + 1]);
      if (storeObject.hasOwnProperty(productName)) {
        storeObject[productName] += productQuantity;
      } else {
        storeObject[productName] = productQuantity;
      }
    }
  
    // Print the stock information
    for (let [product, quantity] of Object.entries(storeObject)) {
      console.log(`${product} -> ${quantity}`);
    }
  }
  
  start(
    [
      "Chips",
      "5",
      "CocaCola",
      "9",
      "Bananas",
      "14",
      "Pasta",
      "4",
      "Beer",
      "2",
    ],
    [
      "Flour",
      "44",
      "Oil",
      "12",
      "Pasta",
      "7",
      "Tomatoes",
      "70",
      "Bananas",
      "30",
    ]
  );

   // * Way two
  function start(stock,orderedProducts){
    // CHECK Stock

    let storeObject = {}
    let orderProductsObject = {}
    for(let x = 0;x< stock.length;x+=2){

        storeObject[stock[x]] = Number(stock[x+1]);

    }
    // console.log(storeObject);

    // CHECK ORDERED PRODUCTS

    for(let x = 0; x < orderedProducts.length;x+=2){
        orderProductsObject[orderedProducts[x]] = Number(orderedProducts[x+1]);;
    }

    // console.log(orderProductsObject);

    // Check If products are already in the store

    for(let [product] of Object.entries(orderProductsObject)){
        if(storeObject.hasOwnProperty(product)){
           // storeObject[product] += orderProductsObject[product];
           storeObject[product] += Number(orderProductsObject[product]);
        }else{
            storeObject[product] = Number(orderProductsObject[product]);
        }
    }

    // Print Data


    for(let [product,quantity] of Object.entries(storeObject)){
        console.log(`${product} -> ${quantity}`);
    }
    
}
start([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );