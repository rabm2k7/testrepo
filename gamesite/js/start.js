
var game = new Phaser.Game(300, 500, Phaser.CANVAS, 'gameDiv');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('title',titleState);
game.state.add('game',gameState);

game.state.add('win',winState);
game.state.add('lose',loseState);

game.state.start('boot');