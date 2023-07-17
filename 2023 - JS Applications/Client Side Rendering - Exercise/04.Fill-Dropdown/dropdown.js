import { html, render } from 'https://unpkg.com/lit-html?module';
import { addItem } from './src/addItem.js';
import { listItems } from './src/listItems.js';
window.addEventListener('DOMContentLoaded',function(){
    // add event listener to the add button
    document.querySelector('body > article:nth-child(2) > form:nth-child(2) > input:nth-child(3)').addEventListener('click',addItem)

    // list items

    listItems();
})