function start(input) {

    // Solution 2
    let coffees = input.shift().split(' ');
    let commands = input.slice(1);
    
    for (let command of commands) {
      let [action, ...args] = command.split(' ');
      
      if (action === 'Include') {
        let coffee = args[0];
        coffees.push(coffee);
      } else if (action === 'Remove') {
        let position = args[0];
        let count = parseInt(args[1], 10);
        
        if (position === 'first') {
          coffees = coffees.slice(count);
        } else if (position === 'last') {
          coffees = coffees.slice(0, -count);
        }
      } else if (action === 'Prefer') {
        let index1 = parseInt(args[0], 10);
        let index2 = parseInt(args[1], 10);
        
        if (coffees[index1] !== undefined && coffees[index2] !== undefined) {
          [coffees[index1], coffees[index2]] = [coffees[index2], coffees[index1]];
        }
      } else if (action === 'Reverse') {
        coffees.reverse();
      }
    }
    
    console.log(`Coffees:`);
    console.log(`${coffees.join(' ')}`);
  }

start(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"]);


// Push TurkishCofee - Arabica,Liberica,Charr...,Magni...,Robusta,BulkCofee,StrongCofee
// Remove First 2 Charr...,Magni...,Robusta,BulkCofee,StrongCofee
// Remove last 1 : Charr...,Magni....,Rbousta,BulkCofee
// Prefer 3:1: Rbousta,Magi..,Char,BulkCofee

// Solution 1

function start(inputData){
    let coffeeList = inputData[0].split(" ");
    let commandCount = Number(inputData[1]);
    inputData.shift();
    inputData.shift();
    let commandList = inputData;
    
    for(let x = 0;x<commandCount;x++){
        // Get Command Data
        let commandData = commandList[x].split(" ");

        // Get Command Name
        let commandName = commandData[0];

        if(commandName ==="Include"){
            let getCoffee = commandData[1];
            coffeeList.push(getCoffee);
        }
        else if(commandName === "Remove"){
            let removeType = commandData[1]; // First OR Last
            let coffeeNum = Number(commandData[2]); // Number of cofees to remove

            if(coffeeList.length-1 < coffeeNum){

                // SKIP THIS COMMAND

                
            }
            else{
                if(removeType === "first"){
                    coffeeList.splice(0,coffeeNum);
                }
    
                else if(removeType === "last"){
                    coffeeList.splice(coffeeList.length-1,coffeeNum);
                }
            }
        }
        else if(commandName === "Prefer"){ // Change Cofee Index
            let cofeeOneIndex = Number(commandData[1]);
            let cofeeTwoIndex = Number(commandData[2]);


                if(coffeeList[cofeeOneIndex] !== undefined && coffeeList[cofeeTwoIndex] !== undefined){
                    let indexOne = coffeeList[cofeeOneIndex];
                    let indexTwo = coffeeList[cofeeTwoIndex];
                    coffeeList[cofeeOneIndex] = indexTwo;
                    coffeeList[cofeeTwoIndex] = indexOne;
                }
                else{
                    
                }
        }
        else if(commandName === "Reverse"){
            coffeeList.reverse();
        }
    }
    console.log(`Coffees:`);
    console.log(coffeeList.join(" "));
}