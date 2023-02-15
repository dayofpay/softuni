function start(inputData){


    let wagons = inputData[0].split(' ').map(Number); 
    const maxCapacity = Number(inputData[1]); 
    
    for (let i = 2; i < inputData.length; i++) {
      const command = inputData[i];
    
      if (command.startsWith('Add')) {
        const passengers = Number(command.split(' ')[1]);
        wagons.push(passengers);
      } else {
        const passengers = Number(command);
        for (let j = 0; j < wagons.length; j++) {
          const space = maxCapacity - wagons[j];
          if (space >= passengers) {
            wagons[j] += passengers;
            break;
          }
        }
      }
    }
    
    console.log(wagons.join(' ')); 
    
    
}
start(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])