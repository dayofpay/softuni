function start(inputData){
    let words = new Map();
    for(let x of inputData){
        if(words.has(x)){
            let getOldCount = words.get(x);
            words.set(x,++getOldCount);
        }
        else{
            words.set(x,1);
        }
    }
    let sortWords = Array.from(words).sort((a,b) => b[1] - a[1]);
    for(let word of sortWords){
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}
start(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);