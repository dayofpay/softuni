function subtract() {
    let getFNumberValue = document.getElementById('firstNumber').value;
    let getSNumberValue = document.getElementById('secondNumber').value;
    let calculation = document.getElementById('result').innerText = Number(getFNumberValue) - Number(getSNumberValue);
}