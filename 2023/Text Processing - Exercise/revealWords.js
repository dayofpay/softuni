function start(replaceWord,word){
    let wordArray = replaceWord.split(', ');
    let textArray = word.split(' ');

    for(let word of wordArray){
        for(let element of textArray){
            let index = textArray.indexOf(element);

            if(element.includes('*') && element.length === word.length){
                textArray[index] = word;
            }
        }
    }

    console.log(textArray.join(' '));
}
start('great, learning','softuni is ***** place for ******** new programming languages');