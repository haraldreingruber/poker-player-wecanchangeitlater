const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    if(game.me().hasPocketPair()) {
      bet(game.me().stack());
    }
    else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

