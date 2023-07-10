import { routeViews } from "./views.js";
import { getHeader } from "./headerEvent.js";
import {showLoginPage} from "./loginPageEvents.js";
import { showRegisterPage } from "./registerPageEvents.js";

document.addEventListener('DOMContentLoaded', function(){
    console.log('Content loaded successfully, executing scripts ...');

    getHeader();
    // add event listener to the login button

    if(!sessionStorage.getItem('loggedIn')){
        let loginButton = document.querySelector('html body div#container.container nav.navbar.navbar-expand-lg.navbar-dark.bg-dark nav.navbar.navbar-expand-lg.navbar-dark.bg-dark ul.navbar-nav.ml-auto li.nav-item.guest a.nav-link');

        loginButton.addEventListener('click',showLoginPage)
    }



    // add event listener to the register button

    if(sessionStorage.getItem('loggedIn')){

    }
    else{

        let registerButton = document.querySelector('li.nav-item:nth-child(2) > a:nth-child(1)');

        registerButton.addEventListener('click',showRegisterPage);
    }
})