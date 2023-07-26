import {
    render,
    html
} from "../../node_modules/lit-html/lit-html.js";
import {
    _debugger,
    getRootElement
} from "../utils.js";
import {
    getAllTeams,
    getTeamMembers
} from "../api/data.js";

const browseTemplate = html `
  <section id="browse">
    <article class="pad-med">
      <h1>Team Browser</h1>
    </article>

    <article class="layout narrow">
      <div class="pad-small"><a href="/create-team" class="action cta">Create Team</a></div>
    </article>
  </section>
`;

const teamsTemplate = async (teamData) => {

    const membersData = await getTeamMembers(teamData._id);
    const membersCount = membersData.length;

    return html `
    <div id="teams">
      <article class="layout">
        <img src="${teamData.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
          <h2>${teamData.name}</h2>
          <p>${teamData.description}</p>
          <span class="details">${membersCount} Members</span>
          <div><a href="/browse/details/${teamData._id}" class="action">See details</a></div>
          ${JSON.parse(sessionStorage.getItem("user"))["_id"] === teamData._ownerId
           ?html`          <div><a href="/browse/edit/${teamData._id}" class="action">Edit Team</a></div>`  
           : null}
        </div>
      </article>
    </div>
  `;
};

export async function renderBrowse() {
    const data = await getAllTeams();
    const teamsElements = await Promise.all(data.map((teamData) => teamsTemplate(teamData)));

    const browseContent = html `
    ${browseTemplate}
    <div class="row space-top">
      ${teamsElements}
    </div>
  `;

    render(browseContent, getRootElement);
    _debugger('Rendering Browse View ...');
    _debugger(sessionStorage.getItem("user"));
}