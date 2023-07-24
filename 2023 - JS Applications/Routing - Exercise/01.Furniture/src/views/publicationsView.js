import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFurniture } from "../api/data.js";
import { logout } from "../api/users.js";
import { updateNav } from "../utils.js";
import { setHeader } from "../api/headerApi.js";
const catalogItem = (furniture) => html`
  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src="${furniture.img}" />
        <p>Description here</p>
        <footer>
          <p>Price: <span>${furniture.price} $</span></p>
        </footer>
        <div>
          <a href="/details/${furniture._id}" class="btn btn-info">Details</a>
        </div>
      </div>
    </div>
  </div>
`;

const catalogTemplate = (data) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>My Furniture</h1>
      <p>This is a list of your publications.</p>
    </div>
  </div>
  <div class="row space-top">
    ${data.map((furniture) => catalogItem(furniture))}
  </div>
`;

document.addEventListener('DOMContentLoaded', async function () {
  document.querySelector('#logoutBtn').addEventListener('click', logout);
  await publicationsView();
});

export async function publicationsView() {
  setHeader("My Publications")
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    const ownerId = user ? user._id : null;
  
    const data = await getAllFurniture();
  

  
    const filteredData = data.filter((furniture) => furniture._ownerId === ownerId);
    render(catalogTemplate(filteredData), document.querySelector("body div.container"));
  }
  