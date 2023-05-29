function start(data) {
    let products = {};
  
    for (let townData of data) {
      let [town, product, price] = townData.split(" | ");
  
      if (!products.hasOwnProperty(product)) {
        products[product] = {
          price: parseFloat(price),
          town: town,
        };
      } else {
        if (parseFloat(price) < products[product].price) {
          products[product].price = parseFloat(price);
          products[product].town = town;
        }
      }
    }
  
    for (let product in products) {
      console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
  }
  
  start([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
  ]);
  