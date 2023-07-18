import { loadData } from "./src/data.js";
import { searchUser } from "./src/data.js";
function solve() {

   // add function to the search button
   document.querySelector('#searchBtn').addEventListener('click', searchUser);

   // load data

   loadData();

}

window.addEventListener('DOMContentLoaded',solve())