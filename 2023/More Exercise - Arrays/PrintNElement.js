function start(data){
    // FIND STEP
    let step = Number(data[data.length-1]);
    // RESULT
    let finalResult = "";
    for(let x = 0;x<=data.length-1-1;x+=step){
        finalResult+=data[x] + " ";
    }
    console.log(finalResult);
}
start(['dsa', 'asd', 'test', 'test', '2']);