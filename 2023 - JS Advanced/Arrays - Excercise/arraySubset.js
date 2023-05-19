function start(numbers) {
    let array = [];
    let biggestNum = 0;

    for (let x = 0; x < numbers.length; x++) {
        // if(numbers[x] > biggestNum){
        //     biggestNum = numbers[x];
        //     array.push(numbers[x]);
        // }

        if(numbers[x] < biggestNum){

        }
        else if(biggestNum === numbers[x] || numbers[x] > biggestNum){ // '>=' Е равносилно на това което съм написал, просто по някаква причина реших да използвам condition-a по този начин :D 
            biggestNum = numbers[x];
            array.push(numbers[x]);
        }
    }
    return array;
}
console.log(start([1,
    2,
    3,
    4]));