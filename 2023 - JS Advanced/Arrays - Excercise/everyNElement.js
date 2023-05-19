function start(array,n){
    let editedArray = [];
    for(let x = 0; x<=array.length;x+=n){
        if(x >= array.length){

        }
        else{
            editedArray.push(array[x])
        }
    }
    return editedArray;
}
console.log(start(['5',
'20',
'31',
'4',
'20'],
2));