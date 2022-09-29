function generateInvoice(products){
    const data = {
        indexedStrings : [],
        products : [],
        prices : [],
        totalPrice : 0,
        avgIndexLength : 0,
        charLength : 0,
        char : []
    }
    for(let startIndex = 0; startIndex <=products.length-1;startIndex++){
        data.products[startIndex] = products[startIndex];
    }
    setPrice([80,140,600,2000]);
    function setPrice(price){
        for(let x =0; x<= data.products.length;x++){
            data.prices[x] = price[x];
        }
    }
    setCharLength();
    getProducts();

        function setCharLength(){
            data.avgIndexLength = data.products.join('').length / data.products.length; 
            for(let startStrIndex = 0; startStrIndex <+ (data.avgIndexLength * Math.PI) - 6;startStrIndex++){
                data.char[startStrIndex] = "-";
            }
        }
        function getProducts(){
            const getFormatedData = data.char.join('');
            console.log(getFormatedData);
            for(let setStart = 0; setStart<= data.products.length-1;setStart++){
                console.log(`${data.products[setStart]} - ${data.prices[setStart]} ЛВ`);
            }
        getTotalPrice();
    }
    function getTotalPrice(){
        for(let startPoint = 0; startPoint <= data.products.length-1;startPoint++){
            data.totalPrice += data.prices[startPoint];
        }
        const getFormatedData = data.char.join('');
        console.log(getFormatedData);
        console.log("Обща сума - " + data.totalPrice + " лв");
    }
}
generateInvoice([
    "Мишка Razer Deathadder Elite",
    "Слушалки Razer Kraken",
    "Монитор Philips",
    "Iphone 14",
]);