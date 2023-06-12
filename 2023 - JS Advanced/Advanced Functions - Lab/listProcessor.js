// function result(commands) {
//     let collection = [];

//     const executeCommand = {
//       add: (item) => collection.push(item),
//       remove: (item) => collection = collection.filter(x => x !== item),
//       print: () => console.log(collection.join(','))
//     };
  
//     Array.from(commands).forEach(command => {
//       let [action, value] = command.split(' ');
//       executeCommand[action](value);
//     });
//   }
//   result(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
  


function result() {
    let collection = '';
  
    return {
      append: (text) => (collection += text),
      removeStart: (n) => (collection = collection.slice(n)),
      removeEnd: (n) => (collection = collection.slice(0, -n)),
      print: () => console.log(collection)
    };
  }