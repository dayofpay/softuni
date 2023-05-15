function start(number){
    if(typeof number !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof number}.`);
    }
    else{
        let result = Math.pow(number,2) * Math.PI;
        console.log(result.toFixed(2));
    }
}
start('name')