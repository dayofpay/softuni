function start(input){
    let movieIndex = 0; // Taxi

    let movie = input[movieIndex]; // Taxi
    movieIndex++; // 10

    let studentTicketsCount =0;
    let standardTicketCount = 0;
    let kidTicketsCount = 0;
    while(movie !== "Finish"){
        let freeSpaces = Number(input[movieIndex]); // 10
        movieIndex++; // 10->11

        let ticketType = input[movieIndex]; // input[movieIndex] -> standart->....
        movieIndex++; // 12->13->...

        let takenSpaces =0;
        while(ticketType !== "End"){
            takenSpaces+=1;
            if(ticketType === "student"){
                studentTicketsCount++;
            }
            else if(ticketType === "standard"){
                standardTicketCount++;
            }
            else if(ticketType === "kid"){
                kidTicketsCount++;
            }

            if(takenSpaces === freeSpaces){
                break;
            }

            ticketType = input[movieIndex];
            movieIndex++;
        }
        
        let spacesCalc = ((takenSpaces / freeSpaces) * 100).toFixed(2); 
        console.log(`${movie} - ${spacesCalc}% full.`);

        movie = input[movieIndex];
        movieIndex++;
    }
    let totalTickets = kidTicketsCount+studentTicketsCount+standardTicketCount;
    let studentTicketsPercent = ((studentTicketsCount / totalTickets) * 100).toFixed(2);
    let kidTicketsPercent = ((kidTicketsCount / totalTickets) * 100).toFixed(2);
    let standartTicketsPercent = ((standardTicketCount / totalTickets) * 100).toFixed(2);

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPercent}% student tickets.`);
    console.log(`${standartTicketsPercent}% standard tickets.`);
    console.log(`${kidTicketsPercent}% kids tickets.`);
}
start(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);