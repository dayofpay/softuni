function init(number){
    let totalSum = 0;

    for(let x = 0; x <= String(number).length -1;x++){
        totalSum+=Number(String(number)[x]);
    }

    let finalResult = String(totalSum).includes(9);


    console.log(finalResult ? number+= " Amazing? True" : number+=" Amazing? False");
}
init(999);