function solve() {
  let inputData = document.getElementById('input').value;
  let sentences = inputData.split('.');
  let paragraphs = [];

  while (sentences.length > 0) {
    let paragraph = sentences.splice(0, 3).join('. ');
    paragraphs.push(paragraph);
  }

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';

  for (let paragraph of paragraphs) {
    const createParagraph = document.createElement('p');
    createParagraph.innerHTML = paragraph.trim();
    outputElement.appendChild(createParagraph);
  }
}
