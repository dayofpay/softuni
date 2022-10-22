function start(input){
    let n1 = Number(input[0]);
    for(let x = 1; x <= n1.toString()[2];x++){
        for(let b = 1; b<=n1.toString()[1];b++){
            for(let c= 1; c<= n1.toString()[0];c++){
                console.log(`${x} * ${b} * ${c} = ${x*b*c};`);
            }
        }
    }
}
start(["222"]);