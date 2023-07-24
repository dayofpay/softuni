import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { getFurnitureById, updateFurniture } from "../api/data.js";
const headerTemplate = () => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
`;

const formTemplate = (data, id) => html`
  <form @submit="${(e) => onSubmit(e, id)}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="${data.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="${data.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${data.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit">
                </div>
            </div>
        </form>
`
async function onSubmit(event,id){
    event.preventDefault();
    console.log(event);
    for(let x=0; x< event.target.length-1;x++){
        event.target[x].classList.remove('is-valid');
        event.target[x].classList.remove('is-invalid');
        if(event.target[x].value){
            event.target[x].classList.add('is-valid');
        }
        else{
            event.target[x].classList.add('is-invalid')
        }
    }
    const invalidElements = event.target.querySelectorAll('.is-invalid');
    if (invalidElements.length === 0) {
      // Valid Validation

      let getMake = document.querySelector('#new-make').value;
      let getPrice = document.querySelector('#new-price').value;
      let getModel = document.querySelector('#new-model').value;
      let getImage = document.querySelector('#new-image').value;
      let getYear = document.querySelector('#new-year').value;
      let getMaterial = document.querySelector('#new-material').value;
      let getDescription = document.querySelector('#new-description').value;


      // Final Validation

      // Requirement 1:  Make and Model must be at least 4 symbols long

      if(getMake.length >= 4 && getModel.length >= 4){
        if(getYear >= 1950 && getYear <= 2050){
            if(getDescription.length > 10){
                if(getPrice > 0){
                    if(getImage){
                        console.log(`All Tests Good`);

                        // All tests are positive
                        const updatedFurniture = {
                            make: getMake,
                            price: getPrice,
                            model: getModel,
                            image: getImage,
                            year: getYear,
                            material: getMaterial,
                            description: getDescription
                          };
                    
                          updateFurniture(id, updatedFurniture);
                        }
                    else{
                        console.log("faliled image validation");
                    }
                }
                else{
                    console.log("faliled price validation");
                }
            }
            else{
                console.log("faliled description validation");
            }
        }
        else{
            console.log("faliled year validation");
        }
      }
      else{
        console.log("faliled getmake or model validation");
      }
    }
}
export async function editView(context) {
    const id = context.params.id;
    const data = await getFurnitureById(id);
  
    if (data._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id) {
      render(headerTemplate(), document.querySelector("body div.container"));
      render(formTemplate(data, id), document.querySelector('body div.container'))
    } else {
      console.log("You are not the author of this post !");
    }
  }
  