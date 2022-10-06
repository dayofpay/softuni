function start(input){
    let studentName = input[0];
    let startIndex = 1;
    let grade = 1;
    let evaluations = 0;
    let fourConter = 0;
    while(grade <= 12){
        if(Number(input[startIndex]) >= 4){
            evaluations += Number(input[startIndex]);
            startIndex++;
            grade++;
        }
        else if(Number(input[startIndex] < 4)){
            if(fourConter >= 2){
                console.log(`${studentName} has been excluded at ${grade} grade`);
                break;
            }
            fourConter++;
        }
    }
    let avarage = evaluations / 12;
    if(grade >= 4.00 & fourConter < 2){
        console.log(`${studentName} graduated. Average grade: ${(avarage).toFixed(2)}`);
    }
}
start(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);