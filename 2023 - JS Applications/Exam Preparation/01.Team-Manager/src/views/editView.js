import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement } from "../utils.js";
import { getTeamData, updateTeam } from "../api/data.js";
import { updateNav } from "../utils.js";
const editTemplate = (team, context) => html`
  <section id="edit">
    <article class="narrow">
      <header class="pad-med">
        <h1>Edit Team</h1>
      </header>
      <form id="edit-form" class="main-form pad-large" @submit=${(e) => onSubmit(e, context)}>

        <div class="error"></div>
        <label>Team name: <input type="text" name="name" .value=${team.name}></label>
        <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
        <label>Description: <textarea name="description">${team.description}</textarea></label>
        <input class="action cta" type="submit" value="Save Changes">
      </form>
    </article>
  </section>
`;

async function onSubmit(e, context) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const getErrorContainer = document.getElementsByClassName('error')[0];
  const teamId = context.params.id;
  const teamName = formData.get('name');
  const _logoUrl = formData.get('logoUrl');
  const _description = formData.get('description');

  if (teamName.length >= 4) {
    if (_logoUrl) {
      if (_description.length >= 10) {
        _debugger("[-] Attempting to edit the team...");

        try {
          await updateTeam(teamId, {
            name: teamName,
            logoUrl: _logoUrl,
            description: _description
          });

          updateNav();
          alert('Team edited successfully');
        } catch (error) {
          console.error("Error editing team:", error);
          getErrorContainer.textContent = "You are not the owner of this Team.";
        }
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

export async function renderEditPage(context) {
  const id = context.params.id;
  const team = await getTeamData(id);

  if (!team) {
    console.error("Team not found");
    return;
  }

  render(editTemplate(team, context), getRootElement);
  _debugger('Rendering Edit View ...');
  _debugger(sessionStorage.getItem("user"));
}
