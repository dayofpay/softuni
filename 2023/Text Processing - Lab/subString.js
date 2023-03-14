function start(sentence,startIndex,count){
    let result;

    result = sentence.substring(startIndex,++count);
    // for(let startI = startIndex; startI <= count;startI++){
    //     result += sentence[startI]
    // }
     console.log(result);
}
start('ASentence', 1, 8);