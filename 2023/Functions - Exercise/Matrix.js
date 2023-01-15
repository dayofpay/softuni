function genMatrix(num){
    for(let x = 1;x<=num;x++){
        let theNum = "";
        for(let z = 1;z<=num;z++){
            theNum+=num + " ";
        }
        console.log(theNum);
    }
}
genMatrix(7);