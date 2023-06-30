// check if user is logged
let navEmail = document.getElementsByClassName('email')[0];
let buttons = document.getElementsByTagName("button");
// remove catches container
let getCatches = document.getElementsByClassName("catch");
for (let catchN = 0; catchN < getCatches.length; catchN++) {
    getCatches[catchN].remove();
}

try {
    if (sessionStorage.getItem('accessToken') !== null) {
        // change user navigation
        navEmail.innerHTML = `
        Welcome, <span>${sessionStorage.getItem('auth_user')}</span></p>
        `;
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("load")) {
                buttons[i].disabled = false;
                buttons[i].addEventListener('click',loadData)
            }
        }

        // enable add catch button

        document.getElementsByClassName('add')[0].disabled = false;
    } else {
        navEmail.innerHTML = `
        Welcome, <span>guest</span></p>
        `;
        // disable all buttons except the load button

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("load")) {
                buttons[i].disabled = false;
                buttons[i].addEventListener('click',loadData)
            } else {
                buttons[i].disabled = true;
            }
        }
    }
} catch (error) {
    console.error('Error:', error);
    // Handle error and display appropriate error message
}

function unAuthorizedActions() {
    console.log(true);
}

async function loadData(event) {

    try {
        let url = 'http://localhost:3030/data/catches';
        let response = await fetch(url);

        if (response.ok) {
            let catches = await response.json();
            renderCatches(catches);
        } else {
            console.log('Failed to load catches');
            // Handle the error or display an appropriate message
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error and display appropriate error message
    }
}

async function renderCatches(catches) {
    console.log(true);
    let catchesContainer = document.getElementById('catches');

    // Clear the catches container
    catchesContainer.innerHTML = '';

    for (let i = 0; i < catches.length; i++) {
        let catchData = catches[i];

        // Create a catch element
        let catchElement = document.createElement('div');
        catchElement.classList.add('catch');

        // Set the catch data
        catchElement.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${catchData.angler}">
            <label>Weight</label>
            <input type="text" class="weight" value="${catchData.weight}">
            <label>Species</label>
            <input type="text" class="species" value="${catchData.species}">
            <label>Location</label>
            <input type="text" class="location" value="${catchData.location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${catchData.bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchData.captureTime}">
            <button class="update" data-id="${catchData._id}" ${disableButtonIfNotLoggedIn(catchData._ownerId)}>Update</button>
            <button class="delete" data-id="${catchData._id}" ${disableButtonIfNotLoggedIn(catchData._ownerId)}>Delete</button>
        `;

        // Append the catch element to the catches container
        catchesContainer.appendChild(catchElement);
    }
}

function disableButtonIfNotLoggedIn(ownerId) {
    if (sessionStorage.getItem('accessToken') === null || ownerId !== sessionStorage.getItem('auth_user_id')) {
        return 'disabled';
    }
    return '';
}
