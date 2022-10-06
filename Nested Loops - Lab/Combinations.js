function start(input){
    let validOperations = 0;
    for(let x =0; x<= Number(input);x++){
        for(let b= 0; b<=Number(input); b++){
            for(let c = 0; c<=Number(input);c++){
                if(x+b+c === Number(input)){
                    validOperations++;
                }else{
                    
                }
            }
        }
    }
    console.log(validOperations);
}
start(["20"]);