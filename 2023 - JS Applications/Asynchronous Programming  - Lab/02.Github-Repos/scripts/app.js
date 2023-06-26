function loadRepos() {
	let button = document.getElementById('btn');
	let gitUsername = document.getElementById('username').value;

	let repos;
	button.addEventListener('click', function loadRepos() {
		// Важно  : GitHub API-то има лимит от 30 repository-та на страница, за да обходим евентуалният остатък от резултата трябва да добавим параметър ?page=страница
	   let url = `https://api.github.com/users/${gitUsername}/repos`;
	   const httpRequest = new XMLHttpRequest();
	   httpRequest.addEventListener('readystatechange', function () {
		  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			repos = JSON.parse(httpRequest.response);


			for(let repository of repos){
				let createList = document.createElement('li');

				let anchor = document.createElement('a');
	
				anchor.setAttribute('href',repository["html_url"]);
	
				anchor.innerText = repository["name"];

				createList.appendChild(anchor)
				document.getElementById('repos').appendChild(createList);
				console.log(repository);
			}
		}
	   });

	   httpRequest.open("GET", url);
	   httpRequest.send();

	});
 }