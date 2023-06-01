function editElement(ref,match,replaceText) {
    let getText = ref.textContent;
    let regex = new RegExp(match,'g')
    let res = getText.replace(regex,replaceText);
    ref.textContent = res;
}