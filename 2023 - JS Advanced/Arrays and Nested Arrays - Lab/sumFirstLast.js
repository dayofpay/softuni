function start(numbers){
    let firstElement = numbers[0];
    let lastElement = numbers.length-1;

    return (Number(firstElement) + Number(numbers[lastElement]));
}
console.log(start(['5','10']));