function start(inputData){
    let stringSequences = inputData.split(/\s+/);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let finalSum = 0;
  
    for (let b of stringSequences) {
      let num = "";
      let before = "";
      let after = "";
      for (let i = 0; i < b.length; i++) {
        let char = b.charAt(i);
        if (/[A-Za-z]/.test(char)) {
          if (num === "") {
            before = char;
          } else {
            after = char;
            break;
          }
        } else if (/[0-9]/.test(char)) {
          num += char;
        }
      }
      let number = parseInt(num);
      let position = alphabet.indexOf(before.toUpperCase()) + 1;
      if (before === before.toUpperCase()) {
        number /= position;
      } else {
        number *= position;
      }
      position = alphabet.indexOf(after.toUpperCase()) + 1;
      if (after === after.toUpperCase()) {
        number -= position;
      } else {
        number += position;
      }
      finalSum += number;
    }
  
    console.log(finalSum.toFixed(2));
  }
start('P34562Z q2576f   H456z');