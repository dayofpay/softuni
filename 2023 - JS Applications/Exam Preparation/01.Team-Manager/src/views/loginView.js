
import {
    render,
    html
} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { login } from "../api/services.js";
import { _debugger, getRootElement } from "../utils.js";
import { updateNav } from "../utils.js";



const loginTemplate = html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form id="login-form" class="main-form pad-large" @submit="${onSubmit}">
            <div class="error"></div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>
`

export async function onSubmit(event) {
    event.preventDefault();
    let getErrorContainer = document.querySelector('.error');
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    if (email) {
      if (password) {
        _debugger("[-] Starting Login Call...");
        await login(email, password);
        updateNav();
        page.redirect("/");
      } else {
        getErrorContainer.textContent = "Invalid Password";
      }
    } else {
      getErrorContainer.textContent = "Invalid Email";
    }
  }
  

export function renderLogin() {

    render(loginTemplate, getRootElement);
    _debugger('Rendering Login View ...');
}