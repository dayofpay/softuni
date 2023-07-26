import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement } from "../utils.js";

const homeTemplate = html `
  <section id="home">
    <article class="hero layout">
      <img src="./assets/team.png" class="left-col pad-med">
      <div class="pad-med tm-hero-col">
        <h2>Welcome to Team Manager!</h2>
        <p>Want to organize your peers? Create and manage a team for free.</p>
        <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
        <div>
          ${sessionStorage.getItem("user") ? 
            html`<a href="/browse" class="action cta" id="browseTeamsBtn">Browse Teams</a>` 
            : html`<a href="/register" class="action cta" id="signUpBtn">Sign Up Now</a>`}
        </div>
      </div>
    </article>
  </section>
`;

export function renderHome() {

  render(homeTemplate, getRootElement);
  _debugger('Rendering Home View ...');
  _debugger(sessionStorage.getItem("user"))


}

