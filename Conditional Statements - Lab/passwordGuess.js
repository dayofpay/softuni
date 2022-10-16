function start(input){
    let password = "s3cr3t!P@ssw0rd";
    let userInputPassword = input[0];
    if(userInputPassword === password){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}