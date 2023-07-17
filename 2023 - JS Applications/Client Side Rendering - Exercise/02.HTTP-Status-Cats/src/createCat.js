import { html } from 'https://unpkg.com/lit-html?module';
import { toggleStatusCode } from './toggleCode.js';

export function createCatCard(cat) {
  return html`
    <li>
      <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
      <div class="info">
        <button class="showBtn" @click="${toggleStatusCode}">Show status code</button>
        <div class="status" style="visibility: hidden" id="${cat.statusCode}">
          <h4>Status Code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>
  `;
}
