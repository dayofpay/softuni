// Сложно решение - Недовършено
function start(input){
    let pointerPresent = 0; 
    let pointerGrade = 0;
    let attendts = Number(input.shift());
    let presentations = [];
    let grade = [];
    let totalGrades = 0;
    let finalAssestment = 0;
    for(let x=0;x<=input.length-1; x++){ // Взима Предметите
        if(input[pointerPresent] === undefined || input[pointerPresent] == "Finish"){
            break;
        }
        else{
            presentations[x] = input[pointerPresent];
            pointerPresent+=attendts+1;
        }
    }
    for(let x =0; x<=input.length;x++){
        pointerGrade++;
        if(input[x] == undefined || input[pointerGrade] == "Finish"){
            pointerGrade-1;
            break;
        }
        else if(presentations.includes(input[pointerGrade])){
            
        }
        else{
            totalGrades++;
            grade[x] = input[pointerGrade];
            finalAssestment += Number(input[pointerGrade]);
        }
    }
    console.log(`Student's final assessment is ${(finalAssestment / totalGrades).toFixed(2)}.`);
}
start(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);