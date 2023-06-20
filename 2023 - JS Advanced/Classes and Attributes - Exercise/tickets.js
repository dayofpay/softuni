function start(ticketDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (let ticket of ticketDescriptions) {
        let [destination, price, status] = ticket.split('|');
        let newTicket = new Ticket(destination, price, status);
        tickets.push(newTicket);
    }


    tickets.sort((a, b) => {
        if (sortingCriteria === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortingCriteria === 'price') {
            return a.price - b.price;
        } else if (sortingCriteria === 'status') {
            return a.status.localeCompare(b.status);
        } else {

            return 0;
        }
    });

    return tickets;
}

const tickets = start(
    ['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'],
    'destination'
);
console.table(tickets);