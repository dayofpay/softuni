function init(num){
    let n = num;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        string += i + ' ';
      }
      string += "\n";
    }
    console.log(string);
}
init(5);