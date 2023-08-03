function start(inputData){
    for(let employeeData of Object.entries(inputData)){
        console.log(`Name: ${employeeData[1]} -- Personal Number: ${employeeData[1].length}`);
    }
}
start([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );