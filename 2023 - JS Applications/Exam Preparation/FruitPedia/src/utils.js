import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { logout } from "./api/services.js";

export function updateNav() {
  const nav = document.querySelector('nav');
  const loggedUserLinks = html`
    <a href="/fruits">Fruits</a>
    <a href="/search">Search</a>
    <a href="/add-fruit">Add Fruit</a>
    <a href="#" id="logoutBtn">Logout</a>
  `;
  const guestUserLinks = html`
    <a href="/fruits">Fruits</a>
    <a href="/search">Search</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  `;

  if (sessionStorage.getItem('user')) {
    render(loggedUserLinks, nav);
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    render(guestUserLinks, nav);
  }
}


export function _debugger(message){
    console.info(`[I] Debug Message - ${message}`)
}

export function displayError(message){
  if(message){
    document.getElementById('error').innerHTML =message;
  }
}

export const getRootElement = document.getElementsByTagName('main')[0];