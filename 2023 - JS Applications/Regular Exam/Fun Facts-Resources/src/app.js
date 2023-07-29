

import { _debugger, updateNav } from "./utils.js";
import page from "../../node_modules/page/page.mjs";
import { renderHome } from "./views/homeView.js";

import { renderRegister } from "./views/registerView.js";
import { renderLogin } from "./views/loginView.js";
import { renderDashboardView } from "./views/dashboardView.js";
import { renderDetails } from "./views/detailsView.js";
import { renderAddPage } from "./views/createFactView.js";
import { renderEditView } from "./views/editFactView.js";


document.addEventListener('DOMContentLoaded', async function () {
    updateNav();



    _debugger('Starting Application ... \r\n Address > ' + window.location);
    page('/',renderHome);
    page('/register',renderRegister);
    page('/login',renderLogin);
    page('/facts',renderDashboardView);
    page('/details/:id',renderDetails);
    page('/add-fact',renderAddPage);
    page('/edit/:id',renderEditView);
    page.start();
});
