function start(inputData){
    let word = inputData.shift().split(' ');
    let words = {};


    for(let x of word){
        words[x] = 0;
    }

    for(let x of inputData){
        if(words.hasOwnProperty(x)){
            words[x] += 1;
        }
    }

    let sortWords = Array.from(Object.entries(words)).sort((a,b) => b[1] - a[1]);


    for(let x of sortWords){
        console.log(`${x[0]} - ${x[1]}`);
    }

}
start([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    );