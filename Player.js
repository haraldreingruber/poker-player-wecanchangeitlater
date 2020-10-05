const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.3';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);

    if(game.me().score() > 12) {
      bet(game.me().stack());
      return;
    }

    if(game.me().score() > 9) {
      bet(game.toRaise());
      return;
    }

    // If it has been raised by more than 20€ we fold
    if(gameState.toCall() > 20) {
      bet(0);
      return;
    }
    bet(gameState.toCall());
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

