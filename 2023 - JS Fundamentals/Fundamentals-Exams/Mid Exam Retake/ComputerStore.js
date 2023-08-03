function start(inputData){
    let customerType = inputData[inputData.length-1];

    let priceWithoutTaxes = 0;

    let taxes = 0;

    let counter = 0;
    while(inputData[counter] !== "special" && inputData[counter] !== "regular"){
        if(Number(inputData[counter] < 1)){
            console.log('Invalid price!');
        }
        else{
            priceWithoutTaxes+=Number(inputData[counter]);
            taxes+=(inputData[counter] * 20) / 100;
        }
        counter++;
    }
    let totalPrice = priceWithoutTaxes + taxes;
    if(customerType === "special"){
        totalPrice -= (totalPrice * 10) / 100;
    }
    if(totalPrice === 0){
        console.log('Invalid order!');
    }
    else{
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    
    }
}
start([
    '-1',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);
    