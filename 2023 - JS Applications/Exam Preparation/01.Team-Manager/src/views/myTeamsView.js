import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement } from "../utils.js";
import { getAllTeams, getTeamMembers } from "../api/data.js";

const myTeamsTemplate = html`
  <section id="my-teams">
    <article class="pad-med">
      <h1>My Teams</h1>
    </article>
  </section>
`;

const teamsTemplate = (teamData) => html`
  <div id="teams">
    <article class="layout">
      <img src="${teamData.logoUrl}" class="team-logo left-col">
      <div class="tm-preview">
        <h2>${teamData.name}</h2>
        <p>${teamData.description}</p>
        <span class="details">${teamData.members.length} Members</span>
        <div><a href="/browse/details/${teamData._id}" class="action">See details</a></div>
      </div>
    </article>
  </div>
`;

export async function renderMyTeams() {
  const userId = JSON.parse(sessionStorage.getItem("user"))._id;

  try {
    const allTeams = await getAllTeams();
    const userTeams = [];

    for (const team of allTeams) {
      const members = await getTeamMembers(team._id);
      const memberIds = members.map((member) => member._ownerId);
console.log(members);
      if (memberIds.includes(userId)) {
        team.members = members;
        userTeams.push(team);
      }
    }

    if (userTeams.length === 0) {
      const noTeamsMessage = html`
        <article class="layout narrow">
          <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/browse">Browse all teams</a> to join one, or use the button below to create your own team.</p>
          </div>
          <div class=""><a href="/create-team" class="action cta">Create Team</a></div>
        </article>
      `;

      const myTeamsContent = html`
        ${myTeamsTemplate}
        ${noTeamsMessage}
      `;

      render(myTeamsContent, getRootElement);
    } else {
      const teamsElements = userTeams.map((teamData) => teamsTemplate(teamData));

      const browseContent = html`
        ${myTeamsTemplate}
        <div class="row space-top">
          ${teamsElements}
        </div>
      `;

      render(browseContent, getRootElement);
    }

    _debugger('Rendering Browse View ...');
    _debugger(sessionStorage.getItem("user"));
  } catch (error) {
    console.error("Error rendering my teams:", error);
  }
}
