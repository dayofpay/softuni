function start(day){
    let days = {
        "Monday" : 1,
        "Tuesday" : 2,
        "Wednesday" : 3,
        "Thursday" : 4,
        "Friday" : 5,
        "Saturday" : 6,
        "Sunday" : 7,
    }
    let result = days[day];
    console.log(result === undefined ? "error" : result);
}
start("Friday")