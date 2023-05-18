function start(numberData){
    let sortedArray = numberData.sort((a,b) => a-b);
    let firstHalf = []
    let secondHalf = [];
    for(let x = Math.floor(sortedArray.length /2); x<sortedArray.length;x++){
        secondHalf.push(sortedArray[x]);
    }
    for(let b = 0;b<Math.floor(sortedArray.length/2);b++){
        firstHalf.push(sortedArray[b]);
    }

    return sortedArray % 2 ===0 ? firstHalf : secondHalf;
}
console.log(start([3, 19, 14, 7, 2, 19, 6]));