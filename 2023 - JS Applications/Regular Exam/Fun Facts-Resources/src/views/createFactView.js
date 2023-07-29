
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { addFact } from "../api/data.js";
import { _debugger, getRootElement } from "../utils.js";
import page from "../../node_modules/page/page.mjs";



const addFactTemplate = html`
    
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
            <div class="form">
              <h2>Add Fact</h2>
              <form class="create-form" @submit="${onSubmit}">
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                />
                <input
                  type="text"
                  name="image-url"
                  id="image-url"
                  placeholder="Image URL"
                />
                <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="10"
                cols="50"
              ></textarea>
                <button type="submit">Add Fact</button>
              </form>
            </div>
          </section>

`

async function onSubmit(event){
    event.preventDefault();
    let formData = new FormData(event.target);

    let factCategory = formData.get('category');

    let factImage = formData.get('image-url');

    let factDescription = formData.get('description');

    let factInfo = formData.get('additional-info');

    if(factCategory && factImage && factDescription && factInfo){
        const factData = {
            category: factCategory,
            imageUrl: factImage,
            description: factDescription,
            moreInfo: factInfo,
          };
          _debugger('Adding Fact \r\n' + factData)
        await addFact(factData);
        page.redirect('/facts');
    }
}
export async function renderAddPage(){
    _debugger('[+] Rendering Add Fact View');
    render(addFactTemplate,getRootElement);
}