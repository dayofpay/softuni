function start(string,repeatNum){
    let updatetedString = "";
    for(let x = 1;x<=repeatNum;x++){
        updatetedString+=string;
    }
    console.log(updatetedString);
}
start("abc",3);