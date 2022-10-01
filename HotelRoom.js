function start(input){
    let month = input.shift();
    let noshtuvki = parseInt(input.shift());
    let studioPrice;
    let apartmentPrice;
    let finalPriceStudio;
    let finalPriceApartment;
    if(noshtuvki <= 14 && month == "May" || month == "October"){
        studioPrice = 50 * noshtuvki;
        apartmentPrice = 65 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki <= 14 && month == "May" || month == "October"){
        studioPrice = 50 * noshtuvki;
        apartmentPrice = 65 * noshtuvki;
        finalPriceStudio = studioPrice - (studioPrice / 100 * 10);
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${finalPriceStudio.toFixed(2)} lv.`);
    }
    if(noshtuvki <= 14 && month == "June" || month == "September"){
        studioPrice = 75.20 * noshtuvki;
        apartmentPrice = 68.70 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 14 && month == "June" || month == "September"){
        console.log("asd");
        finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
        console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    if(noshtuvki <= 14 && month == "July" || month == "August"){
        studioPrice = 76 * noshtuvki;
        apartmentPrice = 77 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 14){
        if(month == "May"){
            studioPrice = 50 * noshtuvki;
            apartmentPrice = 65 * noshtuvki;
            finalPriceStudio = studioPrice - (studioPrice / 100 * 30);
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${finalPriceStudio.toFixed(2)} lv.`);
        }
        if(month == "October"){
            studioPrice = 50 * noshtuvki;
            apartmentPrice = 65 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "June"){
            studioPrice = 75.20 * noshtuvki;
            apartmentPrice = 68.70 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "July"){
            studioPrice = 76 * noshtuvki;
            apartmentPrice = 77 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "August"){
            studioPrice = 76 * noshtuvki;
            apartmentPrice = 77 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "September"){
            studioPrice = 75.20 * noshtuvki;
            apartmentPrice = 68.70 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
    }
}
// РЕШЕНИЕ 2

function start(input){
    let month = input.shift();
    let noshtuvki = parseInt(input.shift());
    let studioPrice;
    let apartmentPrice;
    let finalPriceStudio;
    let finalPriceApartment;
    if(noshtuvki <= 14 && month == "May" || month == "October"){
        studioPrice = 50 * noshtuvki;
        apartmentPrice = 65 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 7 && noshtuvki < 14 && month == "May" || month == "October"){
        studioPrice = 50 * noshtuvki;
        apartmentPrice = 65 * noshtuvki;
        finalPriceStudio = studioPrice - (studioPrice / 100 * 0.05);
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${finalPriceStudio.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 7  && noshtuvki < 14 && month == "May" || month == "October"){
        studioPrice = 50 * noshtuvki;
        apartmentPrice = 65 * noshtuvki;
        finalPriceStudio = studioPrice - (studioPrice / 100 * 30);
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${finalPriceStudio.toFixed(2)} lv.`);
    }
    if(noshtuvki <= 14 && month == "June" || month == "September"){
        studioPrice = 75.20 * noshtuvki;
        apartmentPrice = 68.70 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 14 && month == "June" || month == "September"){
        console.log("asd");
        finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 20);
        console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    if(noshtuvki <= 14 && month == "August" || month == "July"){
        studioPrice = 76 * noshtuvki;
        apartmentPrice = 77 * noshtuvki;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
    }
    else if(noshtuvki > 14){
        if(month == "May"){
            studioPrice = 50 * noshtuvki;
            apartmentPrice = 65 * noshtuvki;
            finalPriceStudio = studioPrice - (studioPrice / 100 * 30);
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${finalPriceStudio.toFixed(2)} lv.`);
        }
        if(month == "October"){
            studioPrice = 50 * noshtuvki;
            apartmentPrice = 65 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "June"){
            studioPrice = 75.20 * noshtuvki;
            apartmentPrice = 68.70 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "July"){
            studioPrice = 76 * noshtuvki;
            apartmentPrice = 77 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "August"){
            studioPrice = 76 * noshtuvki;
            apartmentPrice = 77 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
        if(month == "September"){
            studioPrice = 75.20 * noshtuvki;
            apartmentPrice = 68.70 * noshtuvki;
            finalPriceApartment = apartmentPrice - (apartmentPrice / 100 * 10);
            console.log(`Apartment: ${finalPriceApartment.toFixed(2)} lv.\r\nStudio: ${studioPrice.toFixed(2)} lv.`);
        }
    }
}
