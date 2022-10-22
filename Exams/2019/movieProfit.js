function start(input){
    let filmName = input[0];
    let totalDays = Number(input[1]);
    let totalTickets = Number(input[2]);
    let pricePerTicket = Number(input[3]);
    let cinemaPercentage = Number(input[4]);

    let pricePerDay = totalTickets * pricePerTicket;

    let totalMoney = totalDays * pricePerDay;

    let cinema = (totalMoney * cinemaPercentage) / 100;

    let finalSum = totalMoney - cinema;

    console.log(`The profit from the movie ${filmName} is ${finalSum.toFixed(2)} lv.`);
}
