function start(data) {
    let carsList = {};
  
    for (let car of data) {
      let [brandName, modelName, price] = car.split(' | ');
  
      if (carsList[brandName] && carsList[brandName][modelName]) {
        carsList[brandName][modelName] += Number(price);
      } else {
        if (!carsList[brandName]) {
          carsList[brandName] = {};
        }
        carsList[brandName][modelName] = Number(price);
      }
    }
  
    for(let car in carsList){
        let currentCar = car;
        console.log(currentCar);
        let model = carsList[currentCar];
        // console.log(`###${Object.entries(model).join('\n')}`);
        for(let mData of Object.entries(model)){
            console.log(`###${mData[0]} -> ${mData[1]}`);
        }
  }
}
  start([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
  ]);