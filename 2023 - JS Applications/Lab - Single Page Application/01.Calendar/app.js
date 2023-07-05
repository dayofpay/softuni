import { monthList } from './objects.js';
import { yearData } from './objects.js';
import { monthData } from './objects.js';
document.addEventListener('DOMContentLoaded', function () {

    // add event listener to years
    let getYears = document.getElementById('years');

    console.log(getYears.getElementsByClassName('days')[0]);

    for (let x = 0; x < getYears.getElementsByClassName('days').length; x++) {
        getYears.getElementsByClassName('days')[x].addEventListener('click', selectYearEvent);
    }


    function selectYearEvent(event) {
        document.getElementsByTagName('body')[0].innerHTML = yearData[event.target.textContent.trim()]

        let getMonths = document.getElementsByClassName('monthCalendar');

        // add event listener to every month

        for (let month = 0; month < getMonths.length; month++) {
            getMonths[month].addEventListener('click', showDaysEvent);
        }
    }

    // show days event

    function showDaysEvent(event) {
        console.log(document.getElementsByTagName('caption')[0].textContent);
        console.log(monthList[event.target.textContent.trim()]);
        let getCurrentYear = document.getElementsByTagName('caption')[0].textContent;
        let curString = `${getCurrentYear}-${monthList[event.target.textContent.trim()]}`
        document.getElementsByTagName('body')[0].innerHTML = monthData[curString]

    }


});