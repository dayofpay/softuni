function start(year,month,day){
    let dateObj = new Date(year, month - 1, day);
    dateObj.setDate(dateObj.getDate() - 1);
    let previousYear = dateObj.getFullYear();
    let previousMonth = String(dateObj.getMonth() + 1);
    let previousDay = String(dateObj.getDate());
    console.log(`${previousYear}-${previousMonth}-${previousDay}`);
}
start(2015, 5, 10);