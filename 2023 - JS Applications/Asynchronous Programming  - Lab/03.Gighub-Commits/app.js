// function loadCommits() {
//     let button = document.getElementById('btn');
//     let gitUsername = document.getElementById('username').value;
//     let gitRepository = document.getElementById('repo').value;
//     let repos;
//     button.addEventListener('click', function loadCommits() {
//         // Важно  : GitHub API-то има лимит от 30 repository-та на страница, за да обходим евентуалният остатък от резултата трябва да добавим параметър ?page=страница
//         let url = `https://api.github.com/repos/${gitUsername}/${gitRepository}/commits`;
//         const httpRequest = new XMLHttpRequest();
//         httpRequest.addEventListener('readystatechange', function () {
//             if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//                 repos = JSON.parse(httpRequest.response);

//                 for (let repository in repos) {
//                     let createList = document.createElement('li');

//                     createList.innerText = `${repos[repository]["commit"]["committer"]["name"]} : ${repos[repository]["commit"]["message"]}`

//                     document.getElementById('commits').appendChild(createList);

//                     console.log(repos[repository]["commit"]["committer"]["name"]);
//                 }
//             }
//             else if(httpRequest.status === 404){
//                 let errorItem = document.createElement('li');

//                 errorItem.innerText = `Error: ${httpRequest.status} (Not Found)`

//                 document.getElementById('commits').appendChild(errorItem);
//             }
//         });

//         httpRequest.open("GET", url);
//         httpRequest.send();

//     });
// }


// Fetch Data


function loadCommits() {
    let button = document.getElementById('btn');
    let gitUsername = document.getElementById('username').value;
    let gitRepository = document.getElementById('repo').value;
    let repos;
    button.addEventListener('click', function loadCommits() {
        // Важно  : GitHub API-то има лимит от 30 repository-та на страница, за да обходим евентуалният остатък от резултата трябва да добавим параметър ?page=страница
        let url = `https://api.github.com/repos/${gitUsername}/${gitRepository}/commits`;

        fetch(url).then(request => {
            request.json().then(finalData => {
                for (let data in finalData) {

                    let createList = document.createElement('li');

                    createList.innerText = `${finalData[data]["commit"]["committer"]["name"]} : ${finalData[data]["commit"]["message"]}`
                    document.getElementById('commits').appendChild(createList);
                    // console.log(finalData[data]["commit"]);
                }
            }).catch(error => {
                let errorItem = document.createElement('li');

                errorItem.innerText = `Error: 404 (Not Found)`

                document.getElementById('commits').appendChild(errorItem);
            })
        })
    });
}