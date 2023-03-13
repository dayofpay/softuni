function start(inputData){
    let employeesData = new Map();
    for(let employee of inputData){
        let [company,employeeId] = employee.split(' -> ');

        if(!employeesData.has(company)){
            employeesData.set(company,new Set());
        }


        if(employeesData.has(company)){
            employeesData.get(company).add(employeeId);
        }
        
    }

    let sortedCompanies = Array.from(employeesData).sort();


    for(let company of sortedCompanies){
        console.log(company[0]);

        let employees = Array.from(company[1]).length;

        if(employees > 1) {
            for(let employee of company[1]){
                console.log(`-- ${employee}`);
            }
        }
        else{
            console.log(`-- ${Array.from(company[1])}`);
        }
    }
}
start([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    );