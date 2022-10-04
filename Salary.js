// If condition
function start(input){
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());
    for(let startPoint = 0; startPoint <= openTabs;startPoint++){
        if(input[startPoint] === "Facebook"){
            salary -= 150;
        }
        if(input[startPoint] === "Instagram"){
            salary -= 100;
        }
        if(input[startPoint] === "Reddit"){
            salary -=50;
        }
        if(salary <0){
            break;
        }
    }
    if(salary > 0){
        console.log(salary);
    }else{
        console.log("You have lost your salary.");
    }
}
start((["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]));
// Switch Case
function start(input){
    let openTabs = Number(input.shift());
    let salary = Number(input.shift());
    for(let startPoint = 0; startPoint <= openTabs;startPoint++){
        switch(input[startPoint]){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -=50;
                break;
        }
        if(salary <0){
            break;
        }
    }
    if(salary > 0){
        console.log(salary);
    }else{
        console.log("You have lost your salary.");
    }
}
start((["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]));
