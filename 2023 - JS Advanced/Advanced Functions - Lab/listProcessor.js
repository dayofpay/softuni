function result(data) {
    let result = [];
  
    for (let x = 0; x < data.length; x++) {
      let commandArgs = data[x].split(' ');
  
      let command = commandArgs[0];
  
      let commandData = commandArgs[1];
  
      if (command === 'add') {
        result.push(commandData);
      } else if (command === 'remove') {
        result = result.filter(x => x !== commandData);
      } else if (command === 'print') {
        console.log(result.join(','));
      }
    }
  }
  
  result(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
  