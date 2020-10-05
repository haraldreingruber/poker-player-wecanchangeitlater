const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.5';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    if (game.bettingRound() === "pre flop") {
      this.handleFirstRound(game, bet);
      return;
    }
    totalCards.push(...game.me().holeCards());
    totalCards.push(...game.communityCards());

    var numberOfPairs = game.me().holeCards().filter(c => game.communityCards().contains(c)).length;
    if(numberOfPairs > 0) {
      bet(game.me().stack());
      return;
    }
    // If it has been raised by more than 20€ we fold
    if (game.toCall() > 20) {
      bet(0);
      return;
    }
    bet(game.toCall());
  }

  static handleFirstRound(game, bet) {
    if (game.me().score() > 12) {
      bet(game.me().stack());
      return;
    }

    if (game.me().score() > 9 && game.round() <= 1) {
      bet(game.toRaise());
      return;
    }

    // If it has been raised by more than 20€ we fold
    if (game.toCall() > 20) {
      bet(0);
      return;
    }
    bet(game.toCall());
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

