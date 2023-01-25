function rev(n,inArr){
    let numArray = [];
    for(let x = n; x >= 1;x--){
        numArray+=inArr[x-1] + " ";
    }
    console.log(numArray);
}
rev(4,[-1,20,99,5]);