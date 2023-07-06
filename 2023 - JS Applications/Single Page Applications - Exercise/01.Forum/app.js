import { createThread } from "./src/createThread.js";

document.addEventListener('DOMContentLoaded', function () {
    // add event listener to the post button

    let getButton = document.getElementsByClassName('public')[0];

    getButton.addEventListener('click',createThread);
    // add event listener to the cancel button



    // todo ......

});
