function create(pass){
    let lengthEnough = (pass.length >=6) && (pass.length <=10);


    let numDigits = pass.replace(/[^0-9]/g, '').length


    let atLeastTwoDigits = numDigits >=2;


    let hasSymbols = Boolean(pass.match(/[!@#$%^&*(),.?":{}|<>]/g));

    // checkChars
    if(!lengthEnough){
        console.log('Password must be between 6 and 10 characters');
    }
    // Check Only Leters & Digits

    if(hasSymbols){
        console.log('Password must consist only of letters and digits');
    }

    // Check at least two digits
    if(!atLeastTwoDigits){
        console.log('Password must have at least 2 digits');
    }

    // Validator
    if (lengthEnough && !hasSymbols && atLeastTwoDigits){
        console.log('Password is valid');
    }
}
create("MyPass12");