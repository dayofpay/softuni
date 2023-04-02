function start(inputData){
    let pointer = 0;
    let myString = "";
    while(inputData[pointer] !== "Done"){
        let command = inputData[pointer].split(' ');


        if(command[0] === "Change"){
            if(myString.includes(command[1])){
                while(myString.includes(command[1])){
                    myString = myString.replace(command[1],command[2]);
                }
            }
            console.log(myString);
        }
        else if(command[0] === "Includes"){
            if(myString.includes(command[1])){
                console.log("True");
            }
            else{
                console.log("False");
            }
        }
        else if(command[0] === "Uppercase"){
            myString = myString.toUpperCase();
            console.log(myString);
        }
        else if(command[0] === "FindIndex"){
            console.log(myString.indexOf(command[1]));
        }
        else if(command[0] === "Cut"){
            let getCount = Number(command[1]) + Number(command[2]);
            myString = myString.slice(command[1],getCount);
            console.log(myString);
        }
        else if(command[0] === "End"){
            if(myString.endsWith(command[1])){
                console.log("True");
            }
            else{
                console.log("False");
            }
        }
        else{
            myString = inputData[pointer];
        }
        pointer++
    }
}
start(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
