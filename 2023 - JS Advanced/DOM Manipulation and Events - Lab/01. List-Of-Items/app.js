function addItem() {
    let getInput = document.getElementById('newItemText').value;

    let getItems = document.getElementById('items');

    let newItem = document.createElement('li');

    newItem.textContent = getInput;

    getItems.appendChild(newItem);
}