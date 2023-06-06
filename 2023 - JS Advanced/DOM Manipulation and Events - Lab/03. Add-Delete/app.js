function addItem() {
    let getItemName = document.getElementById('newItemText').value;
    let getItemsList = document.getElementById('items');

    let newItem = document.createElement('li');
    newItem.innerText = getItemName;

    let createDeleteButton = document.createElement('a');
    createDeleteButton.textContent = "[Delete]";
    createDeleteButton.href = "#";
    createDeleteButton.addEventListener('click', deleteItem);

    newItem.appendChild(createDeleteButton);
    getItemsList.appendChild(newItem);

    function deleteItem(e) {
        let target = e.target;
        let item = target.parentElement;
        item.remove();
    }
}
