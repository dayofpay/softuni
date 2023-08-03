function init(numberOne,numberTwo){
    let totalSum =0;
    let numbers = '';
    for(let startNum = numberOne; startNum <= numberTwo;startNum++){
        numbers += `${startNum} `;
        totalSum+=startNum;
    }
    console.log(numbers);
    console.log(`Sum: ${totalSum}`);
}
init(50,60);