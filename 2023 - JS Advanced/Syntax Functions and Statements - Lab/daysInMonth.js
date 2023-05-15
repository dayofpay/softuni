function start(month,year){
    let dateObj = new Date(year,month,0).getDate();
    console.log(dateObj);
}
start(2,2012)