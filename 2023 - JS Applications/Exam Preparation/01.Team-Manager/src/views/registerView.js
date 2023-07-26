
import {
    render,
    html
} from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { register } from "../api/services.js";
import { _debugger, getRootElement } from "../utils.js";
import { updateNav } from "../utils.js";



const registerTemplate = html`
        <section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form id="register-form" class="main-form pad-large" @submit="${onSubmit}">
            <div class="error"></div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`

export async function onSubmit(event){

    event.preventDefault();

    let getErrorContainer = document.querySelector('.error');
    const formData = new FormData(event.target);

    const email = formData.get('email');

    const username = formData.get('username');
    const password = formData.get('password');

    const rePass = formData.get('repass');



    if(email.includes("@")){
        if(password.length >= 3 && username.length >= 3){
            if(password === rePass){
                _debugger
                ("[-] Starting Register Call...")
                await register(email,username,password);

                updateNav();
            
                page.redirect("/")
            }else{
                getErrorContainer.textContent = "Passwords Does not match !\r\n";
            }
        }
        else{
            getErrorContainer.textContent = "Invalid Password Or Username\r\n";
        }
    }
    else{
        getErrorContainer.textContent = "Invalid Email\r\n";
    }
}

export function renderRegister() {

    render(registerTemplate, getRootElement);
    _debugger('Rendering Register View ...');
}