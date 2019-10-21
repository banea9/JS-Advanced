function solve(cards) {
    function makeCard(cardFace, cardSuit) {
        let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!cardFaces.includes(cardFace) || !cardSuits.hasOwnProperty(cardSuit)) {
            let error = new Error(`Invalid card!`);
            error.card = face + suit;

            throw error;
        }

        let card = {
            face: cardFace,
            suit: cardSuits[cardSuit],
            toString: function () {
                return this.face + this.suit;
            }
        }

        return card;
    }

    try {
        let resultCards = cards.map(x => {
            let c = x.split('');
            let s = c.pop();
            return makeCard(c.join(''), s)
        })

        console.log(resultCards.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${error.card}`);
    }
}


