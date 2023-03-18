function start(str) {
    let result = '';
    let lastChar = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char !== lastChar) {
        result += char;
        lastChar = char;
      }
    }
    console.log(result);
  }
start('aaaaabbbbbcdddeeeedssaa');