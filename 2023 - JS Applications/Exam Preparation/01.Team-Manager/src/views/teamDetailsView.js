import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement } from "../utils.js";
import { getTeamData, getAllMembershipsForTeam } from "../api/data.js";
import { requestToJoinTeam } from "../api/data.js";
import { removeUserFromTeam } from "../api/data.js";
const teamDetailsTemplate = (team, memberships, currentUser) => html`
  <section id="team-home">
    <div id="error"></div>
    <article class="layout">
      <img src="${team.logoUrl}" class="team-logo left-col">
      <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}!</p>
        <span class="details">${memberships.length} Members</span>
${renderActionButtons(team, memberships, currentUser, team._id)}


      </div>
      <div class="pad-large">
        <h3>Members</h3>
        <ul class="tm-members">
          ${memberships.map((membership) => html`<li>${membership.user.username}</li>`)}
        </ul>
      </div>
      ${renderMembershipRequests(memberships, currentUser)}
    </article>
  </section>
`;
async function joinTeam(teamId) {
    const currentUser = sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  
    if (currentUser) {
      try {

        const membershipData = {
          teamId: teamId,
          userId: currentUser._id,
          status: "pending",
        };
  
        await requestToJoinTeam(membershipData);
  

        alert("Request to join the team sent successfully!");
  

        renderDetailsView(context);
      } catch (error) {
        console.error("Error joining team:", error);

      }
    } else {
      console.error("User not logged in.");

    }
  }
  function renderActionButtons(team, memberships, currentUser, teamId) {
    if (!currentUser) {
      return html``;
    }
  
    const currentUserMembership = memberships.find((m) => m.user._id === currentUser._id);
    if (currentUser._id === team._ownerId) {
      // The owner of the team
      return html`
        <div>
          <a href="#" class="action">Edit team</a>
          ${memberships
            .filter((m) => m.user._id !== currentUser._id)
            .map((m) => html`<a href="#" class="tm-control action">Remove ${m.user.username} from team</a>`)}
        </div>
      `;
    } else if (!currentUserMembership) {

      return html`<a href="#" class="action" @click="${() => joinTeam(teamId)}">Join Team</a>`;
    } else if (currentUserMembership.status === "pending") {

      return html`<p>Membership pending. <a href="#">Cancel request</a></p>`;
    } else {

      return html`
        <a href="#" class="action invert" @click="${() =>
          leaveTeam(teamId, JSON.parse(sessionStorage.getItem("user"))._id)}"
        >Leave team</a>
      `;
    }
  }
  

  
  
  export async function leaveTeam(teamId, userId) {
    try {

      const membershipData = {
        teamId: teamId,
        userId: userId,
      };
  
      await removeUserFromTeam(membershipData);
  

      alert("You have left the team successfully!");
  

      renderDetailsView(context);
    } catch (error) {
      console.error("Error leaving team:", error);

    }
  }
  
  function renderMembershipRequests(team, memberships, currentUser) {
    if (!currentUser || currentUser._id !== team._ownerId) {
      // Only the owner can see the membership requests
      return html``;
    }
  
    const pendingMemberships = memberships.filter((m) => m.status === "pending");
    return html`
      <div class="pad-large">
        <h3>Membership Requests</h3>
        <ul class="tm-members">
          ${pendingMemberships.map(
            (membership) => html`
              <li>
                ${membership.user.username}
                <a href="#" class="tm-control action">Approve</a>
                <a href="#" class="tm-control action">Decline</a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
  
export async function renderDetailsView(context) {
    const teamId = context.params.id;
    const currentUser = sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  
    try {
      const [team, memberships] = await Promise.all([
        getTeamData(teamId),
        getAllMembershipsForTeam(teamId),
      ]);
  
      render(
        teamDetailsTemplate(team, memberships, currentUser),
        getRootElement
      );
      renderActionButtons(team, memberships, currentUser, teamId);
      renderMembershipRequests(team, memberships, currentUser);
      _debugger("Rendering Team Details View ...");
      _debugger(sessionStorage.getItem("user"));
    } catch (error) {
      console.error("Error loading team details:", error);

    }
  }