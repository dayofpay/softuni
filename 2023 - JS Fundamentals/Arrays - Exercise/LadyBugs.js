function init(input) {
    let size = input[0];
    let initialIndexes = input[1].split(" ").map(Number);
    let field = new Array(size).fill(0);
    initialIndexes.forEach(index => {
        if (index >= 0 && index < size) {
            field[index] = 1;
        }
    });
    for (let i = 2; i < input.length; i++) {
        let [index, direction, length] = input[i].split(" ");
        index = Number(index);
        length = Number(length);
        if (index < 0 || index >= size) {
            continue;
        }
        if (field[index] === 0) {
            continue;
        }
        field[index] = 0;
        let newIndex = direction === "right" ? index + length : index - length;
        while (newIndex >= 0 && newIndex < size) {
            if (field[newIndex] === 0) {
                field[newIndex] = 1;
                break;
            }
            newIndex = direction === "right" ? newIndex + length : newIndex - length;
        }
    }
    console.log(field.join(" "));
}
