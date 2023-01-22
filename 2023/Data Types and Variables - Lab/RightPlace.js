function getRight(word,character,result){
    let res = String(word).replace('_',character);
    console.log(res === result ? "Matched" : "Not Matched");
}