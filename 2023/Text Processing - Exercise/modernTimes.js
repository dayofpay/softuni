function start(inputData){
    let test = inputData.split(' ');


    for(let x of test){
        if(x.includes("#")){
            let b = x.split("#");
            if(b[1] === "" || /\d/.test(b[1])){ // RegEx Test

            }
            else{
                console.log(b[1]);
            }
        }
    }
}

start('The symbol # is known #variously in English-speaking #regions as the #number sign');