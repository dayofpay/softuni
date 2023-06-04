function solve() {
    const inputNumber = document.getElementById("input");
    const selectFrom = document.getElementById("selectMenuFrom");
    const selectTo = document.getElementById("selectMenuTo");
    const resultOutput = document.getElementById("result");
  
    const convertNumber = () => {
      const decimalNumber = parseInt(inputNumber.value);
      const toOption = selectTo.value;
  
      let result = "";
  
      if (toOption === "binary") {
        result = decimalNumber.toString(2);
      } else if (toOption === "hexadecimal") {
        result = decimalNumber.toString(16).toUpperCase();
      }
  
      resultOutput.value = result;
    };
  
    selectTo.innerHTML = `
      <option value="binary">Binary</option>
      <option value="hexadecimal">Hexadecimal</option>
    `;
  
    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", convertNumber);
  }
  