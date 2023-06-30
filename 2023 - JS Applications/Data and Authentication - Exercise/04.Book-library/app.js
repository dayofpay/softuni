function solution() {
    // API Endpoint
    const apiEndpoint = "http://localhost:3030/jsonstore/collections/books/";
  
    // Current Mode [Edit, Create] - Default Create
    let selectedBookId = '';
  
    // Get "LOAD ALL BOOKS" button
    const loadBooksBtn = document.getElementById('loadBooks');
  
    // Add event listener to the button
    loadBooksBtn.addEventListener('click', loadBooks);
  
    // Get createBook button
    const createBookBtn = document.getElementById('submitBook');
  
    // Add event listener to the submit book button
    createBookBtn.addEventListener('click', createOrUpdateBook);
  
    async function loadBooks() {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const books = await response.json();
        displayBooks(books);
      } catch (error) {
        console.error('Load Books Error:', error);
      }
    }
  
    function displayBooks(books) {
      const tableBody = document.querySelector('tbody');
      tableBody.innerHTML = '';
  
      for (const bookId in books) {
        const book = books[bookId];
        const row = createTableRow(bookId, book.title, book.author);
        tableBody.appendChild(row);
      }
    }
  
    function createTableRow(bookId, title, author) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
        </td>
      `;
  
      const editButton = row.querySelector('.editButton');
      editButton.addEventListener('click', () => editBook(bookId, title, author));
  
      const deleteButton = row.querySelector('.deleteButton');
      deleteButton.addEventListener('click', () => deleteBook(bookId));
  
      return row;
    }
  
    function editBook(bookId, title, author) {
      const formTitle = document.getElementById('formTitle');
      const bookTitleInput = document.getElementsByName('title')[0];
      const bookAuthorInput = document.getElementsByName('author')[0];
      const createBookBtn = document.getElementById('submitBook');
  
      formTitle.textContent = 'Edit FORM';
      createBookBtn.textContent = 'Save';
      bookTitleInput.value = title;
      bookAuthorInput.value = author;
      selectedBookId = bookId;
    }
  
    async function deleteBook(bookId) {
      try {
        const deleteEndpoint = apiEndpoint + bookId;
        const response = await fetch(deleteEndpoint, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        loadBooks();
      } catch (error) {
        console.error('Delete Book Error:', error);
      }
    }
  
    async function createOrUpdateBook(event) {
      event.preventDefault();
  
      const title = document.getElementsByName('title')[0].value;
      const author = document.getElementsByName('author')[0].value;
  
      if (!title || !author) {
        return;
      }
  
      const bookData = { title, author };
  
      try {
        if (selectedBookId) {
          // Update existing book
          const updateEndpoint = apiEndpoint + selectedBookId;
          const response = await fetch(updateEndpoint, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
        } else {
          // Create new book
          const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
        }
  
        resetForm();
        loadBooks();
      } catch (error) {
        console.error('Create or Update Book Error:', error);
      }
    }
  
    function resetForm() {
      const formTitle = document.getElementById('formTitle');
      const createBookBtn = document.getElementById('submitBook');
      const bookTitleInput = document.getElementsByName('title')[0];
      const bookAuthorInput = document.getElementsByName('author')[0];
  
      formTitle.textContent = 'FORM';
      createBookBtn.textContent = 'Submit';
      bookTitleInput.value = '';
      bookAuthorInput.value = '';
      selectedBookId = '';
    }
  }
  
  solution();
  