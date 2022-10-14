function start(input){
    let currentNum = 1;
    let isBigger = false;
    let currentLine = "";
    for(let x = 1;x<=Number(input[0]);x++){
        for(let b = 1; b <= x;b++){
            if(currentNum > Number(input[0])){
                isBigger = true;
                break;
            }
            currentLine+= currentNum + " ";
            currentNum++;
        }
        console.log(currentLine);
        currentLine = "";
        if(isBigger){
            break;
        }
    }
}
start(["7"]);