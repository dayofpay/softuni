// WAY ONE

function start(input) {
    let password = input.shift();
    let command = input.shift();

    while (command !== "Done") {
        let tokens = command.split(" ");
        let action = tokens[0];

        if (action === "TakeOdd") {
            let newPass = "";
            for (let i = 1; i < password.length; i += 2) {
                newPass += password[i];
            }
            password = newPass;
            console.log(password);
        } else if (action === "Cut") {
            let startIndex = Number(tokens[1]);
            let length = Number(tokens[2]);
            let substr = password.substr(startIndex, length);
            password = password.replace(substr, "");
            console.log(password);
        } else if (action === "Substitute") {
            let substring = tokens[1];
            let substitute = tokens[2];

            if (!password.includes(substring)) {
                console.log("Nothing to replace!");
            } else {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            }
        }

        command = input.shift();
    }

    console.log(`Your password is: ${password}`);
}

start(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])

// WAY TWO

function start(inputData){
    let pointer = 0;
    let generatedPassword = "";
    let password = "";
    while(inputData[pointer] !== "Done"){
        let [command,arg1,arg2] = inputData[pointer].split(" ");
        // Tuk Koda
        if(command === "TakeOdd"){
            for(let x = 0; x < password.length;x++){
                if(x % 2 !== 0){
                    generatedPassword+=password[x];
                }
            }
            console.log(generatedPassword);
        }
        else if (command ==="Cut") {
            let startIndex = parseInt(arg1);
            let length = parseInt(arg2);
            let cutValue = generatedPassword.substring(startIndex, startIndex+length);
            generatedPassword = generatedPassword.replace(cutValue, "");
            console.log(generatedPassword);
          }
          
        
        else if(command === "Substitute"){
            if(generatedPassword.includes(arg1)){
                while(generatedPassword.includes(arg1)){
                    generatedPassword = generatedPassword.replace(arg1,arg2);
                }
                console.log(generatedPassword);
            }
            else{
                console.log("Nothing to replace!");
            }
        }
        else{
            password = inputData[pointer];
        }
        //
        pointer++;
    }
    console.log("Your password is: " + generatedPassword);
}

