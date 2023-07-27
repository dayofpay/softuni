

import { _debugger, updateNav } from "./utils.js";
import { renderHome } from "./views/homeView.js";
import page from "../../node_modules/page/page.mjs";
import { renderRegister } from "./views/registerView.js";
import { logout } from "./api/services.js";
import { renderLogin } from "./views/loginView.js";
import { renderBrowse } from "./views/browseView.js";
import { renderTeamCreate } from "./views/createTeamView.js";
import { renderEditPage } from "./views/editView.js";
import { renderMyTeams } from "./views/myTeamsView.js";
import { renderDetailsView } from "./views/teamDetailsView.js";

document.addEventListener('DOMContentLoaded', async function () {

    document.getElementById('logoutBtn').addEventListener('click',logout);



    _debugger('Starting Application ... \r\n Address > ' + window.location);
    updateNav();
    page('/',renderHome);
    page('/register',renderRegister);
    page('/login',renderLogin)
    page('/browse',renderBrowse);
    page('/create-team',renderTeamCreate);
    page('/browse/edit/:id',renderEditPage);
    page('/browse/details/:id',renderDetailsView);
    page('/teams',renderMyTeams);
    page.start();
});
