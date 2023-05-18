function start(data){
    let allNums = [];
    for(let x = 0; x< data.length;x++){
        for(let b of data[x]){
            allNums.push(data[x][data[x].indexOf(b)]);
        }
    }

    return Math.max(...allNums);
}
console.log(start([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));