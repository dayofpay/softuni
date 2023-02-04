function start(num1,num2,num3){
    let count = 0;
    if (num1 < 0) {
      count++;
    }
    if (num2 < 0) {
      count++;
    }
    if (num3 < 0) {
      count++;
    }
    console.log(count % 2 === 0 ? 'Positive' : 'Negative');
}
start(4,2,3);