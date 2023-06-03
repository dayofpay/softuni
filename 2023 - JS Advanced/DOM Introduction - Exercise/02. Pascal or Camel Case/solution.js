function solve() {
  let getText = document.getElementById('text').value;
  let getConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let conventionTypes = {
    "Camel Case": () => {
      let words = getText.split(' ');
      let camelCaseText = words[0].toLowerCase();
      
      for(let x = 1; x < words.length; x++) {
        camelCaseText += words[x][0].toUpperCase() + words[x].substring(1).toLowerCase();
      }
      result.innerText = camelCaseText;
      console.log(camelCaseText);
    },
    "Pascal Case": () => {
      let words = getText.split(' ');
      let pascalCaseText = "";
      for(let x = 0; x < words.length;x++){
        pascalCaseText+= words[x][0].toUpperCase() + words[x].substring(1).toLowerCase();
      }
      result.innerText = pascalCaseText;
      console.log(pascalCaseText);
    },
    "Error" : () => {
      console.log("Error!");
      result.innerText = "Error!";
    }
  }
  
  if(conventionTypes.hasOwnProperty(getConvention)){
    conventionTypes[getConvention]();
  }
  else{
    conventionTypes["Error"]();
  }
}
