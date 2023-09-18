const fs = require('fs');

const catData = fs.readFileSync('./data/cats.json');
let catJSON = JSON.parse(catData);
const breedData = fs.readFileSync('./data/breeds.json');
let breedJSON = JSON.parse(breedData);
const config = require('../../config/env');
const getCatData = require('../../services/getCatData');
const currentCat = require('../../cache/cache')
const variables = {
    "{navigation}": `
    <nav>
        <ul class="navigation">
            <li><a href="${config.URL_LIST.ROOT}">${config.LOCALES.HOME_PAGE}</a></li>
            <li><a href="${config.URL_LIST.ADD_BREED}">${config.LOCALES.ADD_BREED}</a></li>
            <li><a href="${config.URL_LIST.ADD_CAT}">${config.LOCALES.ADD_CAT}</a></li>
        </ul>
    </nav>
    `,
    "{cats}": generateCatList(catJSON),
    "{breeds}" : generateBreedList(breedJSON),
    "{siteName}" : config.APPLICATION_NAME,
    "{locales.Search}" : config.LOCALES.SEARCH,
    "{catActions}": () => generateEditCatView(getCatData(currentCat.currentCatId)),
    "{catId}" : "cat_1694910062234", // Only for demo !
};

function generateCatList(cats) {
    let catListHTML = '<ul>';
    cats.forEach((cat) => {
        catListHTML += `
            <li>
                <img src="${cat.imageUrl}" alt="${cat.name}">
                <h3>${cat.name}</h3>
                <p><span>${config.LOCALES.BREED}: </span>${cat.breed}</p>
                <p><span>${config.LOCALES.DESCRIPTION}: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="${config.URL_LIST.EDIT_CAT}${cat.id}">${config.LOCALES.CHANGE_INFO}</a></li>
                    <li class="btn delete"><a href="${config.URL_LIST['NEW-HOME']}${cat.id}">${config.LOCALES.NEW_HOME}</a></li>
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
    return breedlist.length > config.DATABASE_SETTINGS.MINIMUM_BREED_LIST_LENGTH ? breedlist : `<option value="${config.DATABASE_SETTINGS.ERROR_LOCALES.NO_BREEDS['OPTION.VALUE']}">${config.DATABASE_SETTINGS.ERROR_LOCALES.NO_BREEDS['OPTION.VALUE.CONTENT']}</option>`;

}


function generateEditCatView(catData) {
    if (catData.hasOwnProperty('ERROR')) {
      return `<h2>${config.LOCALES.DATABASE_QUERY_NOT_EXIST}</h2>`;
    } else {
      const catDataHTML = `
        <h2>Edit Cat</h2>
        <form action="/cats/edit-cat/" method="PUT" class="cat-form" id="editCatForm">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" value="${catData.name}">
          <label for="description">${config.LOCALES.DESCRIPTION}</label>
          <textarea id="description" name="description">${catData.description}</textarea>
          <label for="image">${config.LOCALES.IMAGE}</label>
          <input type="file" id="image" name="image">
          <label for="group">${config.LOCALES.BREED}</label>
          <select id="group" name="breed">
            <option value="${catData.breed}">${catData.breed}</option>
            ${generateBreedList(breedJSON)}
          </select>
          <input id="catId" value="${catData.id}" hidden name="catId">
          <button type="submit">${config.LOCALES.EDIT_CAT}</button>
        </form>`;
  
      return catDataHTML;
    }
  }
  

module.exports = variables;
