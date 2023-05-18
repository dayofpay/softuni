function start(n, k) {
    let sequence = [1];
  
    for (let i = 1; i < n; i++) {
      let sum = 0;
      let start = Math.max(0, i - k);
  
      for (let j = start; j < i; j++) {
        sum += sequence[j];
      }
  
      sequence.push(sum);
    }
  
    return sequence;
  }
  
 console.log(start(6, 3));
  