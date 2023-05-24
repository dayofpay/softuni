function start(data){
    let result = {};
    for(let x = 0 ;x < data.length; x+=2){
        result[data[x]] = Number(data[x+1]);
    }
    console.log(result);
}
start(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']);