function calc(bookPages,readPerHour,daysToRead){
    let totalTime = (bookPages / readPerHour);
    let hoursPerDay = totalTime / daysToRead;

    console.log(hoursPerDay);
}
calc(212,20,2);