function start(input){
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();
    let result;
    let type;
        switch(operator){
            
            case "*":
                if(n1 * n2 % 2 == 0){
                    result = n1 * n2;
                    type = "even";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }else{
                    result = n1 * n2;
                    type = "odd";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }
            case "+":
                if(n1 + n2 % 2 == 0){
                    result = n1 + n2;
                    type = "odd";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }else{
                    result = n1 + n2;
                    type = "even";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }
            case "-":
                if(n1 - n2 % 2 == 0){
                    result = n1 - n2;
                    type = "even";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }else{
                    result = n1 - n2;
                    type = "odd";
                    console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
                    break;
                }
            case "/":
                    if(n2 == 0){
                        console.log(`Cannot divide ${n1} by zero`);
                        break;
                    }else{
                        result = n1 / n2;
                        console.log(`${n1} / ${n2} = ${result}`)
                        break;
                    } 
            case "%":
                    if(n2 == 0){
                        console.log(`Cannot divide ${n1} by zero`);
                        break;
                    }else{
                        result = n1 % n2;
                        console.log(`${n1} % ${n2} = ${result}`)
                        break;
                    }
        }
    }
start((["7",
"3",
"*"]))