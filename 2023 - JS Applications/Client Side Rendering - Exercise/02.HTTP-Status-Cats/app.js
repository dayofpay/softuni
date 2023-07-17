import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';
import { createCatCard } from './src/createCat.js';
document.addEventListener('DOMContentLoaded', function () {
    const allCatsSection = document.getElementById('allCats');
  
    // Generate the cat card templates
    const catCards = cats.map(createCatCard);
  
    // Wrap the cat card templates in an <ul> element
    const catList = html`<ul>${catCards}</ul>`;
  
    // Render the cat list inside the "allCats" section
    render(catList, allCatsSection);
  });