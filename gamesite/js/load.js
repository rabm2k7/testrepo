var loadState = {

	preload: function(){
	
	var loadingtext = game.add.text(80,150,'Game Loading...',{font: '20px Courier',fill:'#ffffff'});
	
	game.load.image('buy', 'images/buy.png');
    game.load.image('sell', 'images/sell.png');
    game.load.image('ui', 'images/ui.png');
    game.load.image('ui2', 'images/uilayer2.png');
	
    game.load.image('business', 'images/business.png');
    game.load.image('bank', 'images/bank.png');
    game.load.image('items', 'images/items.png');
    game.load.image('accounts', 'images/accounts.png');
	
    game.load.image('25loanborrow', 'images/25loanborrow.png');
    game.load.image('25loanrepay', 'images/25loanrepay.png');
    game.load.image('50loanborrow', 'images/50loanborrow.png');
    game.load.image('50loanrepay', 'images/50loanrepay.png');	
    game.load.image('maxloanborrow', 'images/maxloanborrow.png');
    game.load.image('maxloanrepay', 'images/maxloanrepay.png');	

	game.load.image('retirebutton', 'images/retire.png');	
	
    game.load.image('titlescreen', 'images/gamestart.jpg');	
    game.load.image('winscreen', 'images/gamewin.jpg');	
    game.load.image('losescreen', 'images/gamebankrupt.jpg');	
	
	},
	
	create: function(){
	game.state.start('title');
	}
	
};