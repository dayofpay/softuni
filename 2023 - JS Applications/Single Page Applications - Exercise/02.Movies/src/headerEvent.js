import { routeViews } from "./views.js";

function getHeader(){

    let headerLocation = document.querySelector('.navbar');

    headerLocation.innerHTML = routeViews.nonLoggedUserHeader;
}

export {getHeader}