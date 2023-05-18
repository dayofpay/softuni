function start(numberData){
    let result = [];

    for(let number of numberData){
        number < 0 ? result.unshift(number) : result.push(number)
    }
    console.log(result.join('\n'));
}
start([7, -2, 8, 9])