// check if user is logged
let navEmail = document.getElementsByClassName('email')[0];
    try {
     if(sessionStorage.getItem('accessToken') !== null){
        // change user navigation



        navEmail.innerHTML = `
        Welcome, <span>${sessionStorage.getItem('auth_user')}</span></p>
        `
     }
     else{
        navEmail.innerHTML = `
        Welcome, <span>guest</span></p>
        `
     }
    } catch (error) {
      console.error('Error:', error);
      // Handle error and display appropriate error message
    }
  

    function unAuthorizedActions(){
        console.log(true);
    }