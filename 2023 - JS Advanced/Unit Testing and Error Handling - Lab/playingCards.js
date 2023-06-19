function createCard(cardFace, cardSuit) {
    let cardData = {
      validFaces: [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
      ],
      validSuits: ['S', 'H', 'D', 'C'],
      suits: {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
      }
    };
  
    if (cardData.validFaces.includes(cardFace) && cardData.validSuits.includes(cardSuit)) {
      return {
        face: cardFace,
        suit: cardSuit,
        toString: function() {
          return cardFace + cardData.suits[cardSuit];
        }
      };
    } else {
      throw new Error('Error');
    }
  }
  
  let card = createCard('10', 'C');
  console.log(card.toString());
  