function start(array, rotations) {
    let finalResult = "";
    let startIndex = rotations % array.length;
    for (let i = startIndex; i < array.length; i++) {
        finalResult += array[i] + " ";
    }
    for (let i = 0; i < startIndex; i++) {
        finalResult += array[i] + " ";
    }
    console.log(finalResult);
}
start([2, 4, 15, 31], 5);