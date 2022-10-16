function start(input){
    let n = Number(input[0]);
    if(n < 100){
        console.log("Less than 100");
    }
    else if (n >=100  && n <= 200){
        console.log("Between 100 and 200");
    }
    else{
        console.log("Greater than 200");
    }
}