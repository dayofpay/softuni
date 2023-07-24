import { render, html } from "../../node_modules/lit-html/lit-html.js";


import { setHeader } from "../api/headerApi.js";
import { createFurniture } from "../api/users.js";

const headerTemplate = () => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
`;

const formTemplate = () => html`
            <form @submit="${onSubmit}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`

async function onSubmit(event){
    event.preventDefault();
    // Validation Events


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

                        createFurniture(getMake,getPrice,getModel,getImage,getYear,getMaterial,getDescription)
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
export async function createView() {
    setHeader("Create Furniture")
  render(headerTemplate(), document.querySelector("body div.container"));
  render(formTemplate(),document.querySelector('body div.container'))
}