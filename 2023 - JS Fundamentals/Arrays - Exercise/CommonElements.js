function start(arrayOne,arrayTwo){
    for(let x = 0; x < arrayOne.length;x++){
        for(let b = 0; b < arrayTwo.length;b++){
            if(arrayOne[x] === arrayTwo[b]){
                console.log(arrayOne[x]);
            }
        }
    }
}
start(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);
