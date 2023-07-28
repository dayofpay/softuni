import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getFruitData, updateFruit } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (fruitData) => html`
  <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit="${(event) => onSubmit(event, fruitData)}">
        <input
          type="text"
          name="name"
          id="name"
          value="${fruitData.name}"
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          value="${fruitData.imageUrl}"
        />
        <textarea
          id="fruit-description"
          name="description"
          rows="10"
          cols="50"
        >${fruitData.description}</textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          rows="10"
          cols="50"
        >${fruitData.nutrition}</textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

async function onSubmit(event, fruitData) {
  event.preventDefault();
  let formData = new FormData(event.target);

  let fruitName = formData.get('name');
  let fruitImage = formData.get('imageUrl');
  let fruitDescription = formData.get('description');
  let fruitNutrition = formData.get('nutrition');

  if (fruitName && fruitImage && fruitDescription && fruitNutrition) {
    const updatedFruitData = {
      name: fruitName,
      imageUrl: fruitImage,
      description: fruitDescription,
      nutrition: fruitNutrition,
    };

    await updateFruit(fruitData._id, updatedFruitData);
    alert('You succesfully updated the resource !');

    setTimeout(() => {
        page.redirect('/')

    }, 1000);
  }
}

export async function renderEditView(context) {
  const fruitData = await getFruitData(context.params.id);
  render(editTemplate(fruitData), getRootElement);
  _debugger('Rendering Edit View ...');

  if (sessionStorage.getItem("user")) {
    _debugger(sessionStorage.getItem("user"));
  } else {
    _debugger('User is not logged in !');
  }
}
