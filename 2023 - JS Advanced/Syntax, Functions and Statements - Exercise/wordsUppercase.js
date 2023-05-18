function start(inputData) {
    let words = inputData.match(/\b\w+\b/g);
    let uppercasedWords = words.map(word => word.toUpperCase());
    let result = uppercasedWords.join(', ');
  
    console.log(result);
  }
  