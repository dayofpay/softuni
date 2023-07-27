import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { createTeam } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";
import { updateNav } from "../utils.js";
const createTeamView = html `
<section id="create">
  <article class="narrow">
    <header class="pad-med">
      <h1>New Team</h1>
    </header>
    <form id="create-form" class="main-form pad-large" @submit="${onSubmit}">
      <div id="error" class="error"></div>
      <label>Team name: <input type="text" name="name"></label>
      <label>Logo URL: <input type="text" name="logoUrl"></label>
      <label>Description: <textarea name="description"></textarea></label>
      <input class="action cta" type="submit" value="Create Team">
    </form>
  </article>
</section>

`;
async function onSubmit(e) {
    e.preventDefault();
  
    let formData = new FormData(e.target);
    let getErrorContainer = document.querySelector('.error');
    let teamName = formData.get('name');
    let _logoUrl = formData.get('logoUrl');
    let _description = formData.get('description');
  
    if (teamName.length >= 4) {
      if (_logoUrl) {
        if (_description.length >= 10) {
          _debugger("[-] Attempting to create a team...");

  
          await createTeam({
            _ownerId: sessionStorage.getItem('user')["_id"],
            name: teamName,
            logoUrl: _logoUrl,
            description: _description
          });
          updateNav();
          alert('success');
        } else {
          getErrorContainer.textContent = "Invalid Description";
        }
      } else {
        getErrorContainer.textContent = "Invalid Logo URL";
      }
    } else {
      getErrorContainer.textContent = "Invalid Team Name";
    }
}

export function renderTeamCreate() {

  render(createTeamView, getRootElement);
  _debugger('Rendering Create-Team View ...');
  _debugger(sessionStorage.getItem("user"))


}

