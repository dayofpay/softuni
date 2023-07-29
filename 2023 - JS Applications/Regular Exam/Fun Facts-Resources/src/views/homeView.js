import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement, updateNav } from "../utils.js";

const homeTemplate = html `
        <!-- Home page -->
        <section id="home">
            <h1>Welcome to our website, where curiosity meets enjoyment!
               Discover fascinating fun facts that engage and entertain everyone,
                inviting you to participate in the joy of learning something new together.</h1>
                <img id="logo-img" src="./images/logo.png" alt=""/>
          </section>
`;

export function renderHome() {
  updateNav()
  render(homeTemplate, getRootElement);
  _debugger('Rendering Home View ...');

  if(sessionStorage.getItem("user")){
    _debugger(sessionStorage.getItem("user"))
  }
  else{
    _debugger('User is not logged in !');
  }

}

