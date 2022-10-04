function start(input){
    let number = Number(input);
    for(let i = 1; i<= 10;i++){
        console.log(`${i} * ${number} = ${i * number}`);
    }
}
start(["5"]);