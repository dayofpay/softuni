// Check if user is logged in
let navEmail = document.getElementsByClassName('email')[0];
let buttons = document.getElementsByTagName("button");
let logoutButton = document.getElementById('logout');
let userAuthenticated = false;
// Remove catches container
let getCatches = document.getElementsByClassName("catch");
for (let catchN = 0; catchN < getCatches.length; catchN++) {
    getCatches[catchN].remove();
}



try {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("load")) {
            buttons[i].disabled = false;
            buttons[i].addEventListener('click', loadData);
        }
    }
    if (sessionStorage.getItem('accessToken') !== null) {

        // User is logged in
        // Change user navigation
        userAuthenticated = true;
        navEmail.innerHTML = `
        Welcome, <span>${sessionStorage.getItem('auth_user')}</span></p>
        `;

        // hide login and register button ( since we are already logged in :D )

        // let getLoginButton = document.getElementById('login')
        // let getRegisterButton = document.getElementById('register');
        // getLoginButton.remove();
        // getRegisterButton.remove();

        document.getElementById('user').style.display = "inline";
        document.getElementById('guest').style.display = "none";


        // add event listener to the logout button

        let logoutData = document.getElementById('logout');

        // add event listener to the logout button
        logoutData.addEventListener('click', logoutEvent);
        // Enable add catch button
        document.getElementsByClassName('add')[0].disabled = false;
        document.getElementsByClassName('add')[0].addEventListener('click', createCatch);
    } else {
        // User is not logged in
        // remove logout button
        userAuthenticated = false;

        logoutButton.remove();
        navEmail.innerHTML = `
        Welcome, <span>guest</span></p>
        `;

        // Disable all update and delete buttons
        let updateButtons = document.getElementsByClassName("update");
        let deleteButtons = document.getElementsByClassName("delete");

        for (let i = 0; i < updateButtons.length; i++) {
            updateButtons[i].disabled = true;
        }

        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].disabled = true;
        }
    }
} catch (error) {
    console.error('Error:', error);
    // Handle error and display appropriate error message
}

