function focused() {
    let divElements = document.getElementsByTagName('div');

    for (let i = 0; i < divElements.length; i++) {
        let inputElement = divElements[i].querySelector('input');
        inputElement.addEventListener('focus', focusIn);
        inputElement.addEventListener('blur', focusOut);
    }

    function focusIn(event) {
        event.target.parentElement.classList.add('focused');
    }

    function focusOut(event) {
        event.target.parentElement.classList.remove('focused');
    }
}
