function merge(arrayOne, arrayTwo) {
    let mergedArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 === 0) {
            mergedArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        } else {
            mergedArray.push(arrayOne[i] + arrayTwo[i]);
        }
    }
    console.log(mergedArray.join(" - "));
}

merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);