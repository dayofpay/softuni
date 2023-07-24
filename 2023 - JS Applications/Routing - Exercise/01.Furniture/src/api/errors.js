export function showError(errCode){
    let errors = {
        "409" : "User Already Exists",
        "400" : "Missing Fields"
    }

    if(errors.hasOwnProperty(errCode)){
        return errors[errCode];
    }
    else{
        return false;
    }
}