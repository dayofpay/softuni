function calc(number,operator,number2){
    if(operator === '+'){
        console.log((number + number2).toFixed(2));
    }
    else if(operator === '-'){
        console.log((number - number2).toFixed(2));
    }
    else if(operator === '/'){
        console.log((number / number2).toFixed(2));
    }
    else if(operator === '*'){
        console.log((number * number2).toFixed(2));
    }
}
calc(1,'+',5);