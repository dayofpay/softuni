/* Решение №1

function start(input){
    let index = 0;
    let totalSteps = 0;
    while(totalSteps <= 10000){
         if(input[index] === "Going home"){
            index++;
            totalSteps += Number(input[index]);
            break;
        }
        else{
            totalSteps +=Number(input[index]);
            index++;
        }
        if(totalSteps >= 10000){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }
    }
    if(totalSteps < 10000){
            console.log(`${10000 - totalSteps} more steps to reach goal.`);
    
        }
}
/*Решение 2 */
function start(input) {
    let totalSteps = 0;
    let action = input.shift();
  
    while (totalSteps < 10000 && action !== 'Going home') {
      let steps = Number(action);
      totalSteps += steps;
      action = input.shift();
    }
  
    if (action === 'Going home') {
      let finalSteps = Number(input.shift());
      totalSteps += finalSteps;
    }
  
    if (totalSteps < 10000) {
      let finalResult = 10000 - totalSteps;
      console.log(`${finalResult} more steps to reach goal.`);
    } else {
      console.log('Goal reached! Good job!');
      let finalResult = totalSteps - 10000;
      console.log(`${finalResult} steps over the goal!`);
    }
  }

start(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);