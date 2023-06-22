function extensibleObject() {
    // Empty object as the instance
    const obj = {};
  
    // Define the extend method on the prototype
    obj.__proto__.extend = function (template) {
      // Copy properties from the template
      for (let prop in template) {
        if (typeof template[prop] === 'function') {
          // Add functions to the prototype
          obj.__proto__[prop] = template[prop];
        } else {
          // Copy other properties to the instance
          obj[prop] = template[prop];
        }
      }
    };
  
    return obj;
  }
  
  // Create an instance of extensibleObject
  const myObj = extensibleObject();
  
  // Test the initial state of myObj
  console.log(myObj); // { __proto__: {}, extend: [Function] }
  
  // Define a template object
  const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
  };
  
  // Extend myObj using the template
  myObj.extend(template);
  
  // Test the state of myObj after extending it
  console.log(myObj);
  // {
  //   __proto__: {
  //     extensionMethod: [Function]
  //   },
  //   extend: [Function],
  //   extensionProperty: 'someString'
  // }
  