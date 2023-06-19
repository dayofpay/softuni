function start(arr,startIndex,endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex > arr.length - 1){
        endIndex = arr.length - 1;
    }

    let sum = 0;

    for(let x = startIndex; x <= endIndex; x++){
        if(typeof arr[x] === 'number'){
            sum += arr[x];
        }
        else{
            return NaN;
        }
    }

    return sum;
}
console.log(start('text', 0, 2));