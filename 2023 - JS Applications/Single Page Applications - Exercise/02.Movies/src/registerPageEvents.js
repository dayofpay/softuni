import { mainContainer, routeViews } from "./views.js";


export function showRegisterPage(){

    mainContainer.innerHTML = routeViews.register;
}


export default { 
    showRegisterPage
}