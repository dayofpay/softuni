function start(input){
    const numbers = [];
    let index = 0;
    while(input[index] !== "Stop"){
        numbers[index] = Number(input[index]);
        index++;
    }
    var lowest = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (lowest > numbers[i] ) {
            lowest = numbers[i];
        }
    }
    console.log(lowest);
}
start(["100",
"99",
"80",
"70",
"Stop"]);