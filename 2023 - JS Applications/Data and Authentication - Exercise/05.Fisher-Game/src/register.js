
  // remove logout button

  let getLogoutButton = document.getElementById('logout');

  getLogoutButton.remove();

  let getNotificationBar = document.getElementsByClassName('notification')[0];
  let getRegisterBtn = document.getElementById('registerBtn');

  getRegisterBtn.addEventListener('click', createAccount);

  async function createAccount(event) {
    event.preventDefault();
    let getEmail = document.getElementsByName('email')[0].value;

    let getPassword = document.getElementsByName('password')[0].value;

    let rePass = document.getElementsByName('rePass')[0].value;

    if (getEmail.includes("@") && getPassword.length > 3 && rePass.length > 3) {
      if (getPassword === rePass) {
        let url = `http://localhost:3030/users/register`;

        let data = {
          email: getEmail,
          password: getPassword
        }

        let sendRequest = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        let response = await sendRequest.json();

        sessionStorage.setItem('accessToken', response["accessToken"]);
        sessionStorage.setItem('user_id',response._id);
        sessionStorage.setItem('auth_user', response["email"].substring(0, response["email"].lastIndexOf('@')));
        console.log(sessionStorage);

      } else {
        getNotificationBar.style.color = 'red';
        getNotificationBar.textContent = 'Passwords does not match!';
      }
    } else {
      getNotificationBar.style.color = 'red';
      getNotificationBar.textContent = 'Invalid username or password, please try again!';
    }
    console.log(getEmail);
    console.log(getPassword);
    console.log(rePass);
    console.log("failed pass validation");
  }
