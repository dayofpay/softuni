function start(x,y){
    let result = 0;
    for(let xZ = Number(x); xZ <= Number(y);xZ++){
        result+=xZ;
    }
    console.log(result);
}
start(-8,20)