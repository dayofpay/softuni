function solution(){
    class Post{
        constructor(title,content){
            this.title = String(title);
            this.content = String(content);
        }
        toString(){
            return `Post: ${this.title} \r\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.comments = [];
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
        }
    
        addComment(comment) {
            this.comments.push(String(comment));
        }
    
        toString() {
            let result = `Post: ${this.title}\r\nContent: ${this.content}\r\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                result += `\r\nComments:\r\n`;
                result += this.comments.map(comment => ` * ${comment}`).join('\r\n');
            }
            return result;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }
    
        view() {
            this.views++;
            return this;
        }
    
        toString() {
            return `Post: ${this.title}\r\nContent: ${this.content}\r\nViews: ${this.views}`;
        }
    }
    
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}
const classes = solution();
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!






// function solution(){
//     class Post{
//         constructor(title,content){
//             if(typeof title !== 'string'){
//                 throw new Error ('Error');
//             }
//             else{
//                 this.title = title;
//             }

//             if(typeof content !== 'string'){
//                 throw new Error('Error');
//             }
//             else{
//                 this.content = content;
//             }
//         }
//         toString(){
//             return `Post: ${this.title} \r\nContent: ${this.content}`;
//         }
//     }

//     class SocialMediaPost extends Post {
//         constructor(title, content, likes, dislikes) {
//             super(title, content);

//             if(typeof likes !== 'number'){
//                 throw new Error('Error');
//             }
//             else{
//                 this.likes = likes;
//             }
//             if(typeof dislikes !== 'number'){
//                 throw new Error('Error');
//             }
//             else{
//                 this.dislikes = dislikes;

//             }
//             this.comments = [];
//         }
    
//         addComment(comment) {
//             this.comments.push(comment);
//         }
    
//         toString() {
//             let result = `Post: ${this.title}\r\nContent: ${this.content}\r\nRating: ${this.likes - this.dislikes}`;
//             if (this.comments.length > 0) {
//                 result += `\r\nComments:\r\n`;
//                 result += this.comments.map(comment => ` * ${comment}`).join('\r\n');
//             }
//             return result;
//         }
//     }
    
//     class BlogPost extends Post {
//         constructor(title, content, views) {
//             super(title, content);
//             if(typeof views !== 'number'){
//                 throw new Error('Error');
//             }
//             else{
//                 this.views = views;
//             }

//         }
    
//         view() {
//             this.views++;
//             return this;
//         }
    
//         toString() {
//             return `Post: ${this.title}\r\nContent: ${this.content}\r\nViews: ${this.views}`;
//         }
//     }
    
//     return {
//         Post,
//         SocialMediaPost,
//         BlogPost
//     }
// }
// const classes = solution();
// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// console.log(scm.toString());
// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// // * Good post
// // * Very good post
// // * Wow!