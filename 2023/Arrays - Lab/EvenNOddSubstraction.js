function calc(data){
    let evenSum = 0;
    let oddSum = 0;
    data.forEach(number=> {
        if(number % 2 === 0){
            evenSum+=number;
        }else{
            oddSum+=number;
        }
    });

    // Final Result

    console.log(evenSum-oddSum);
}
calc([1,2,3,4,5,6]);