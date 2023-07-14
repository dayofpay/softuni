import { html, render } from 'https://unpkg.com/lit-html?module';
import { contacts } from "../contacts.js";
import { showDetails } from "./showDetails.js";

export function listContacts() {
  let getMainContainer = document.getElementById('contacts');
  let getContacts = Object.values(contacts);

  let data = getContacts.map(contact => html`
    <div class="contact card">
      <div>
        <i class="far fa-user-circle gravatar"></i>
      </div>
      <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn">Details</button>
        <div class="details" id="${contact.id}">
          <p>Phone number: ${contact.phoneNumber}</p>
          <p>Email: ${contact.email}</p>
        </div>
      </div>
    </div>
  `);

  render(data, getMainContainer);

  let getButtons = document.getElementsByClassName('detailsBtn');
  // add event listener to details button
  Array.from(getButtons).forEach(button => {
    button.addEventListener('click', showDetails);
  });
}
