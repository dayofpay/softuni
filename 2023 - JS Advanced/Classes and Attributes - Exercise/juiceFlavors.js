function start(data) {
    let juices = {};
    let bottles = {};
  
    for (let j of data) {
      let [juice, quantity] = j.split(" => ");
      if (juices.hasOwnProperty(juice)) {
        juices[juice] += Number(quantity);
      } else {
        juices[juice] = Number(quantity);
      }
  
      while (juices[juice] >= 1000) {
        if (bottles.hasOwnProperty(juice)) {
          bottles[juice] += 1;
        } else {
          bottles[juice] = 1;
        }
        juices[juice] -= 1000;
      }
    }
  
    for (let bottle in bottles) {
      console.log(`${bottle} => ${bottles[bottle]}`);
    }
  }
  
  
  start(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']);
  
