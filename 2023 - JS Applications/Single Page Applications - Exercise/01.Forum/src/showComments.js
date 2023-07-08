import {
    postComment
} from "./postComment.js";
let postId;
async function showComments(id) {
    postId = id
    let getContent = document.querySelector('.container > main:nth-child(1)');

    let post = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
    let postResponse = await post.json();

    // Content
    getContent.innerHTML = `
    <div class="comment">
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${postResponse.username}</span> posted on <time>${postResponse.time}</time></p>

        <p class="post-content">${postResponse.post}</p>
    </div>`

    // Comments
    try {
        let comments = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments/" + id);
        let commentsResponse = await comments.json();



        for (let comment in commentsResponse) {
            getContent.innerHTML += `
                <div id="user-comment">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${commentsResponse[comment].username}</strong> commented on <time>${commentsResponse[comment].time}</time></p>
                        <div class="post-content">
                            <p>${commentsResponse[comment].comment}</p>
                        </div>
                    </div>
                </div>
            </div>`
        }

    }catch(error){
        getContent.innerHTML += `<p>No Comments Found :( </p>`;
    }


    // Comment


    getContent.innerHTML += `    <div class="answer-comment">
<p><span>currentUser</span> comment:</p>
<div class="answer">
    <form>
        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
        <div>
            <label for="username">Username <span class="red">*</span></label>
            <input type="text" name="username" id="username">
        </div>
        <button>Post</button>
    </form>
</div>
</div>`
    let getPostButton = document.querySelector('.answer > form:nth-child(1) > button:nth-child(3)');

    getPostButton.addEventListener('click', postComment);

}

export {
    showComments,
    postId
};