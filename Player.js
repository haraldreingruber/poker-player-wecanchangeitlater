const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    if(game.me().hasPocketPair()) {
      bet(game.me().stack());
      return;
    }
    var hasAce = game.me().holeCards()[0].rank() === 'A' || game.me().holeCards()[1].rank() === 'A';
    if(hasAce) {
      bet(10);
      return;
    }
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

