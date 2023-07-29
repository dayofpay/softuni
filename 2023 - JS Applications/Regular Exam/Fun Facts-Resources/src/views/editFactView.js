import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getFactData, updateFact } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (factData) => html`
  <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit="${(event) => onSubmit(event, factData)}">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          .value="${factData.category}"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          .value="${factData.imageUrl}"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        >${factData.description}</textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="10"
          cols="50"
        >${factData.moreInfo}</textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`;

async function onSubmit(event, factData) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const factCategory = formData.get('category');
  const factImage = formData.get('image-url');
  const factDescription = formData.get('description');
  const factInfo = formData.get('additional-info');

  if (factCategory && factImage && factDescription && factInfo) {
    const updatedFactData = {

      _ownerId : factData._ownerId,
      category: factCategory,
      imageUrl: factImage,
      description: factDescription,
      moreInfo: factInfo,
      _createdOn: factData._createdOn,
      _id : factData._id,
    };

    try {
      await updateFact(factData._id, updatedFactData);
      page.redirect(`/details/${factData._id}`);
    } catch (error) {
      console.error("Error updating fact:", error);
    }
  }
  else{
    alert("Invalid data")
  }
}

export async function renderEditView(context) {
  const factData = await getFactData(context.params.id);
  render(editTemplate(factData), getRootElement);
  _debugger('Rendering Edit View ...');

  if (sessionStorage.getItem("user")) {
    _debugger(sessionStorage.getItem("user"));
  } else {
    _debugger('User is not logged in!');
  }
}
