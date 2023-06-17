const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number"||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
 checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }
  
    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;
  
    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }
  
    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};


module.exports = lottery;

// Solution
describe('Lottery', function() {
  describe('buyLotteryTicket', function() {
    it('should return the correct message when buying valid tickets', function() {
      expect(lottery.buyLotteryTicket(2, 3, true)).to.equal('You bought 3 tickets for 6$.');
    });

    it('should throw an error when buying is set to false', function() {
      expect(function() {
        lottery.buyLotteryTicket(5, 1, false);
      }).to.throw(Error, 'Unable to buy lottery ticket!');
    });

    it('should throw an error when invalid input is provided', function() {
      expect(function() {
        lottery.buyLotteryTicket('5', 1, true);
      }).to.throw(Error, 'Invalid input!');
    });
  });

  describe('checkTicket', function() {
    it('should return the correct message when the ticket has 3 to 5 winning numbers', function() {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9, 10])).to.equal('Congratulations you win, check your reward!');
    });

    it('should return the correct message when all 6 numbers are winning numbers', function() {
      expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });

    it('should throw an error when invalid input is provided', function() {
      expect(function() {
        lottery.checkTicket([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]);
      }).to.throw(Error, 'Invalid input!');
    });
  });

  describe('secondChance', function() {
    it('should return the correct message when the ticketID is included in the secondChanceWinningIDs', function() {
      expect(lottery.secondChance(123, [123, 456, 789])).to.equal('You win our second chance prize!');
    });

    it('should return the correct message when the ticketID is not included in the secondChanceWinningIDs', function() {
      expect(lottery.secondChance(123, [456, 789])).to.equal("Sorry, your ticket didn't win!");
    });

    it('should throw an error when invalid input is provided', function() {
      expect(function() {
        lottery.secondChance('123', [456, 789]);
      }).to.throw(Error, 'Invalid input!');
    });
  });
});