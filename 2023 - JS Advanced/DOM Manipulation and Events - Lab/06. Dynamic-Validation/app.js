function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', typeEvent);

    function typeEvent(e) {
        let getEmail = e.target.value;

        if (!getEmail.includes('@')) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    }
}
