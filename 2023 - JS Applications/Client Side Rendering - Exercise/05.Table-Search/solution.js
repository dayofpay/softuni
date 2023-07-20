import { loadData } from "./src/data.js";
import { searchUser } from "./src/data.js";


window.addEventListener('DOMContentLoaded',function(){
      // add function to the search button
      
      document.querySelector('#searchBtn').addEventListener('click', searchUser);

      // load data

      loadData();
})
