function start(inputData){
    let object = {};
    for(let x of inputData){
        let data = x.split(' ');
        let student = data[0];
        for(let b = 1; b < data.length; b++){
            let grade = parseFloat(data[b]); 
            if(object.hasOwnProperty(student)){
                object[student].push(grade); 
            } else {
                object[student] = [grade]; 
            }
        }
    }

    let sorted = Object.keys(object).sort();
    for(let i = 0; i < sorted.length; i++){
        let student = sorted[i];
        let grades = object[student];
        let sum = grades.reduce((acc, val) => acc + val);
        let average = sum / grades.length;
        console.log(`${student}: ${average.toFixed(2)}`);
    }
}
start(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
