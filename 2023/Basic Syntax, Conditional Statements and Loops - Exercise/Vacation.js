function init(totalGroup,groupType,dayOfStay){
    let totalPrice = 0;
    if(groupType === "Students"){
        if(dayOfStay === "Friday"){
            totalPrice += Number(totalGroup) * 8.45;
        }
        else if(dayOfStay === "Saturday"){
            totalPrice += Number(totalGroup) * 9.80;
        }
        else if(dayOfStay === "Sunday"){
            totalPrice += Number(totalGroup) * 10.46;
        }
    }
    else if(groupType === "Business"){
        if(dayOfStay === "Friday"){
            totalPrice += Number(totalGroup) * 10.90;
        }
        else if(dayOfStay === "Saturday"){
            totalPrice += Number(totalGroup) * 15.60;
        }
        else if (dayOfStay === "Sunday"){
            totalPrice += Number(totalGroup) * 16;
        }
    }
    else if(groupType === "Regular"){
        if(dayOfStay === "Friday")
        {
            totalPrice += Number(totalGroup) * 15;
        }
        else if(dayOfStay === "Saturday"){
            totalPrice += Number(totalGroup) * 20;
        }
        else if(dayOfStay === "Sunday"){
            totalPrice += Number(totalGroup) * 22.50;
        }
    }

    // Проверка за приложими отстъпки

    // Студенти

    if(groupType === "Students" && Number(totalGroup) >= 30){
        totalPrice -= (totalPrice / 100) * 15;
    }


    // БИЗНЕС


    else if(groupType === "Business" && Number(totalGroup) >= 100){
        if(dayOfStay === "Friday"){
            totalPrice -= 10 * 10.90;
        }
        else if(dayOfStay === "Saturday"){
            totalPrice -= 10 * 15.60;
        }
        else if(dayOfStay === "Sunday"){
            totalPrice -= 10 * 16;
        }
    } 

    // Редовен

    else if(groupType === "Regular"){
        if(Number(totalGroup) >= 10 && Number(totalGroup) <= 20){
            totalPrice -=  (totalPrice / 100) * 5;
        }
    }

    // Изчисление
    let final = (totalPrice).toFixed(2);
    console.log(`Total price: ${final}`);
}
init(30,"Students","Sunday");