import { createThread } from "./src/createThread.js";
import { getThreads } from "./src/getThreads.js";
import { homeEvent } from "./src/homeEvent.js";
import { cancelEvent } from "./src/cancelEvent.js";
document.addEventListener('DOMContentLoaded', function () {
    getThreads()
    // add event listener to the post button

    let getButton = document.getElementsByClassName('public')[0];

    getButton.addEventListener('click',createThread);

    // add event listener to the home button

    let homeButton = document.querySelector(`body > header:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)`);

    homeButton.addEventListener('click',homeEvent);

    let getCancelButton = document.getElementsByClassName('cancel')[0];

    getCancelButton.addEventListener('click',cancelEvent);

});



// this solution doesnt give full points because i messed up with some of the css ( in my personal opinion i made the structure better then the described one but judge doesnt think like that :D)