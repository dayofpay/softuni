function attachEvents() {


    let getSubmitButton = document.getElementById('submit');

    // add event listener to the submit button

    getSubmitButton.addEventListener('click', submitEvent);

    async function submitEvent(event) {

        // Get Author

        let user = document.getElementsByName('author')[0].value;
        // Get User Message


        let userMessage = document.getElementsByName('content')[0].value;

        let messageAsObject = {
            author: user,
            content: userMessage,
        }

        let requestSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageAsObject)
        }

        // Send Post Data
        await fetch('http://localhost:3030/jsonstore/messenger', requestSettings);


    }

    // add event listener to the refresh button


    let getRefreshButton = document.getElementById('refresh');

    getRefreshButton.addEventListener('click', refreshEvent);
    async function refreshEvent(event) {
        let requestSettings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        let messages = await fetch(
            'http://localhost:3030/jsonstore/messenger',
            requestSettings
        );
        let messageData = await messages.json();
        let textarea = document.getElementById('messages');

        textarea.value = '';

        for (let msg in messageData) {
            let author = messageData[msg].author;
            let message = messageData[msg].content;
            let createMessage = `${author}: ${message}\n`;
            textarea.value += createMessage;
        }
    }


}

attachEvents();