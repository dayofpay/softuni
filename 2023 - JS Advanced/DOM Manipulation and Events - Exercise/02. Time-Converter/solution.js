function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', convertDays);
    hoursButton.addEventListener('click', convertHours);
    minutesButton.addEventListener('click', convertMinutes);
    secondsButton.addEventListener('click', convertSeconds);

    function convertDays() {
        let daysInput = document.getElementById('days');
        let days = parseFloat(daysInput.value);

        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertHours() {
        let hoursInput = document.getElementById('hours');
        let hours = parseFloat(hoursInput.value);

        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertMinutes() {
        let minutesInput = document.getElementById('minutes');
        let minutes = parseFloat(minutesInput.value);

        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
        document.getElementById('seconds').value = seconds;
    }

    function convertSeconds() {
        let secondsInput = document.getElementById('seconds');
        let seconds = parseFloat(secondsInput.value);

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        document.getElementById('minutes').value = minutes;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
    }
}
