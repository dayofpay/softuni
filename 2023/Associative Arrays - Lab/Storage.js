function start(inputData){
    let items = new Map();
    for(let item of inputData){
        let itemData = item.split(' ');
        let itemName = itemData[0];
        let itemQuantity = Number(itemData[1]);
        if (items.has(itemName)) {
            itemQuantity += items.get(itemName);
        }
        items.set(itemName, itemQuantity);
    }
    for(let [itemName, itemQuantity] of items){
        console.log(`${itemName} -> ${itemQuantity}`);
    }
}
start(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
