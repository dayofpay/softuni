import { views } from "../views/viewData.js"
export async function editBook(e) {
  let editForm = document.getElementById('edit-form');
  if (editForm === null) {
    const editFormHTML = views["homepage.edit-form"];
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.innerHTML += editFormHTML;

    editForm = document.getElementById('edit-form');
    
  document.getElementById('add-form').remove();
  }
  }