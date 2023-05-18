function start(numberData){

    // Sort Array
    let sortedArray = numberData.sort((a,b) => a-b);

    // First Half ( Bigger )
    let firstHalf = []
    // Second half ( Smaller )
    let secondHalf = [];
    // Get smaller half
    for(let x = Math.floor(sortedArray.length /2); x<sortedArray.length;x++){
        secondHalf.push(sortedArray[x]);
    }
    // Get bigger half
    for(let b = 0;b<Math.floor(sortedArray.length/2);b++){
        firstHalf.push(sortedArray[b]);
    }

    // Return the result :^)
    return sortedArray % 2 ===0 ? firstHalf : secondHalf;
}
console.log(start([3, 19, 14, 7, 2, 19, 6]));