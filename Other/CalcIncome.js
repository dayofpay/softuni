function Calculate(carPrice,mySalary,duration){
    const data = {
        salary : mySalary,
        durationToGet : duration,
        vehiclePrice : carPrice
    }
    let calculation = data.vehiclePrice / data.durationToGet;
    let endMonth = data.salary - calculation;
    if(data.salary < calculation){
        console.log(`Не можете да си позволите тази кола, тъй като ще са ви нужни ${calculation} лева месечно, а вашата заплата е ${mySalary} ЛВ `);
    }else{
        console.log("Ще трябва да отделяте " + calculation + " Лева на месец за да можете да си позволите тази кола");
        console.log("След заплащането ще ви остават " + endMonth + "лв от заделените средства");
    }
}
Calculate(55000,4000,24);