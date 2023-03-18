function start(searchWord,sentence){
    // if(String(sentence).toLowerCase().includes(searchWord)){
    //     console.log(searchWord);
    // }
    // else{
    //     console.log(`${searchWord} not found!`);
    // }

    let findWord = false;
    for(let word of sentence.toLowerCase().split(" ")){
        if(word === searchWord){
            console.log(word);
            findWord = true;
        }
    }
    if(!findWord){
        console.log(`${searchWord} not found!`);
    }
}
start('javascript',
'JavaScript is the best programming language'
)