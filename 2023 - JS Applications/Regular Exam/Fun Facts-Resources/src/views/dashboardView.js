import {
    render,
    html
} from "../../node_modules/lit-html/lit-html.js";
import {
    getFacts
} from "../api/data.js";
import {
    _debugger,
    getRootElement
} from "../utils.js";

const dashboardView = (facts) => html `
  <!-- Dashboard page -->
  <h2>Fun Facts</h2>
  <!-- Display an h2 if there are no posts -->
  ${facts.length < 1
    ? html` <h2>No Fun Facts yet.</h2>`
    : html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${facts.map(
            (facts) => html`
  <div class="fact">
    <img src="${facts.imageUrl}" alt="example1" />
    <h3 class="category">${facts.category}</h3>
    <p class="description">${facts.description}</p>
    <a class="details-btn" href="/details/${facts._id}">More Info</a>
  </div>
            `
          )}
        </section>
      `}
`;


export async function renderDashboardView() {
    try {
        let factsData = await getFacts();
        console.log(factsData);

        render(dashboardView(factsData), getRootElement);
        _debugger('Rendering Dashboard View ...');

        if (sessionStorage.getItem("user")) {
            _debugger(sessionStorage.getItem("user"));
        } else {
            _debugger('User is not logged in !');
        }
    } catch (error) {
        console.error(error);

    }
}