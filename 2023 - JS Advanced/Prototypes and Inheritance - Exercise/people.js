function solution() {
    class Employee {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.tasks = [];
        this.currentTaskIndex = 0;
        this.salary = 0;
        this.bonuses = 0;
      }
  
      work() {  
        console.log(this.tasks[this.currentTaskIndex]);
        this.currentTaskIndex = (this.currentTaskIndex + 1) % this.tasks.length;
      }
  
      collectSalary() {
        console.log(`${this.name} received ${this.salary + this.bonuses} this month.`);
      }
    }
  
    class Junior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          `${this.name} is working on a simple task.`,
        ];
      }
    }
  
    class Senior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          `${this.name} is working on a complicated task.`,
          `${this.name} is taking time off work.`,
          `${this.name} is supervising junior workers.`,
        ];
      }
    }
  
    class Manager extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          `${this.name} scheduled a meeting.`,
          `${this.name} is preparing a quarterly report.`,
        ];
        this.dividend = 0;
      }
  
      collectSalary() {
        console.log(`${this.name} received ${this.salary + this.bonuses + this.dividend} this month.`);
      }
    }
  
    return {
      Employee,
      Junior,
      Senior,
      Manager,
    };
  }
  
  const classes = solution();
  
  const junior = new classes.Junior('Ivan', 25);
  junior.work();
  junior.work();
  junior.salary = 5811;
  junior.collectSalary();
  
  const senior = new classes.Senior('Alex', 31);
  senior.work();
  senior.work();
  senior.work();
  senior.work();
  senior.salary = 12050;
  senior.collectSalary();
  
  const manager = new classes.Manager('Tom', 55);
  manager.salary = 15000;
  manager.collectSalary();
  manager.dividend = 2500;
  manager.collectSalary();

  // Another solution :^)

//   function solution() {
//     class Employee {
//       constructor(name, age) {
//         this.name = name;
//         this.age = age;
//       }
  
//       seniorCounter = 0;
//       managerCounter = 0;
//       salary = 0;
//       dividend = 0;
  
//       work() {
//         if (this instanceof Senior) {
//           let superVisingTasks = {
//             0: `${this.name} is working on a complicated task.`,
//             1: `${this.name} is taking time off work.`,
//             2: `${this.name} is supervising junior workers.`,
//           };
//           console.log(superVisingTasks[this.seniorCounter]);
//           this.seniorCounter >= 2 ? (this.seniorCounter = 0) : this.seniorCounter++;
//         } else if (this instanceof Manager) {
//           let managerTasks = {
//             0: `${this.name} scheduled a meeting`,
//             1: `${this.name} is preparing a quarterly report.`,
//           };
//           console.log(managerTasks[this.managerCounter]);
//           this.managerCounter >= 2 ? (this.managerCounter = 0) : this.managerCounter++;
//         }
//         else if(this instanceof Junior){
//             console.log(`${this.name} is working on a simple task.`);
//         }
//       }
  
//       collectSalary() {
//         console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
//       }
  
//       set salary(value) {
//         this.salary = value;
//       }
  
//       get salary() {
//         return this.salary;
//       }
  
//       set dividend(value) {
//         this.dividend = value;
//       }
  
//       get dividend() {
//         return this.dividend;
//       }
//     }
  
//     class Junior extends Employee {
//       constructor(name, age) {
//         super(name, age);
//       }
//     }
  
//     class Senior extends Employee {}
  
//     class Manager extends Employee {}
  
//     return {
//       Employee,
//       Junior,
//       Senior,
//       Manager,
//     };
//   }
  