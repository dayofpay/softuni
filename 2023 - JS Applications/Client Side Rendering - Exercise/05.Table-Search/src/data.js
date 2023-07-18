import { endpoints } from "../endpoints/urls.js";
import { html, render } from "https://unpkg.com/lit-html?module";


export async function loadData() {
  const users = endpoints.users;
  const getTableBody = document.querySelector('.container > tbody:nth-child(2');
  const loadUsers = await fetch(users);
  const response = await loadUsers.json();

  const rows = Object.keys(response).map(student => html`
    <tr>
      <td>${response[student].firstName}</td>
      <td>${response[student].email}</td>
      <td>${response[student].course}</td>
    </tr>
  `);

  render(html`${rows}`, getTableBody);
}


export async function searchUser(e){
    const getTableBody = document.getElementsByTagName('tr');

    const searchValue = document.querySelector('#searchField').value;
    console.log(searchValue);

    for(let startItem = 1; startItem < getTableBody.length -1;startItem++){
        getTableBody[startItem].classList.remove('select');
        console.log(getTableBody[startItem].textContent);
        if(getTableBody[startItem].textContent.includes(searchValue)){
            getTableBody[startItem].classList.add('select');
        }
    }
}