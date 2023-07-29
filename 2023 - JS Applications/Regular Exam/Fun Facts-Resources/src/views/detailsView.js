// your main script file

import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { onDelete } from "./deleteView.js";
import { getFactData, getFactLikes, likeFact, hasUserLikedFact } from "../api/data.js"; // Import the hasUserLikedFact function
import { _debugger, getRootElement } from "../utils.js";

const detailsTemplate = (factDetails, factLikes, hasLiked, isCreator) => html`
  <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${factDetails.imageUrl}" alt="example1" />
      <p id="details-category">${factDetails.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${factDetails.description}</p>
          <p id="more-info">${factDetails.moreInfo}</p>
        </div>
        <h3>Likes:<span id="likes">${factLikes}</span></h3>
        <div id="action-buttons">
          <!-- Like button is only for logged-in users (not authors) -->
          ${!isCreator && !hasLiked && sessionStorage.getItem("user")
            ? html`<a href="#" id="like-btn">Like</a>`
            : null}
          
          <!-- Edit and Delete buttons for the creator -->
          ${isCreator
            ? html`
                <a href="/edit/${factDetails._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="${factDetails._id}" class="delete-btn">Delete</a>
              `
            : null}
        </div>
      </div>
    </div>
  </section>
`;

export async function renderDetails(context) {
  const factId = context.params.id;
  const factData = await getFactData(factId);
  const factLikes = await getFactLikes(factId);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const isCreator = user && user._id === factData._ownerId;
  const hasLiked = user ? await hasUserLikedFact(factId, user._id) : false;
  render(
    detailsTemplate(factData, factLikes, hasLiked, isCreator),
    getRootElement
  );

  const likeBtn = document.getElementById("like-btn");
  if (likeBtn && user && !hasLiked && !isCreator) {
    likeBtn.addEventListener("click", async () => {
      await likeFact(factId);
      const updatedFactLikes = await getFactLikes(factId);
      document.getElementById("likes").textContent = updatedFactLikes;
      likeBtn.remove();
    });
  }
  if (isCreator) {
    const deleteBtn = document.getElementsByClassName('delete-btn')[0];
    if (deleteBtn) {
      deleteBtn.addEventListener('click', onDelete);
    }
  }
  _debugger("Rendering Details View ...");

  if (user) {
    _debugger(user);
  } else {
    _debugger("User is not logged in!");
  }
}
