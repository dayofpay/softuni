function start(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakeSize = length * width;
    let counter = 2;
    let operation = input[counter];
    let totalParts = 0;
    while(input[counter] != "STOP"){
        let cakeParts = Number(operation);
        totalParts+= cakeParts;
        if(totalParts > cakeSize){
            console.log(`No more cake left! You need ${totalParts - cakeSize} pieces more.`);
            break;
        }
        counter++;
        operation = input[counter];
    }
    if(operation === "STOP" && totalParts <= cakeSize){
        console.log(`${cakeSize - totalParts} pieces are left.`);
    }
}

start(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);