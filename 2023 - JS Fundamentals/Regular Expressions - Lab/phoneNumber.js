function start(inputData){
    let regex = /\+359( |-)2\1\d{3}\1\d{4}\b/g;

    let result = [];

    for(let x =0;x< inputData.length;x++){
        let text = inputData[x];
        let match = text.match(regex);

        result = result.concat(match)
    }

    console.log(result.join(', '));
}
start(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);