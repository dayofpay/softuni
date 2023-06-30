let loginEndpoint = `http://localhost:3030/users/login`;


let getSubmitButton = document.getElementById('loginButton');

getSubmitButton.addEventListener('click',authUser);

let getNotificationBar = document.getElementsByClassName('notification')[0];

async function authUser(event){
    // Remove Access Token

    sessionStorage.removeItem('accessToken');
    let getUser = document.getElementsByName('email')[0].value;
    let getPassword = document.getElementsByName('password')[0].value;
    event.preventDefault();
    let postData = {
        email : getUser,
        password : getPassword
    }
    let loginSettings = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
    
      if (loginSettings.status === 403) {
        // Unsuccessful authentiaction

        getNotificationBar.style.color = "red";

        getNotificationBar.textContent = `Wrong username OR password, please try again !`;


      }
      else{
        // Success Auth
        let response = await loginSettings.json();
        sessionStorage.setItem('accessToken',await response["accessToken"]);

        sessionStorage.setItem('auth_user',await response["username"]);

        sessionStorage.setItem(`auth_email`,await response["email"]);

        getNotificationBar.style.color = "green";

        getNotificationBar.textContent = `Welcome, ${sessionStorage.getItem('auth_user')} !`;

      }
      console.log(sessionStorage.getItem('accessToken'));
}

