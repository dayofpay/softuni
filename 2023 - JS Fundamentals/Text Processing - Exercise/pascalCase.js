function split(str) {
    // RegEx решение :
    // const words = str.match(/[A-Z][a-z]+/g);
    // console.log(words.join(', '));
    let result = [];
    let startIndex = 0;
    for(let i = 1; i < str.length;i++){
        let endIndex = i;
        let ch = str[i];

        if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
            result.push(str.substring(startIndex,endIndex));
            startIndex = i;
        }
    }
    result.push(str.substring(startIndex));
    let final = "";
    let iterator = 0;
    for(let x of result){
        iterator++;
        if(iterator === result.length){
            final+=x;
        }
        else{
            final+=x+", ";
        }
    }
    console.log(final);
    // Опростен вариант №2 - console.log(result.join(', '));
  }
  
split('SplitMeIfYouCanHaHaYouCantOrYouCan');