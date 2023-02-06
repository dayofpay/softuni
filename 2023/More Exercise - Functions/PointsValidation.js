function start(inputData) {
    function isDistanceValid(x1, y1, x2, y2) {
        return (Number.isInteger(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))));
    }

    let x1 = inputData[0];
    let y1 = inputData[1];
    let x2 = inputData[2];
    let y2 = inputData[3];

    if (isDistanceValid(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isDistanceValid(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isDistanceValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

start([3, 0, 0, 4]);