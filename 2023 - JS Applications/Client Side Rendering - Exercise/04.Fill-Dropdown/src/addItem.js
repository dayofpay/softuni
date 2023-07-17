import { importItem } from "../services/list.js";
export function addItem(e){
    e.preventDefault()
    // get item name

    let itemName = document.querySelector('#itemText').value;

    importItem(itemName)
}