function attachEvents() {
    let apiEndPoint = `http://localhost:3030/jsonstore/phonebook`;
    let getLoadButton = document.getElementById('btnLoad');
    let getCreateButton = document.getElementById('btnCreate');
    let getPhoneBook = document.getElementById('phonebook');
  
    getLoadButton.addEventListener('click', loadEvent);
    getCreateButton.addEventListener('click', createEvent);
  
    async function loadEvent(event) {
        getPhoneBook.innerHTML = ''; // Clear the contacts
      
        let loadRequestUrl = await fetch(apiEndPoint);
        let loadRequestResponse = await loadRequestUrl.json();
      
        for (let contact in loadRequestResponse) {
          let createContactElement = document.createElement('li');
          let createContactText = document.createTextNode(`${loadRequestResponse[contact].person}: ${loadRequestResponse[contact].phone}`);
          createContactElement.appendChild(createContactText);
      
          let createDeleteButton = document.createElement('button');
          createDeleteButton.classList.add('button');
          createDeleteButton.textContent = "Delete";
      
          createDeleteButton.addEventListener('click', async function () {
            let deleteRequestUrl = `${apiEndPoint}/${contact}`;
            let deleteRequestSettings = {
              method: 'DELETE'
            };
            await fetch(deleteRequestUrl, deleteRequestSettings);
      
            // Remove the corresponding contact element from the UI
            createContactElement.remove();
            createDeleteButton.remove();
          });
      
          createContactElement.appendChild(createDeleteButton);
          getPhoneBook.appendChild(createContactElement);
        }
      }
      
  
    async function createEvent(event) {
      getPhoneBook.innerHTML = ''; // Clear the contacts
  
      let getContactName = document.getElementById('person').value;
      let getContactPhone = document.getElementById('phone').value;
  
      let messageAsObject = {
        person: getContactName,
        phone: getContactPhone,
      }
  
      let requestSettings = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageAsObject)
      }
  
      await fetch(apiEndPoint, requestSettings);
  
      // Fetch and display the updated contacts after a short delay
      setTimeout(loadEvent, 500);
    }
  }
  
  attachEvents();
  