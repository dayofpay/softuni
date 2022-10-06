function start(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
    if (month === "May" || month === "October") {
        if (nights > 7 && nights <= 14) {
            studioPrice = (nights * 50) * 0.95;
            apartmentPrice = nights * 65;
        } else if (nights > 14) {
            studioPrice = (nights * 50) * 0.7;
            apartmentPrice = (nights * 65) * 0.9;
        } else {
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;
        }
 
    } else if (month === "June" || month === "September") {
        if (nights > 14) {
            studioPrice = (nights * 75.2) * 0.8;
            apartmentPrice = (nights * 68.7) * 0.9;
        } else {
            studioPrice = nights * 75.2;
            apartmentPrice = nights * 68.7;
        }
    } else if (month === "July" || month === "August") {
        if (nights > 14) {
            studioPrice = nights * 76;
            apartmentPrice = (nights * 77) * 0.9;
        } else {
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;
        }
    }
 
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
start(["May","15"]);