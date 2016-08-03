var titleState = {

	create: function(){
				var titlescreenbutton = game.add.button(0, 0, 'titlescreen', this.startGame, this);

	},

	startGame: function(){
	game.state.start('game');
	}
	
};