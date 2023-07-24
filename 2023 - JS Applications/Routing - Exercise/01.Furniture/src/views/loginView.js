import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/users.js";
import { updateNav } from "../utils.js";
import page from "../../node_modules/page/page.mjs";
const loginPage = () => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit="${submitHandler}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
            <div id="error" style="color:red"></div>
        </form>

`
export async function loginView() {


  render(loginPage(), document.querySelector("body div.container"));
}

async function submitHandler(event){
    event.preventDefault();


    const formData = new FormData(event.target);

    const email = formData.get('email');

    const password = formData.get('password');
    await login(email,password);

    updateNav();

    page.redirect("/")
}