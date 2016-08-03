var loseState = {

	create: function(){
				var losescreenbutton = game.add.button(0, 0, 'losescreen', this.restartGame, this);

		//reset globals	
		bankruptcydays = 0;
		earningsperday = 0;
		expenditureperday = 0;
		incomeperday = earningsperday-expenditureperday;
		money = 11000;
		currentloan = 0;
		missedpayment = 0;
		gameday = 0;
		globalGameObj = JSON.parse(JSON.stringify(defGlobalGame));
		globalGameItems = JSON.parse(JSON.stringify(defGlobalItem));		
	},

	restartGame: function(){
	game.state.start('title');
	}
	
};