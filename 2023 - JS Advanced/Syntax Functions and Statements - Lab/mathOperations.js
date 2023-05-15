function start(numberOne,numberTwo,operation){
    let operations = {
        "+" : (num1,num2) => num1+num2,
        "-" : (num1,num2) => num1-num2,
        "*" : (num1,num2) => num1*num2,
        "/" : (num1,num2) => num1 / num2,
        "%" : (num1,num2) => num1 % num2,
        "**" : (num1,num2) => num1 ** num2
    }
    console.log(operations[operation](numberOne,numberTwo));
}
start(3,5.5,"*")