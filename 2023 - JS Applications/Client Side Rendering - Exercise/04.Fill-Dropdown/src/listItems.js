import { makeRequest } from "../services/list.js";
export async function listItems(){
    const response = await makeRequest();


    // add items into the list

    let getContainer = document.getElementById('menu');
    for(let item in response){
        getContainer.innerHTML += `
        <option value="${response[item]._id}">${response[item].text}</option>
        `
    }
}