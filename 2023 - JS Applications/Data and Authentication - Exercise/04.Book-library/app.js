function solution() {
    // Api Endpoint
    const apiEndpoint = "http://localhost:3030/jsonstore/collections/books/";
  
    // Current Mode [Edit,Create] - Default Create
    let bookObj;
  
    // Get "LOAD ALL BOOKS" button
    const getLoadBooksBtn = document.getElementById('loadBooks');
  
    // Add event listener to the button
    getLoadBooksBtn.addEventListener('click', loadBookEvent);
  
    // Get createBook button
    const getCreateBookButton = document.getElementById('submitBook');
  
    // Add event listener to the submit book button
    getCreateBookButton.addEventListener('click', createOrUpdateBook);
  
    async function loadBookEvent(event) {
      changeFormText(null);
  
      const getTableBody = document.getElementsByTagName('tbody')[0];
  
      // Clear table before initialization
      getTableBody.innerHTML = '';
  
      try {
        const sendRequest = await fetch(apiEndpoint);
  
        if (!sendRequest.ok) {
          throw new Error(sendRequest.statusText);
        }
  
        const loadBooksEvent = await sendRequest.json();
  
        for (const book in loadBooksEvent) {
          const createTableItem = document.createElement('tr');
          createTableItem.innerHTML = `
            <td>${loadBooksEvent[book].title}</td>
            <td>${loadBooksEvent[book].author}</td>
            <td>
              <button class="editButton">Edit</button>
              <button class="deleteButton">Delete</button>
            </td>
          `;
  
          // Add event listener to the buttons
  
          // Edit Button
          const editButton = createTableItem.querySelector('.editButton');
          editButton.addEventListener('click', () => editBook(book));
  
          // Delete Button
          const deleteButton = createTableItem.querySelector('.deleteButton');
          deleteButton.addEventListener('click', () => deleteBook(book));
  
          getTableBody.appendChild(createTableItem);
        }
      } catch (error) {
        console.error('Load Books Error:', error);
      }
    }
  
    async function deleteBook(bookData) {
      changeFormText(null);
      const deleteEndpoint = `${apiEndpoint}${bookData}`;
  
      try {
        const sendRequest = await fetch(deleteEndpoint, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!sendRequest.ok) {
          throw new Error(sendRequest.statusText);
        }
  
        // Reload the books after successful deletion
        loadBookEvent();
      } catch (error) {
        console.error('Delete Book Error:', error);
      }
    }
  
    async function editBook(bookData) {
        const getSubmitButton = document.getElementById('submitBook');
      
        const editBookEndpoint = `${apiEndpoint}${bookData}`;
      
        try {
          const sendRequest = await fetch(editBookEndpoint);
      
          if (!sendRequest.ok) {
            throw new Error(sendRequest.statusText);
          }
      
          const book = await sendRequest.json();
          bookObj = book;
      
          // Change Title textarea
          document.getElementsByName('title')[0].value = book.title;
      
          // Change Author Textarea
          document.getElementsByName('author')[0].value = book.author;
      
          // Remove previous event listener from the submit button
          getSubmitButton.removeEventListener('click', createOrUpdateBook);
      
          // Add event listener to the submit button for updating the book
          getSubmitButton.addEventListener('click', () => createOrUpdateBook(event, bookData)); // Pass the event and bookData
      
          changeFormText('edit');
        } catch (error) {
          console.error('Edit Book Error:', error);
        }
      }
      
      
  
      async function createOrUpdateBook(event, bookData) {
        changeFormText(null);
        event.preventDefault();
      
        // Get book title
        const getBookTitle = document.getElementsByName('title')[0].value;
      
        // Get book author
        const getBookAuthor = document.getElementsByName('author')[0].value;
      
        if (getBookTitle && getBookAuthor) { // Validation
          const updatedBookData = {
            author: getBookAuthor,
            title: getBookTitle
          };
      
          try {
            let putData;
      
            if (bookObj) {
              // Update existing book
              const updateBookEndpoint = `${apiEndpoint}${bookData}`;

      
              putData = await fetch(updateBookEndpoint, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBookData),
              });
            } else {
              // Create new book
              putData = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBookData),
              });
            }
      
            if (!putData.ok) {
              throw new Error(putData.statusText);
            }
      
            // Clear form inputs after successful update
            document.getElementsByName('title')[0].value = '';
            document.getElementsByName('author')[0].value = '';
      
            // Reload the books after successful update
            loadBookEvent();
          } catch (error) {
            console.error('Create or Update Book Error:', error);
          }
        }
      }
      
      
      
  
      function changeFormText(mode) {
        const formTitle = document.getElementById('formTitle');
        const saveButton = document.getElementById('submitBook');
      
        formTitle.textContent = mode === 'edit' ? 'Edit FORM' : 'FORM';
        saveButton.innerText = mode === 'edit' ? 'Save' : 'Submit';
      }
      
  }
  
  solution();
  