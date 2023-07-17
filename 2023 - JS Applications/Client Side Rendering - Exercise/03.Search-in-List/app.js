import { importTowns } from "./src/importTowns.js"
import { search } from "./search.js";
window.addEventListener('DOMContentLoaded',function(){
    // import all towns'
    importTowns()

    // add event listener to the search button 

    let getButton = document.querySelector('body > article:nth-child(1) > button:nth-child(3)');

    getButton.addEventListener('click',search)
})