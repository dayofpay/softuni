import {
    render,
    html
} from "../../node_modules/lit-html/lit-html.js";
import { onDelete } from "./deleteView.js";
import { getFruitData } from "../api/data.js";
import {
    _debugger,
    getRootElement
} from "../utils.js";

const detailsTemplate = (fruitDetails) => html`
  <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${fruitDetails.imageUrl}" alt="example1" />
      <p id="details-title">${fruitDetails.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruitDetails.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${fruitDetails.nutrition}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${sessionStorage.getItem('user')
          ? JSON.parse(sessionStorage.getItem('user'))["_id"] === fruitDetails._ownerId
            ? html`
                <div id="action-buttons">
                  <a href="/fruits/edit/${fruitDetails._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0)" id="${fruitDetails._id}" class="delete-btn">Delete</a>
                </div>
              `
            : null
          : null}
      </div>
    </div>
  </section>
`;

export async function renderDetails(context) {
  const fruitId = context.params.id;
  const fruitData = await getFruitData(fruitId);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const isOwner = user && user._id === fruitData._ownerId;
  render(detailsTemplate(fruitData), getRootElement);

  if (isOwner) {
    const deleteBtn = document.getElementsByClassName('delete-btn')[0];
    if (deleteBtn) {
      deleteBtn.addEventListener('click', onDelete);
    }
  }

  _debugger('Rendering Details View ...');

  if (user) {
    _debugger(user);
  } else {
    _debugger('User is not logged in !');
  }
}
