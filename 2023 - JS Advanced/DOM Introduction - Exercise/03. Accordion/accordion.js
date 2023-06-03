function toggle() {
    let extraElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0];
    if (extraElement.style.display === "none") {
        extraElement.style.display = "block";
        buttonElement.textContent = "Less";
    } else {
        extraElement.style.display = "none";
        buttonElement.textContent = "More";
    }
}