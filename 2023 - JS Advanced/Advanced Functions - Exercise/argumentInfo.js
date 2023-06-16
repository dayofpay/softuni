function start() {
    const argTypes = {};
    
    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      const type = typeof arg;
      

      console.log(`${type}: ${arg}`);
      

      if (argTypes[type]) {
        argTypes[type]++;
      } else {
        argTypes[type] = 1;
      }
    }
    

    const sortedTypes = Object.keys(argTypes).sort((a, b) => argTypes[b] - argTypes[a]);
    for (const type of sortedTypes) {
      console.log(`${type} = ${argTypes[type]}`);
    }
  }
  
start('cat', 42, function () { console.log('Hello world!'); });