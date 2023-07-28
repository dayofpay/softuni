import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getFruits } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";

const fruitTemplate = (fruitsData) => html`
  <!-- Dashboard page -->
  <h2>Fruits</h2>
  <!-- Display an h2 if there are no posts -->
  ${fruitsData.length < 1
    ? html`<h2>No fruit info yet.</h2>`
    : html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${fruitsData.map(
            (fruitData) => html`
              <div class="fruit">
                <img src="${fruitData.imageUrl}" alt="example1" />
                <h3 class="title">${fruitData.name}</h3>
                <p class="description">${fruitData.description}</p>
                <a class="details-btn" href="/fruits/details/${fruitData._id}">More Info</a>
              </div>
            `
          )}
        </section>
      `}
`;


export async function renderFruitsView() {
  try {
    let fruitsInfo = await getFruits();
    console.log(fruitsInfo);

    render(fruitTemplate(fruitsInfo), getRootElement);
    _debugger('Rendering Fruits View ...');

    if (sessionStorage.getItem("user")) {
      _debugger(sessionStorage.getItem("user"));
    } else {
      _debugger('User is not logged in !');
    }
  } catch (error) {
    console.error(error);
    // Handle any errors that might occur during fetching or rendering
  }
}
