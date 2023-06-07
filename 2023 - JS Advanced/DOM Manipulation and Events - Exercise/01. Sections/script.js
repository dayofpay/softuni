function create(words) {
   let createElement = document.getElementById('content');


   for (let word of words) {
      let words = createElement.appendChild(document.createElement('div'));
      let createParagraph = document.createElement('p');
      let elementText = document.createTextNode(word);

      createParagraph.appendChild(elementText);

      words.appendChild(createParagraph);

      createElement.addEventListener('click', revealWord);

      createParagraph.style.display = "none";

   }


   document.body.appendChild(createElement);

   function revealWord(e) {
      let clickedDiv = e.target;
      let paragraph = clickedDiv.querySelector('p');

      paragraph.style.display = "inline";
   }

}