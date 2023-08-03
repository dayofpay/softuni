function getNum(array) {
    let finalResult = "";
    for (let i = 0; i < array.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            finalResult += array[i] + " ";
        }
    }
    console.log(finalResult);
}
getNum([14, 24, 3, 19, 15, 17]);
