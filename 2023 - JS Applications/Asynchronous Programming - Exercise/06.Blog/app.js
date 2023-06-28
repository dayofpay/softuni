function attachEvents() {

    let posts = `http://localhost:3030/jsonstore/blog/posts`;

    let comments = `http://localhost:3030/jsonstore/blog/comments`;
    let getPostTitle = document.getElementById('post-title');
    let globalPosts;
    let getLoadButton = document.getElementById('btnLoadPosts');
    let getPostsSection = document.getElementById('posts');


    // Add Event Listener to the  load posts button


    getLoadButton.addEventListener('click', viewEvent);

    // Add Event Listener to the View button
    let getPostsButton = document.getElementById('btnViewPost');

    getPostsButton.addEventListener('click', getEvent);
    async function viewEvent(event) {
        clearData();
        getPostTitle.textContent = "Post Details";
        // Clear All Options

        document.getElementById('posts').innerHTML = "";
        let requestPosts = await fetch(posts);

        if (!requestPosts.ok) {
            throw new Error("Error");
        }
        let data = await requestPosts.json();
        globalPosts = data;

        console.log(data);
        for (let post in data) {


            // Create Option

            let createOption = document.createElement('option');

            createOption.value = data[post]["id"];
            createOption.textContent = data[post]["title"];

            getPostsSection.appendChild(createOption);


        }




    }
    async function getEvent(event) {
        clearData();

        let currentPost = document.getElementById('posts').value;
        getPostTitle.textContent = `${globalPosts[currentPost]["title"]} - Loading Content`
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
              try {
                getPostTitle.textContent = `${globalPosts[document.getElementById('posts').value]["title"]}`
                let currentPost = document.getElementById('posts').value;
                // Get Post Body
                let getPostBody = document.getElementById('post-body');
                getPostBody.textContent = globalPosts[currentPost].body;
        
                // Get Comments List
                let commentList = document.getElementById('post-comments');
              
                // Get All Comments
                let allComments = await fetch(comments);
                let allCommentsResponse = await allComments.json();
              
                Object.values(allCommentsResponse)
                  .filter(comment => comment.postId === currentPost)
                  .map(comment => {
                    let createComment = document.createElement('li');
                    createComment.id = comment.id;
                    createComment.textContent = comment.text;
                    return createComment;
                  })
                  .forEach(createComment => commentList.appendChild(createComment));
        
                resolve();
              } catch (error) {
                reject(error);
              }
            }, 1500);
        });
    }

    function clearData() {

        // Clear Body
        document.getElementById('post-body').textContent = "";

        // Clear Comments

        document.getElementById('post-comments').innerHTML = "";
    }
}

attachEvents();