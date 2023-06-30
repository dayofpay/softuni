let loginEndpoint = `http://localhost:3030/users/login`;


let getSubmitButton = document.getElementById('loginButton');

getSubmitButton.addEventListener('click', authUser);

let getNotificationBar = document.getElementsByClassName('notification')[0];
if (sessionStorage.getItem('accessToken') !== null) {
    // Get the current folder (directory) of the URL
    const currentFolder = window.location.href.substring(0, window.location.href.lastIndexOf('/'));

    // Redirect to a page in the current folder
    window.location = currentFolder + '/index.html';
}

// remove logout button
let logoutButton = document.getElementById('logout');
logoutButton.remove();
async function authUser(event) {
    event.preventDefault();
    let getUser = document.getElementsByName('email')[0].value;
    let getPassword = document.getElementsByName('password')[0].value;

    let postData = {
        email: getUser,
        password: getPassword
    };

    try {
        let loginSettings = await fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (loginSettings.status === 403) {
            // Unsuccessful authentication
            getNotificationBar.style.color = 'red';
            getNotificationBar.textContent = 'Wrong username or password, please try again!';
        } else {
            // Successful authentication
            let response = await loginSettings.json();
            sessionStorage.setItem('accessToken', response.accessToken);
            sessionStorage.setItem('auth_user', response.username);
            sessionStorage.setItem('auth_email', response.email);
            sessionStorage.setItem('user_id',response._id);
            getNotificationBar.style.color = 'green';
            getNotificationBar.textContent = `Welcome, ${sessionStorage.getItem('auth_user')}!`;

            // Get the current folder (directory) of the URL
            const currentFolder = window.location.href.substring(0, window.location.href.lastIndexOf('/'));

            // Redirect to a page in the current folder
            window.location = currentFolder + '/index.html';

        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error and display appropriate error message
    }
}