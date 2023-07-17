import { listTowns } from "./src/listTowns.js";
import { html, render } from 'https://unpkg.com/lit-html?module';
document.addEventListener('DOMContentLoaded',function(){
    console.log(`---INFO---\r\nContent Loaded\r\n---INFO---`);



    // ADD EVENT LISTENER TO THE LOAD BUTTON


    const loadButton = html`
    <button id="btnLoadTowns" @click="${listTowns}">Load</button>
  `;

  render(loadButton, document.querySelector('.content'));
    
})