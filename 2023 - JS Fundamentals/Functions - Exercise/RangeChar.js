function start(a, b) {
    let firstChar = a.charCodeAt();
    let secondChar = b.charCodeAt();
    let result = "";
    if(firstChar > secondChar){
        let temp = firstChar;
        firstChar = secondChar;
        secondChar = temp;
    }
    for (let x = firstChar + 1; x <= secondChar - 1; x++) {
        result += (String.fromCharCode(x)) + " ";
    }
    console.log(result);
}

start('a','d');
