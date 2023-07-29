import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/users.js";
import { _debugger, getRootElement } from "../utils.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";
const loginTemplate = html`

        <!-- Login Page (Only for Guest users) -->
        <section id="login">
            <div class="form">
              <h2>Login</h2>
              <form class="login-form" @submit="${onSubmit}">
                <input type="text" name="email" id="email" placeholder="email" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <button type="submit">login</button>
                <p class="message">
                  Not registered? <a href="/register">Create an account</a>
                </p>
              </form>
            </div>
          </section>
`


async function onSubmit(event){

    event.preventDefault();

    let formData = new FormData(event.target);

    let email = formData.get('email');

    let password = formData.get('password');

    if(email && password){
        _debugger("[-] Starting Login Call...");
        await login(email, password);
        updateNav(true);
        setTimeout(() => {
          page.redirect("/");
        }, 1000);
    }
    else{
        alert('Please insert username or password')
    }
}


export function renderLogin(){


    _debugger('[+] Rendering Login View');

    render(loginTemplate,getRootElement);
}