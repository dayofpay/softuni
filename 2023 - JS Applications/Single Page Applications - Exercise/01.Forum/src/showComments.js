async function showComments(id){
    let getContent = document.querySelector('.container > main:nth-child(1)');


    let comments = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments");
    let post = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
    let postResponse = await post.json();
    let commentsResponse = await comments.json();

    // Content
    getContent.innerHTML = `
    <div class="comment">
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${postResponse.user}</span> posted on <time>${postResponse.time}</time></p>

        <p class="post-content">${postResponse.post}</p>
    </div>`

    // Comments

    getContent.innerHTML += `
    <div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
            <div class="post-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                    dolorem quam.</p>
            </div>
        </div>
    </div>
</div>`

// Comment


getContent.innerHTML +=`    <div class="answer-comment">
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
}

export {showComments};