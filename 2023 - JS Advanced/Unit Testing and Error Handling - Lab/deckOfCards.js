function printDeckOfCards(cards) {
    function createCard(cardString) {
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
  
      let cardFace = cardString.slice(0, -1);
      let cardSuit = cardString.slice(-1);
  
      if (cardData.validFaces.includes(cardFace) && cardData.validSuits.includes(cardSuit)) {
        return {
          face: cardFace,
          suit: cardSuit,
          toString: function() {
            return cardFace + cardData.suits[cardSuit];
          }
        };
      } else {
        return `Invalid card: ${cardString}`;
      }
    }
  
    let formattedCards = cards.map(createCard);
  
    return formattedCards.join(' ');
  }
  
  let cards = ['AS', '10D', 'KH', '2C'];
  console.log(printDeckOfCards(cards));
  