function start(inputData) {
    const concatString = inputData[0] + inputData[1];
    let concatArray = [];
  
    for (let x of concatString) {
      concatArray.push(x.toLowerCase());
    }
  
    let password = '';
    let vowelIndex = 0;
  
    for (let x = 0; x < concatArray.length; x++) {
      const char = concatArray[x];
  
      if (/[aeiou]/i.test(char)) {
        const replaceChar = inputData[2][vowelIndex % inputData[2].length].toUpperCase();
        password += replaceChar;
        vowelIndex++;
      } else {
        password += char;
      }
    }
  
    const reversedPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${reversedPassword}`);
  }
start([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )