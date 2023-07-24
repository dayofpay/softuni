
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "./utils.js";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { loginView } from "./views/loginView.js";
import { publicationsView } from "./views/publicationsView.js";
import { registerView } from "./views/registerView.js";
document.addEventListener('DOMContentLoaded', async function () {
    console.log('[V] Listening For Commands ...');
    updateNav();
    page('/',catalogView);

    page('/login',loginView)
    page('/register',registerView)
    page('/details/:id',detailsView)
    page('/my-publications',publicationsView)
    page.start();
});
