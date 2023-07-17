import { html, render } from 'https://unpkg.com/lit-html?module';

function listTowns(e) {
  e.preventDefault();
  let townsInput = document.getElementById('towns');
  let towns = townsInput.value.split(", ");

  const townList = towns.map(town => html`
    <ul>
      <li>${town}</li>
    </ul>
  `);

  render(townList, document.getElementById('root'));
}

export { listTowns };