async function getThreads(e) {

    let endpoint = "http://localhost:3030/jsonstore/collections/myboard/posts";


    let getPosts = (await fetch(endpoint))


    let posts = await getPosts.json();


    let getContentContainer = document.getElementsByClassName('topic-container')[0];

    // clear container before submiting


    getContentContainer.innerHTML = ``;


    for (let post in posts) {
        const postId = posts[post]._id;

        getContentContainer.innerHTML += `
          <div class="topic-name-wrapper">

            <div class="topic-name">
              <a href="#" class="normal" id="${postId}">
                <h2>${posts[post].title}</h2>
              </a>
              <div class="columns">
                <div>
                  <p>Date: <time>${posts[post].time}</time></p>
                  <div class="nick-name">
                    <p>Username: <span>${posts[post].user}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    }

    // add event listener to every topic



}


export {
    getThreads
}