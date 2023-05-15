function start(wordOne,wordTwo,wordThree){
    let totalLength = wordOne.length + wordTwo.length + wordThree.length;
    let avgLength = totalLength / 3;
    console.log(totalLength);
    console.log(avgLength.toFixed());
}
start('pasta', '5', '22.3' );