async function loadData(event) {
    try {
        let url = 'http://localhost:3030/data/catches';
        let response = await fetch(url);

        if (response.ok) {
            let catches = await response.json();
            renderCatches(catches);
            addEventListenersToUpdateAndDeleteButtons(); // Add event listeners for update and delete buttons
        } else {
            console.log('Failed to load catches');
            // Handle the error or display an appropriate message
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error and display appropriate error message
    }
}

function renderCatches(catches) {
    let catchesContainer = document.getElementById('catches');

    // Clear the catches container
    catchesContainer.innerHTML = '';

    for (let i = 0; i < catches.length; i++) {
        let catchData = catches[i];

        // Create a catch element
        let catchElement = document.createElement('div');
        catchElement.classList.add('catch');

        // Set the catch data
        if (userAuthenticated) {

            if (catchData._ownerId === sessionStorage.getItem('user_id')) {
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
                <button class="update" data-id="${catchData._id}">Update</button>
                <button class="delete" data-id="${catchData._id}">Delete</button>
            `;
            } else {
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
                <button class="update" data-id="${catchData._id}" disabled>Update</button>
                <button class="delete" data-id="${catchData._id}" disabled>Delete</button>
            `;
            }
            console.log(catchData);
        } else {
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
            <button class="update" data-id="${catchData._id}" disabled>Update</button>
            <button class="delete" data-id="${catchData._id}" disabled>Delete</button>
        `;
        }

        // Append the catch element to the catches container
        catchesContainer.appendChild(catchElement);
    }
}

function addEventListenersToUpdateAndDeleteButtons() {
    let updateButtons = document.getElementsByClassName("update");
    let deleteButtons = document.getElementsByClassName("delete");

    for (let i = 0; i < updateButtons.length; i++) {
        updateButtons[i].addEventListener('click', updateCatch);
    }

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteCatch);
    }
}

function updateCatch(event) {
    let catchId = event.target.getAttribute('data-id');
    let catchElement = event.target.parentElement;
    let anglerInput = catchElement.querySelector('.angler');
    let weightInput = catchElement.querySelector('.weight');
    let speciesInput = catchElement.querySelector('.species');
    let locationInput = catchElement.querySelector('.location');
    let baitInput = catchElement.querySelector('.bait');
    let captureTimeInput = catchElement.querySelector('.captureTime');

    let updatedCatch = {
        angler: anglerInput.value,
        weight: weightInput.value,
        species: speciesInput.value,
        location: locationInput.value,
        bait: baitInput.value,
        captureTime: captureTimeInput.value
    };

    let url = `http://localhost:3030/data/catches/${catchId}`;
    fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "X-Authorization": `${sessionStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedCatch)
        })
        .then(response => {
            if (response.ok) {
                console.log('Catch updated successfully');
                // Update the catch element with the new values
                catchElement.innerHTML = `
                <label>Angler</label>
                <input type="text" class="angler" value="${updatedCatch.angler}">
                <label>Weight</label>
                <input type="text" class="weight" value="${updatedCatch.weight}">
                <label>Species</label>
                <input type="text" class="species" value="${updatedCatch.species}">
                <label>Location</label>
                <input type="text" class="location" value="${updatedCatch.location}">
                <label>Bait</label>
                <input type="text" class="bait" value="${updatedCatch.bait}">
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${updatedCatch.captureTime}">
                <button class="update" data-id="${catchId}">Update</button>
                <button class="delete" data-id="${catchId}">Delete</button>
            `;
            } else {
                console.log('Failed to update catch');
                // Handle the error or display an appropriate message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error and display appropriate error message
        });
}


function deleteCatch(event) {
    let catchId = event.target.getAttribute('data-id');
    let url = `http://localhost:3030/data/catches/${catchId}`;
    fetch(url, {
            method: 'DELETE',
            headers: {
                'X-Authorization': sessionStorage.getItem('accessToken')
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Catch deleted successfully');
                // Remove the catch element from the UI
                event.target.parentElement.remove();
            } else {
                console.log('Failed to delete catch');
                // Handle the error or display an appropriate message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error and display appropriate error message
        });
}

function listCatches() {
    let url = 'http://localhost:3030/data/catches';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the data and display the catches
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error and display appropriate error message
        });
}
async function createCatch(event) {
    event.preventDefault();
    console.log(true);
    let addForm = document.getElementById('addForm');
    let anglerInput = addForm.querySelector('.angler');
    let weightInput = addForm.querySelector('.weight');
    let speciesInput = addForm.querySelector('.species');
    let locationInput = addForm.querySelector('.location');
    let baitInput = addForm.querySelector('.bait');
    let captureTimeInput = addForm.querySelector('.captureTime');

    let newCatch = {
        angler: anglerInput.value,
        weight: weightInput.value,
        species: speciesInput.value,
        location: locationInput.value,
        bait: baitInput.value,
        captureTime: captureTimeInput.value
    };

    if (anglerInput && weightInput && speciesInput && locationInput && baitInput && captureTimeInput) {
        let url = 'http://localhost:3030/data/catches';
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('accessToken')
                },
                body: JSON.stringify(newCatch)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Catch created successfully');
                    // Clear the form fields
                    anglerInput.value = '';
                    weightInput.value = '';
                    speciesInput.value = '';
                    locationInput.value = '';
                    baitInput.value = '';
                    captureTimeInput.value = '';
                } else {
                    console.log('Failed to create catch');
                    // Handle the error or display an appropriate message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error and display appropriate error message
            });

        renderCatches();;
    }
}
async function logoutEvent(event) {
    document.getElementsByClassName('add')[0].disabled = true;
    document.getElementById('user').style.display = "none";
    document.getElementById('guest').style.display = "inline";

    // disable edit and delete buttons

    let updateButtons = document.getElementsByClassName('update');
    let deleteButtons = document.getElementsByClassName('delete');

    for (let x = 0; x < updateButtons.length; x++) {
        updateButtons[x].disabled = true;
    }

    for (let y = 0; y < deleteButtons.length; y++) {
        deleteButtons[y].disabled = true;
    }
    try {

        let token = sessionStorage.getItem('accessToken');
        let response = await fetch(`http://localhost:3030/users/logout`, {
            method: 'GET',
            headers: {
                'X-Authorization': token
            }
        });
        if (response.status === 204 && !response.headers.has("content-type")) {
            console.log("Logout successful");
            // Handle any additional logic or UI updates after successful logout
        } else {
            console.log("Logout failed");
            // Handle logout failure or display an appropriate message
        }
    } catch (error) {
        console.error("Error:", error);
        // Handle error and display appropriate error message
    }
    sessionStorage.clear();
    navEmail.innerHTML = `
    Welcome, <span>guest</span></p>
    `;
    logoutButton.remove();
}