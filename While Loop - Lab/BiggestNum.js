function start(input){
    const numbers = [];
    let index = 0;
    while(input[index] !== "Stop"){
        numbers[index] = Number(input[index]);
        index++;
    }
    var largest = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (largest < numbers[i] ) {
            largest = numbers[i];
        }
    }
    console.log(largest);
}
start(["100",
"99",
"80",
"70",
"Stop"]);