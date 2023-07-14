import {
    contacts
} from "../contacts.js";
import {
    showDetails
} from "./showDetails.js";
export function listContacts() {

    let getMainContainer = document.getElementById('contacts');
    let getContacts = Object.keys(contacts);

    for (let contact of getContacts) {
        console.log(contacts[contact]);

        getMainContainer.innerHTML += `
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${contacts[contact].name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id="${contacts[contact].id}">
                    <p>Phone number: ${contacts[contact].phoneNumber}</p>
                    <p>Email: ${contacts[contact].email}</p>
                </div>
            </div>
        </div>
        `


    }

    let getButtons = document.getElementsByClassName('detailsBtn');
    // add event listener to details button
    Array.from(getButtons)
        .map(button =>
            button.addEventListener('click',
                showDetails))

}