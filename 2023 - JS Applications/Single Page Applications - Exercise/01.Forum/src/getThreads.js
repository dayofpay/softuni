import {
    showComments
} from "./showComments.js";

async function getThreads(e) {
    let endpoint = "http://localhost:3030/jsonstore/collections/myboard/posts";
    let getPosts = await fetch(endpoint);
    let posts = await getPosts.json();
    let getContentContainer = document.getElementsByClassName('topic-container')[0];
    getContentContainer.innerHTML = '';

    for (let post in posts) {
        const postId = posts[post]._id;

        const topicElement = document.createElement('div');
        topicElement.className = 'topic-name-wrapper';

        const topicNameElement = document.createElement('div');
        topicNameElement.className = 'topic-name';

        const anchorElement = document.createElement('a');
        anchorElement.href = '#';
        anchorElement.className = 'normal';
        anchorElement.id = postId;
        anchorElement.addEventListener('click', () => showComments(postId));

        const titleElement = document.createElement('h2');
        titleElement.textContent = posts[post].title;

        const columnsElement = document.createElement('div');
        columnsElement.className = 'columns';

        const infoElement = document.createElement('div');
        infoElement.textContent = `Date: `;
        const timeElement = document.createElement('time');
        timeElement.textContent = posts[post].time;
        infoElement.appendChild(timeElement);

        const nickNameElement = document.createElement('div');
        nickNameElement.className = 'nick-name';
        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Username: `;
        const spanElement = document.createElement('span');
        spanElement.textContent = posts[post].username;
        usernameElement.appendChild(spanElement);
        nickNameElement.appendChild(usernameElement);

        columnsElement.appendChild(infoElement);
        columnsElement.appendChild(nickNameElement);

        anchorElement.appendChild(titleElement);
        topicNameElement.appendChild(anchorElement);
        topicNameElement.appendChild(columnsElement);
        topicElement.appendChild(topicNameElement);

        getContentContainer.appendChild(topicElement);
    }
}

export {
    getThreads
};