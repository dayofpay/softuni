import { getThreads } from "./getThreads.js";

async function createThread(e) {
    e.preventDefault()
    let getTitle = document.getElementById('topicName').value;

    let getUsername = document.getElementById('username').value;

    let postContent = document.getElementById('postText').value;
    let currentDate = new Date().toISOString();

    let endpoint = "http://localhost:3030/jsonstore/collections/myboard/posts";

    // add event listener to the cancel button

    let getCancelButton = document.getElementsByClassName('cancel')[0];

    getCancelButton.addEventListener('click',cancelEvent);
    // validate data
    if(getTitle && getUsername && postContent){
        let postData = {
            title: getTitle,
            user: getUsername,
            post: postContent,
            time : currentDate,
        };
    
        try {
            let response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
        } catch (error) {
            console.log(`[!] ERROR TRYING TO CREATE NEW THREAD: ${error}`);
        }
    }

    function cancelEvent(e){
        e.preventDefault();
        getTitle.value = "";
        getUsername.value = "";
        postContent.value = "";
    }
    getThreads();
}


export {
    createThread
};