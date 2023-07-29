

import { _debugger, updateNav } from "./utils.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "./api/users.js";
import { renderHome } from "./views/homeView.js";
import { renderLogin } from "./views/loginView.js";
import { renderRegister } from "./views/registerView.js";
import { renderFruitsView } from "./views/fruitsView.js";
import { renderDetails } from "./views/detailsView.js";
import { renderEditView } from "./views/editView.js";
import { renderAddPage } from "./views/addFruit.js";
import { renderSearchPage } from "./views/searchView.js";


document.addEventListener('DOMContentLoaded', async function () {
    updateNav();



    _debugger('Starting Application ... \r\n Address > ' + window.location);
    page('/',renderHome);
    page('/login',renderLogin);
    page('/register',renderRegister);
    page('/fruits',renderFruitsView);
    page('/fruits/details/:id',renderDetails);
    page('/fruits/edit/:id',renderEditView)
    page('/add-fruit',renderAddPage);
    page('/search',renderSearchPage);
    page.start();
});
