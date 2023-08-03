function calc(num1,num2,num3){
    let finalCalc = num1+num2+num3;


    finalCalc % 1 === 0 ? finalCalc+=" - Integer" : finalCalc +=" - Float"


    console.log(finalCalc);
}