import { towns } from "../towns.js"
import { html, render } from 'https://unpkg.com/lit-html?module';
export function importTowns(e){
   let getTownContainer = document.getElementById('towns');

   let townData = towns.map(town => html`<li>${town}</li>`)

   render(html`<ul>${townData}</ul>`,getTownContainer)
}

