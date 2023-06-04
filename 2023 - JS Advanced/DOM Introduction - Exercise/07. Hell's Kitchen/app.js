function solve() {
   let inputData = document.querySelector('textarea').value;
   let restaurants = inputData.split('\n').filter(line => line.trim() !== '');
 
   let records = {};
 
   for (let restaurant of restaurants) {
     let [name, workersData] = restaurant.split(' - ');
     let workers = workersData.split(', ');
 
     if (!records.hasOwnProperty(name)) {
       records[name] = { workers: [], totalSalary: 0, avgSalary: 0, bestSalary: 0 };
     }
 
     let restaurantRecord = records[name];
 
     for (let worker of workers) {
       let [workerName, salary] = worker.split(' ');
       let workerSalary = Number(salary);
       restaurantRecord.workers.push({ name: workerName, salary: workerSalary });
       restaurantRecord.totalSalary += workerSalary;
 
       if (workerSalary > restaurantRecord.bestSalary) {
         restaurantRecord.bestSalary = workerSalary;
       }
     }
 
     restaurantRecord.avgSalary = restaurantRecord.totalSalary / restaurantRecord.workers.length;
   }
 
   let bestRestaurant = '';
   let bestAvgSalary = 0;
 
   for (let name in records) {
     if (records.hasOwnProperty(name)) {
       let restaurantRecord = records[name];
 
       if (restaurantRecord.avgSalary > bestAvgSalary) {
         bestAvgSalary = restaurantRecord.avgSalary;
         bestRestaurant = name;
       }
     }
   }
 
   let outputElement1 = document.querySelector('#bestRestaurant > span');
   let outputElement2 = document.querySelector('#bestRestaurant > p');
 
   outputElement1.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${records[bestRestaurant].bestSalary.toFixed(2)}`;
 
   let workersOutput = 'Name: ';
 
   for (let worker of records[bestRestaurant].workers.sort((a, b) => b.salary - a.salary)) {
     workersOutput += `${worker.name} With Salary: ${worker.salary} `;
   }
 
   outputElement2.textContent = workersOutput.trim();
 }
