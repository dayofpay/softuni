function init(arrayOne,arrayTwo){
    let totalSum = 0;
    let indexNum = 0;
    let equalIndex = true;
    for(let x = 0; x<arrayOne.length;x++){
        if(arrayOne[x]!==arrayTwo[x]){
            console.log(`Arrays are not identical. Found difference at ${x} index`);
            equalIndex = false;
            break;
        }
        else{
            totalSum+=Number(arrayOne[x]);
        }
    }
    if(equalIndex){
        console.log(`Arrays are identical. Sum: ${totalSum}`);
    }
}
init(['10','20','30'], ['10','20','30']);