function start(dataActions) {
    let number = 1;
    let array = [];
  
    for (let action of dataActions) {
      if (action === "add") {
        array.push(number);
      } else if (action === "remove") {
        if (array.length > 0) {
          array.pop();
        }
      }
      number += 1;
    }
  
    if (array.length === 0) {
      console.log("Empty");
    } else {
      console.log(array.join("\n"));
    }
  }
  
  start(['add', 'add', 'add', 'add']);
  