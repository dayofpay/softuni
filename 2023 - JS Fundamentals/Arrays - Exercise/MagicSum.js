function calc(array, equalNum) {
    for(let x = 0; x < array.length;x++){
        for(let b = x;b<array.length;b++){
            if(array[x] === array[b]){

            }
            else if((array[x] + array[b] === equalNum)){
                console.log(array[x] + " " + array[b]);
            }
        }
    }
}

calc([1, 2, 3, 4, 5, 6],
    6	);
