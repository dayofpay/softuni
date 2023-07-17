import { towns } from "./towns.js";
import { html, render } from 'https://unpkg.com/lit-html?module';

export function search(e) {
  const searchText = document.querySelector('#searchText').value;
  const listItems = Array.from(document.getElementsByTagName('ul')[0].children);

  let matches = 0;
  listItems.forEach(item => {
    item.classList.remove('active');
    if (item.innerText.includes(searchText)) {
      item.classList.add('active');
      matches++;
    }
  });

  const resultContainer = document.getElementById('result');

  render(html`${matches} matches found`, resultContainer);
}
