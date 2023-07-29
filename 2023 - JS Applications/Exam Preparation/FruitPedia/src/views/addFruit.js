
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { addFruit } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";
import page from "../../node_modules/page/page.mjs";



const addFruitTemplate = html`
    
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
            <div class="form">
              <h2>Add Fruit</h2>
              <form class="create-form" @submit="${onSubmit}">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Fruit Name"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="Fruit-image"
                  placeholder="Fruit Image"
                />
                <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
              ></textarea>
                <button type="submit">Add Fruit</button>
              </form>
            </div>
          </section>

`

async function onSubmit(event){
    event.preventDefault();
    let formData = new FormData(event.target);

    let fruitName = formData.get('name');

    let fruitImage = formData.get('imageUrl');

    let fruitDescription = formData.get('description');

    let fruitNutrition = formData.get('nutrition');

    if(fruitName && fruitImage && fruitDescription && fruitNutrition){
        const fruitData = {
            _ownerId : JSON.parse(sessionStorage.getItem("user"))["_id"],
            name: fruitName,
            imageUrl: fruitImage,
            description: fruitDescription,
            nutrition: fruitNutrition,
          };
          _debugger('Adding Fruit \r\n' + fruitData)
        addFruit(fruitData);
        alert('Succesfully added fruit !');

        setTimeout(() => {
            page.redirect('/');
        }, 1000);
    }
}
export async function renderAddPage(){
    _debugger('[+] Rendering Add Fruit View');
    render(addFruitTemplate,getRootElement);
}