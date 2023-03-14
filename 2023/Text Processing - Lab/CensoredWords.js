function start(word,censoredWord){

    while(word.includes(censoredWord)){
        word = (word.replace(censoredWord,'*'.repeat(censoredWord.length)));

    }
    console.log(word);
}
start('A small sentence with some words', 'small')