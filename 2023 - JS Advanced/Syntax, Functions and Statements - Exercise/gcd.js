function start(x,y){
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  console.log(x);
}
start(2154, 458);