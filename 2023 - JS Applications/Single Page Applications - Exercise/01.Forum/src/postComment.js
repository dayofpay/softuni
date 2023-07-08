import { postId, showComments } from "./showComments.js";

async function postComment(data){
    data.preventDefault();
    console.log(postId);
    let commentsApiPoint = "http://localhost:3030/jsonstore/collections/myboard/comments/" + postId;

    // get comment content

    let getCommentContent = document.querySelector('#comment').value;

    // get comment author

    let getCommentAuthor = document.querySelector('#username').value;

    // post content to the server


    const date = new Date();

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    let period = 'AM';
    if (hour >= 12) {
      period = 'PM';
      if (hour > 12) {
        hour -= 12;
      }
    }
    
    const formattedTime = `${month}/${day}/${year}, ${hour}:${minute}:${second} ${period}`;

    let postData = {
        username : getCommentAuthor,
        comment : getCommentContent,
        time : formattedTime,
    }

    console.log(postData);
    try{
        let response = await fetch(commentsApiPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        showComments(postId);
    }catch(error){
        console.log(`[!] Error while trying to create a comment : ${error}`);
    }
}

export {postComment}