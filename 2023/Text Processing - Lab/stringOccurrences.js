function start(string,word){
    let totalCount = 0;

    let words = string.split(' ');
    for(let string of words){
        if(string=== word){
            totalCount++;
        }
    }

    console.log(totalCount);
}
start('This is a word and it also is a sentence',
'is'

)