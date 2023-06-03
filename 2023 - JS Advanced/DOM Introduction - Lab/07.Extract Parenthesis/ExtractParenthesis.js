function extract(content) {
    let getContent = document.getElementById(content);
    let result = [];
    let test = getContent.innerHTML;
    let start = 0;
    
    while (start < test.length) {
      if (test[start] === "(") {
        let end = test.indexOf(")", start + 1); 
        if (end !== -1) {
          let extractedText = test.substring(start + 1, end);
          result.push(extractedText.trim());
          start = end + 1;
        } else {
          break;
        }
      } else {
        start++;
      }
    }
    
    return result.join("; ");
  }
  