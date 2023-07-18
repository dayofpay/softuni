import { fetchBooks } from "../api/requests.js";
import { html, render } from 'https://unpkg.com/lit-html?module';
import { editBook } from "./editBook.js";
import { deleteBook } from "./deleteBook.js";
import { views } from "../views/viewData.js";  
export async function loadBooks(e) {
    const response = await fetchBooks();
    const books = await response.json();
    
    const editForm = document.getElementById('edit-form');
    const addForm = document.getElementById('add-form');
    
    if (editForm) {
      editForm.parentNode.removeChild(editForm);
    }
    
    addForm.style.display = 'block';
    
    const bookRows = Object.keys(books).map(book => html`
      <tr>
        <td>${books[book].title}</td>
        <td>${books[book].author}</td>
        <td>
          <button id="${book}" @click=${editBook}>Edit</button>
          <button id="${book}" @click=${deleteBook}>Delete</button>
        </td>
      </tr>
    `);
    
    const tableBody = document.querySelector('table tbody');
    render(html`${bookRows}`, tableBody);
  }
  