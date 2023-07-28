import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement, updateNav } from "../utils.js";

const homeTemplate = html `
        <!-- Home page -->
        <section id="home">
            <h1>Learn more about your favorite fruits</h1>
            <img
              src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
              alt="home"
            />
  
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

