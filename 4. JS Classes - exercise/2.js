function arangeTickets(arr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    let arrOfTickets = [];

    for (let row of arr) {
        let [ticketDestination, ticketPrice, ticketStatus] = row.split('|');
        ticketPrice = Number(ticketPrice)
        let newTicket = new Ticket(ticketDestination, ticketPrice, ticketStatus);
        arrOfTickets.push(newTicket);
    }

    

    return arrOfTickets = arrOfTickets.sort((a,b) => {
        if(a[sortCriteria] < b[sortCriteria]) {
            return -1
        }
        else if(a[sortCriteria] > b[sortCriteria]){
            return 1
        }
        return 0
    })

}

arangeTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)