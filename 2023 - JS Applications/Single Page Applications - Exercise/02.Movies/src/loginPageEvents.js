import { routeViews } from "./views.js";
import { mainContainer } from "./views.js";
import { apiEndpoints } from "./restServices.js";
import { movieId } from "./restServices.js";
import { userId } from "./restServices.js";
export function showLoginPage(e){


  

  mainContainer.innerHTML = routeViews.login;
  


  e.preventDefault();

  // get login SUBMIT Button

  let getLoginSubmitBTN = document.querySelector('.btn');

  getLoginSubmitBTN.addEventListener('click',loginEvent)
}

export async function loginEvent(e){
    e.preventDefault();
    try{
        //
    }catch(error){
        console.error(`[!] Login Event Malfunction : ${error}`);
    }
}

export default showLoginPage


