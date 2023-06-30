if (sessionStorage.getItem('accessToken') !== null) {
    console.log(true);
    window.location = "/";
  } else {
    // Your existing code for handling the login functionality
    // ...
  }
  