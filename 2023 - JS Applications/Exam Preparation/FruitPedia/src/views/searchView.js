import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { _debugger, getRootElement } from "../utils.js";
import { getFruitsByQuery } from "../api/data.js"; // Add the function to fetch filtered fruits by name

let isSearchSubmitted = false;

const searchTemplate = (fruits) => html`
  <!-- Search page -->
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit="${onSubmit}">
        <input
          type="text"
          name="search"
          id="search-input"
        />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    ${isSearchSubmitted && fruits.length > 0
      ? html`
          <!--If there are matches display a div with information about every fruit-->
          ${fruits.map(
            (fruit) => html`
              <div class="fruit">
                <img src="${fruit.imageUrl}" alt="${fruit.name}" />
                <h3 class="title">${fruit.name}</h3>
                <p class="description">${fruit.description}</p>
                <a class="details-btn" href="/fruits/details/${fruit._id}">More Info</a>
              </div>
            `
          )}
        `
      : null}
    ${isSearchSubmitted && fruits.length === 0
      ? html`<p class="no-result">No result.</p>`
      : null}
  </section>
`;

async function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);

  let query = formData.get("search").trim();

  if (!query) {
    alert("Please enter a search query.");
    return;
  }


  const filteredFruits = await getFruitsByQuery(query);

  isSearchSubmitted = true;
  render(searchTemplate(filteredFruits), getRootElement);
}

export async function renderSearchPage() {

  isSearchSubmitted = false;
  render(searchTemplate([]), getRootElement);
}
