class Company {
    constructor() {
        this.employees = []; // define employees as a property of the class
    }

    addEmployee(name, salary, position, department) {
        let employeeData = {
            name,
            salary,
            position,
            department
        }; // create an employee object
        const hasEmptyValues = Object.values(employeeData).includes('') || Object.values(employeeData).includes(null) || salary < 0;
        if (hasEmptyValues) {
            throw new Error('Invalid input!');
        } else {
            this.employees.push(employeeData); // add the employee to the employees array
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let salaries = {};
        let counts = {};

        // Calculate total salary and count for each department
        for (let x in this.employees) {
            let department = this.employees[x].department;
            let salary = this.employees[x].salary;

            if (salaries.hasOwnProperty(department)) {
                salaries[department] += salary;
                counts[department] += 1;
            } else {
                salaries[department] = salary;
                counts[department] = 1;
            }
        }

        // Calculate average salary for each department
        let averages = {};
        for (let department in salaries) {
            let totalSalary = salaries[department];
            let employeeCount = counts[department];
            let averageSalary = totalSalary / employeeCount;
            averages[department] = averageSalary;
        }

        // Find the department with the highest average salary
        let highestAverageSalary = Math.max(...Object.values(averages));
        let bestDepartment = Object.keys(averages).find(
            (department) => averages[department] === highestAverageSalary
        );

        // Generate the output string
        let employees = `Best Department is: ${bestDepartment}\nAverage salary: ${highestAverageSalary.toFixed(2)}\n`;

        // Sort employees by name in ascending order, and by salary in descending order
        let sortedEmployees = this.employees.sort((a, b) => {
            if (b.salary !== a.salary) {
                return b.salary - a.salary; // Sort by salary in descending order
            } else {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1; // Sort by name in ascending order
                if (nameA > nameB) return 1; // Sort by name in ascending order
                return 0;
            }
        });
        
        
        
        


        // Append employee information for the best department
        let counter = 0;
        let departmentEmployees = sortedEmployees.filter(
            (employee) => employee.department === bestDepartment
        );
        for (let i = 0; i < departmentEmployees.length; i++) {
            const employee = departmentEmployees[i];
            employees += `${employee.name} ${employee.salary} ${employee.position}`;
            if (i !== departmentEmployees.length - 1) {
                employees += '\n';
            }
            counter++;
        }



        return employees;
    }

}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());