import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/users.js";
import { _debugger, displayError, getRootElement } from "../utils.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";
const registerTemplate = html`

        

        <!-- Register Page (Only for Guest users) -->
        <section id="register">
            <div class="form">
              <h2>Register</h2>
              <form class="register-form" @submit="${onSubmit}">
                <input
                  type="text"
                  name="email"
                  id="register-email"
                  placeholder="email"
                />
                <input
                  type="password"
                  name="password"
                  id="register-password"
                  placeholder="password"
                />
                <input
                  type="password"
                  name="re-password"
                  id="repeat-password"
                  placeholder="repeat password"
                />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
              </form>
            </div>
          </section>
`


async function onSubmit(event){

    event.preventDefault();

    let formData = new FormData(event.target);

    let email = formData.get('email');

    let password = formData.get('password');

    let rePass = formData.get('re-password');
    if(email && password && rePass){
        if(password === rePass){
            _debugger("[-] Starting Register Call...");
            await register(email, password);
            updateNav(true);
            page.redirect("/");
        }
        else{
            alert("Passwords doesn't match !");
            displayError("Passwords doesn't match!");
        }
    }
    else{
        alert('Invalid Form Data')
    }
}


export function renderRegister(){


    _debugger('[+] Rendering Register View');

    render(registerTemplate,getRootElement);
}