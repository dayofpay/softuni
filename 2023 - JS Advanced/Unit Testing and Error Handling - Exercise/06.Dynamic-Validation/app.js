function validate() {
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const getEmailInput = document.getElementById('email');
  
    getEmailInput.addEventListener('change', emailEvent);
  
    function emailEvent(e) {
      if (emailRegex.test(getEmailInput.value)) {
        getEmailInput.classList.remove('error');
      } else {
        getEmailInput.classList.add('error');
      }
    }
  }
  