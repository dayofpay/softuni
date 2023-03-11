class Storage{
    constructor(capacity){
        this.capacity = Number(capacity);
        this.storage = [];
        this.totalCost = 0;
        this.getProducts = () => {
            return this.storage.reduce((acc, {product}) => {
                acc.push(JSON.stringify(product));
                return acc;
            }, []).join('\n');
        }
        
          
        this.addProduct = (product) =>{
            let products = Object.entries(product);
            this.storage.push({product});
            this.capacity-= products[2][1];
            this.totalCost += products[1][1] * products[2][1];
        }
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
