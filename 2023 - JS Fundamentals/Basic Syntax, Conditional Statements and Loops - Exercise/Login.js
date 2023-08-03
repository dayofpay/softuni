function login(inputData){

    // Генериране на обърната парола


    let reversedPassword = "";
    for(let x = inputData[0].length -1; x >= 0;x--){
        reversedPassword += (inputData[0][x]);
    }

    let numTry = 1;

    while(numTry <= 4){
        if(numTry === 4 && inputData[numTry] != reversedPassword){
            console.log(`User ${inputData[0]} blocked!`);
            break;
        }
        else if(inputData[numTry] != reversedPassword){
            console.log('Incorrect password. Try again.');
            numTry++;
        }
        else if(inputData[numTry] === reversedPassword){
            console.log(`User ${inputData[0]} logged in.`);
            break;
        }
    }
}
login(['Acer','login','go','let me in','recA']);