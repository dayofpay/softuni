function start(inputData){
    let groceries = inputData[0].split("!");


    let pointer = 0;


    while(inputData[pointer] !=="Go Shopping!"){
        let command = inputData[pointer].split(" ");
        // Get Product - (command[1]);
        // Get Status (Urgent,Correct etc) - (command[0]);

        if(command[0] ==="Urgent"){
            if(groceries.includes(command[1])){
            }
            else{
                groceries.unshift(command[1]);
            }
        }
        else if(command[0] === "Unnecessary"){
            let getPos = groceries.indexOf(command[1]);
            if(getPos > -1){
                groceries.splice(getPos,1);
            }
        }
        else if(command[0] === "Correct"){
            // Old Item = command[1]
            // New Item = command[2]

            // Find Old Item

            let oldItem = groceries.indexOf(command[1]);

            groceries[oldItem] = command[2];
        }
        else if(command[0] === "Rearrange"){
            if(groceries.indexOf(command[1]) > -1){
                groceries.splice(groceries.indexOf(command[1]),1);
                groceries.push(command[1]);
            }
            else{

            }
        }
        pointer++;
    }
    console.log(groceries.join(", "));
}
start(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

;
