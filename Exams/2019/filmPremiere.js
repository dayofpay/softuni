function start(input){
    let drinkPrice = 0;
    let popcornPrice = 0;
    let menuPrice = 0;

    let filmName = input[0];
    let filmPackage = input[1];
    let totalTickets = Number(input[2]);

    let discount = 0;

    let totalPrice = 0;
    if(filmName === "John Wick"){
        drinkPrice = 12;
        popcornPrice = 15;
        menuPrice = 19;
        if(filmPackage === "Drink"){
            totalPrice = drinkPrice * totalTickets;
        }
        else if(filmPackage === "Popcorn"){
            totalPrice = popcornPrice * totalTickets;
        }
        else if(filmPackage === "Menu"){
            totalPrice = menuPrice * totalTickets;
        }
    }
    else if(filmName === "Star Wars"){
            drinkPrice = 18;
            popcornPrice = 25;
            menuPrice = 30;
            if(filmPackage === "Drink"){
                totalPrice = drinkPrice * totalTickets;
            }
            else if(filmPackage === "Popcorn"){
                totalPrice = popcornPrice * totalTickets;
            }
            else if(filmPackage === "Menu"){
                totalPrice = menuPrice * totalTickets;
            }

            if(totalTickets > 3){
                discount = (totalPrice * 30) / 100;
            }
    }
    else if(filmName === "Jumanji"){
        drinkPrice = 9;
        popcornPrice = 11;
        menuPrice = 14;
        if(filmPackage === "Drink"){
            totalPrice = drinkPrice * totalTickets;
        }
        else if(filmPackage === "Popcorn"){
            totalPrice = popcornPrice * totalTickets;
        }
        else if(filmPackage === "Menu"){
            totalPrice = menuPrice * totalTickets;
        }

        if(totalTickets === 2){
            discount = (totalPrice *15) / 100;
        }
    }
    let finalPrice = (totalPrice - discount).toFixed(2);
    console.log(`Your bill is ${finalPrice} leva.`);
}
start(["Jumanji","Menu","2"]);