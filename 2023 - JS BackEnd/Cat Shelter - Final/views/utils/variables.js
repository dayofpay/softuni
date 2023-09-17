const fs = require('fs');

const catData = fs.readFileSync('./data/cats.json');
let catJSON = JSON.parse(catData);
const breedData = fs.readFileSync('./data/breeds.json');
let breedJSON = JSON.parse(breedData);
const config = require('../../config/env');
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
module.exports = variables;
