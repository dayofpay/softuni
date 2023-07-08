import { views } from "./data.js";
import { getThreads } from "./getThreads.js";
function homeEvent(e){
    let getContent = document.querySelector('.container > main:nth-child(1)');


    getContent.innerHTML = views.homepage;

    getThreads();
}
export { homeEvent }