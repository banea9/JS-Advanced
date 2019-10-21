function solve(cardFace, cardSuit) {
    let cardFaces = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 'J',
        'Q': 'Q',
        'K': 'K',
        'A': 'A'
    }
    let cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (!cardFaces.hasOwnProperty(cardFace)) {
        throw new Error('Invalid face card!');
    }
    if (!cardSuits.hasOwnProperty(cardSuit)) {
        throw new Error('Invalid card suit!');
    }
    
    let card = {
        face: cardFace,
        suit: cardSuits[cardSuit],
        toString: function() {
            return this.face + this.suit;
        }
    }

    return card;
}
