function extractText() {
    let getElements = document.getElementsByTagName('li');
    let elementsToArray = Array.from(getElements);

    let allTexts = elementsToArray.map(x => x.textContent);

    let textArea = document.getElementById('result').value = allTexts
}