function check(num) {
    let divisors = [],
    sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

check(6);