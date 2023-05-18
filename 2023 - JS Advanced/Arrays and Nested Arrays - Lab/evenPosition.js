function start(data){
    let result = "";
    for(let x = 0;x< data.length;x++){
        if(x % 2 ===0){
            result += data[x] + " ";
        }
    }
    console.log(result);
}
start(['20', '30', '40',
'50', '60']);