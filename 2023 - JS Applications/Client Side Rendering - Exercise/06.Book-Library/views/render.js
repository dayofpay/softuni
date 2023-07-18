import { html, render } from '../node_modules/lit-html/lit-html.js';
import { views } from './viewData.js';

export function renderHomePage() {
  const getBody = document.getElementsByTagName('body')[0];
  getBody.innerHTML = views.homepage
}
