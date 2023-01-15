function check(input) {
    for (let x = 0; x <= input.length - 1; x++) {
        let reversed = "";
        for (let z = input[x].toString().length - 1; z >= 0; z--) {
            reversed += input[x].toString()[z];
        }
        if (reversed === input[x].toString()) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

check([123,323,421,121]);