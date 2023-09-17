const fs = require('fs');

const catData = fs.readFileSync('./data/cats.json');
let catJSON = JSON.parse(catData);
const breedData = fs.readFileSync('./data/breeds.json');
let breedJSON = JSON.parse(breedData);
const variables = {
    "{navigation}": `
    <nav>
        <ul class="navigation">
            <li><a href="/">Home Page</a></li>
            <li><a href="/cats/add-breed">Add Breed</a></li>
            <li><a href="/cats/add-cat">Add Cat</a></li>
        </ul>
    </nav>
    `,
    "{cats}": generateCatList(catJSON),
    "{breeds}" : generateBreedList(breedJSON),
};

function generateCatList(cats) {
    let catListHTML = '<ul>';
    cats.forEach((cat) => {
        catListHTML += `
            <li>
                <img src="${cat.imageUrl}" alt="${cat.name}">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="/cats/edit-cat/${cat.id}">Change Info</a></li>
                    <li class="btn delete"><a href="/cats/new-home/${cat.id}">New Home</a></li>
                </ul>
            </li>`;
    });
    catListHTML += '</ul>';
    return catListHTML;
}
function generateBreedList(breeds){

    let breedlist = ``;
    breeds.forEach((breed) => {
        breedlist += `<option value="${breed.breed}">${breed.breed}</option>`
    })
    return breedlist.length > 5 ? breedlist : `<option value="handlers.emptyBreeds">Breed list is empty !</option>`;

}
module.exports = variables;
