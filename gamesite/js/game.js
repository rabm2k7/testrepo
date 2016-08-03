
var bankruptcydays = 0;

var earningsperday = 0;
var expenditureperday = 0;
var incomeperday = earningsperday-expenditureperday;

var money = 11000;

var currentloan = 0;
var currentintrest = 1.02;
var nextrepayment = currentloan / 10;
var maxloan = incomeperday * 20;
var missedpayment = 0;

var counter = 0;
var gamehrs = 240;
var gameday = 0;

var currentbizcam = 0;

var currentevent;

var defGlobalGame = JSON.parse(JSON.stringify(globalGameObj));
var defGlobalItem = JSON.parse(JSON.stringify(globalGameItems));

var gameState = {

create: function () {

	//game ui
	game.add.sprite(0,0, 'ui');
	//top row ui
	game.add.sprite(2,50, 'ui2');
	game.add.sprite(308,50, 'ui2');
	game.add.sprite(613,50, 'ui2');
	//second row ui
	game.add.sprite(2,557, 'ui2');
	game.add.sprite(308,557, 'ui2');
	
    game.stage.backgroundColor = '#000000';
	
	//add panel controls
	buttonBusiness = game.add.button(0,0, 'business', cameraBusiness, this);
	buttonBank = game.add.button(0,0, 'bank', cameraBank, this);
	buttonItems = game.add.button(0,0, 'items', cameraItems, this);
	buttonAccounts = game.add.button(0,0, 'accounts', cameraAccounts, this);
	
	// business'
	
	//panel 1
	incometxt1 = game.add.text(50, 50, 'Income PH: $0', { font: "14px Arial", fill: "#000000", align: "center" });
    incometxt1.anchor.setTo(0, 0);
	moneytxt1 = game.add.text(50, 70, 'Money: $100', { font: "14px Arial", fill: "#000000", align: "center" });
    moneytxt1.anchor.setTo(0, 0);
	gamedaytxt1 = game.add.text(50, 90, 'Game Day: 0', { font: "14px Arial", fill: "#000000", align: "center" });
    gamedaytxt1.anchor.setTo(0, 0);
	
		//text events
		p1currenteventtext1 = game.add.text(15, 435, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
		p1currenteventtext2 = game.add.text(15, 435+25, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
		
	
	//panel 2
	incometxt2 = game.add.text(50+304, 50, 'Income PH: $0', { font: "14px Arial", fill: "#000000", align: "center" });
    incometxt2.anchor.setTo(0, 0);
	moneytxt2 = game.add.text(50+304, 70, 'Money: $100', { font: "14px Arial", fill: "#000000", align: "center" });
    moneytxt2.anchor.setTo(0, 0);
	gamedaytxt2 = game.add.text(50+304, 90, 'Game Day: 0', { font: "14px Arial", fill: "#000000", align: "center" });
    gamedaytxt2.anchor.setTo(0, 0);
		
		//text events
		p2currenteventtext1 = game.add.text(15+304, 435, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
		p2currenteventtext2 = game.add.text(15+304, 435+25, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
		
	//panel 3
	incometxt3 = game.add.text(50, 50+506, 'Income PH: $0', { font: "14px Arial", fill: "#000000", align: "center" });
    incometxt3.anchor.setTo(0, 0);
	moneytxt3 = game.add.text(50, 70+506, 'Money: $100', { font: "14px Arial", fill: "#000000", align: "center" });
    moneytxt3.anchor.setTo(0, 0);
	gamedaytxt3 = game.add.text(50, 90+506, 'Game Day: 0', { font: "14px Arial", fill: "#000000", align: "center" });
    gamedaytxt3.anchor.setTo(0, 0);

		//text events
		p3currenteventtext1 = game.add.text(15, 435+506, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
		p3currenteventtext2 = game.add.text(15, 435+25+506, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
		
	//panel 4
	incometxt4 = game.add.text(50+304, 50+506, 'Income PH: $0', { font: "14px Arial", fill: "#000000", align: "center" });
    incometxt4.anchor.setTo(0, 0);
	moneytxt4 = game.add.text(50+304, 70+506, 'Money: $100', { font: "14px Arial", fill: "#000000", align: "center" });
    moneytxt4.anchor.setTo(0, 0);
	gamedaytxt4 = game.add.text(50+304, 90+506, 'Game Day: 0', { font: "14px Arial", fill: "#000000", align: "center" });
    gamedaytxt4.anchor.setTo(0, 0);
		
		//text events
		p4currenteventtext1 = game.add.text(15+304, 435+506, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
		p4currenteventtext2 = game.add.text(15+304, 435+25+506, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
		
	
	incometxtitems = game.add.text(50+304+304, 50, 'Income PH: $0', { font: "14px Arial", fill: "#000000", align: "center" });
    incometxtitems.anchor.setTo(0, 0);
	moneytxtitems = game.add.text(50+304+304, 70, 'Money: $100', { font: "14px Arial", fill: "#000000", align: "center" });
    moneytxtitems.anchor.setTo(0, 0);
	gamedaytxtitems = game.add.text(50+304+304, 90, 'Game Day: 0', { font: "14px Arial", fill: "#000000", align: "center" });
    gamedaytxtitems.anchor.setTo(0, 0);
		
		//text events
		incomecurrenteventtext1 = game.add.text(15+304+304, 435, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
		incomecurrenteventtext2 = game.add.text(15+304+304, 435+25, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
		
	//GameUpdateLoop
    tickloop = game.time.events.loop(Phaser.Timer.SECOND/50, tick, this);
    newsloop = game.time.events.loop(Phaser.Timer.SECOND*5, news, this);
	
	
	//create game world
	game.world.setBounds(0, 0, 900, 1500);
	
	//draw businesses
		//Panel 1
		//localgym
			//title
			localgymtitle = game.add.text(130, 110, globalGameObj["localgym"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			localgymprice = game.add.text(40, 120, 'Cost: ' + globalGameObj["localgym"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			localgymincome = game.add.text(120, 120, 'Income / Day: ' + globalGameObj["localgym"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			localgymqtyowned = game.add.text(40, 132, 'Qty Owned:' + globalGameObj["localgym"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var localgymbuybutton = game.add.button(3, 108, 'buy', buyGym, this);
			//sell button
			var localgymsellbutton = game.add.button(3, 126, 'sell', sellGym, this);
			
		//localnewsagent
			localnewsagenttitle = game.add.text(130, 110+41, globalGameObj["localnewsagent"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			localnewsagentprice = game.add.text(40, 120+41, 'Cost: ' + globalGameObj["localnewsagent"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			localnewsagentincome = game.add.text(120, 120+41, 'Income / Day: ' + globalGameObj["localnewsagent"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			localnewsagentqtyowned = game.add.text(40, 132+41, 'Qty Owned:' + globalGameObj["localnewsagent"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var localnewsagentbuybutton = game.add.button(3, 108+41, 'buy', buyLocalNews, this);
			//sell button
			var localnewsagentsellbutton = game.add.button(3, 126+41, 'sell', sellLocalNews, this);
			
		//takeaway
			//title
			takeawaytitle = game.add.text(130, 110+41+41, globalGameObj["takeaway"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			takeawayprice = game.add.text(40, 120+41+41, 'Cost: ' + globalGameObj["takeaway"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			takeawayincome = game.add.text(120, 120+41+41, 'Income / Day: ' + globalGameObj["takeaway"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			takeawayqtyowned = game.add.text(40, 132+41+41, 'Qty Owned:' + globalGameObj["takeaway"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var takeawaybuybutton = game.add.button(3, 108+41+41, 'buy', buyTakeaway, this);
			//sell button
			var takeawaysellbutton = game.add.button(3, 126+41+41, 'sell', sellTakeaway, this);
		
		//bakery
			//title
			bakerytitle = game.add.text(130, 110+41+41+41, globalGameObj["bakery"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			bakeryprice = game.add.text(40, 120+41+41+41, 'Cost: ' + globalGameObj["bakery"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			bakeryincome = game.add.text(120, 120+41+41+41, 'Income / Day: ' + globalGameObj["bakery"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			bakeryqtyowned = game.add.text(40, 132+41+41+41, 'Qty Owned:' + globalGameObj["bakery"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var bakerybuybutton = game.add.button(3, 108+41+41+41, 'buy', buyBakery, this);
			//sell button
			var bakerysellbutton = game.add.button(3, 126+41+41+41, 'sell', sellBakery, this);
		
		//butcher
			//title
			butchertitle = game.add.text(130, 110+41+41+41+41, globalGameObj["butcher"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			butcherprice = game.add.text(40, 120+41+41+41+41, 'Cost: ' + globalGameObj["butcher"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			butcherincome = game.add.text(120, 120+41+41+41+41, 'Income / Day: ' + globalGameObj["butcher"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			butcherqtyowned = game.add.text(40, 132+41+41+41+41, 'Qty Owned:' + globalGameObj["butcher"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var butcherbuybutton = game.add.button(3, 108+41+41+41+41, 'buy', buyButcher, this);
			//sell button
			var butchersellbutton = game.add.button(3, 126+41+41+41+41, 'sell', sellButcher, this);
		
		//pawnshop
			//title
			pawnshoptitle = game.add.text(130, 110+41+41+41+41+41, globalGameObj["pawnshop"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			pawnshopprice = game.add.text(40, 120+41+41+41+41+41, 'Cost: ' + globalGameObj["pawnshop"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			pawnshopincome = game.add.text(120, 120+41+41+41+41+41, 'Income / Day: ' + globalGameObj["pawnshop"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			pawnshopqtyowned = game.add.text(40, 132+41+41+41+41+41, 'Qty Owned:' + globalGameObj["pawnshop"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var pawnshopbuybutton = game.add.button(3, 108+41+41+41+41+41, 'buy', buyPawnshop, this);
			//sell button
			var pawnshopsellbutton = game.add.button(3, 126+41+41+41+41+41, 'sell', sellPawnshop, this);
			
		//restaurant
			//title
			restauranttitle = game.add.text(130, 110+41+41+41+41+41+41, globalGameObj["restaurant"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			restaurantprice = game.add.text(40, 120+41+41+41+41+41+41, 'Cost: ' + globalGameObj["restaurant"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			restaurantincome = game.add.text(120, 120+41+41+41+41+41+41, 'Income / Day: ' + globalGameObj["restaurant"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			restaurantqtyowned = game.add.text(40, 132+41+41+41+41+41+41, 'Qty Owned:' + globalGameObj["restaurant"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var restaurantbuybutton = game.add.button(3, 108+41+41+41+41+41+41, 'buy', buyRestaurant, this);
			//sell button
			var restaurantsellbutton = game.add.button(3, 126+41+41+41+41+41+41, 'sell', sellRestaurant, this);
			
	//Panel 2
		//realestatestore
			//title
			realestatestoretitle = game.add.text(130+304, 110, globalGameObj["realestatestore"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			realestatestoreprice = game.add.text(40+304, 120, 'Cost: ' + globalGameObj["realestatestore"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			realestatestoreincome = game.add.text(120+304, 120, 'Income / Day: ' + globalGameObj["realestatestore"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			realestatestoreqtyowned = game.add.text(40+304, 132, 'Qty Owned:' + globalGameObj["realestatestore"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var realestatestorebuybutton = game.add.button(3+304, 108, 'buy', buyRealestatestore, this);
			//sell button
			var realestatestoresellbutton = game.add.button(3+304, 126, 'sell', sellRealestatestore, this);
			
		//rentalappartment
			rentalappartmenttitle = game.add.text(130+304, 110+41, globalGameObj["rentalappartment"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			rentalappartmentprice = game.add.text(40+304, 120+41, 'Cost: ' + globalGameObj["rentalappartment"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			rentalappartmentincome = game.add.text(120+304, 120+41, 'Income / Day: ' + globalGameObj["rentalappartment"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			rentalappartmentqtyowned = game.add.text(40+304, 132+41, 'Qty Owned:' + globalGameObj["rentalappartment"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var rentalappartmentbuybutton = game.add.button(3+304, 108+41, 'buy', buyRentalappartment, this);
			//sell button
			var rentalappartmentsellbutton = game.add.button(3+304, 126+41, 'sell', sellRentalappartment, this);
			
		//highendrestaurant
			//title
			highendrestauranttitle = game.add.text(130+304, 110+41+41, globalGameObj["highendrestaurant"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			highendrestaurantprice = game.add.text(40+304, 120+41+41, 'Cost: ' + globalGameObj["highendrestaurant"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			highendrestaurantincome = game.add.text(120+304, 120+41+41, 'Income / Day: ' + globalGameObj["highendrestaurant"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			highendrestaurantqtyowned = game.add.text(40+304, 132+41+41, 'Qty Owned:' + globalGameObj["highendrestaurant"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var highendrestaurantbuybutton = game.add.button(3+304, 108+41+41, 'buy', buyHighendrestaurant, this);
			//sell button
			var highendrestaurantsellbutton = game.add.button(3+304, 126+41+41, 'sell', sellHighendrestaurant, this);
		
		//electricalretailer
			//title
			electricalretailertitle = game.add.text(130+304, 110+41+41+41, globalGameObj["electricalretailer"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			electricalretailerprice = game.add.text(40+304, 120+41+41+41, 'Cost: ' + globalGameObj["electricalretailer"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			electricalretailerincome = game.add.text(120+304, 120+41+41+41, 'Income / Day: ' + globalGameObj["electricalretailer"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			electricalretailerqtyowned = game.add.text(40+304, 132+41+41+41, 'Qty Owned:' + globalGameObj["electricalretailer"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var electricalretailerbuybutton = game.add.button(3+304, 108+41+41+41, 'buy', buyElectricalretailer, this);
			//sell button
			var electricalretailersellbutton = game.add.button(3+304, 126+41+41+41, 'sell', sellElectricalretailer, this);
		
		//rentalhouse
			//title
			rentalhousetitle = game.add.text(130+304, 110+41+41+41+41, globalGameObj["rentalhouse"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			rentalhouseprice = game.add.text(40+304, 120+41+41+41+41, 'Cost: ' + globalGameObj["rentalhouse"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			rentalhouseincome = game.add.text(120+304, 120+41+41+41+41, 'Income / Day: ' + globalGameObj["rentalhouse"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			rentalhouseqtyowned = game.add.text(40+304, 132+41+41+41+41, 'Qty Owned:' + globalGameObj["rentalhouse"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var rentalhousebuybutton = game.add.button(3+304, 108+41+41+41+41, 'buy', buyRentalhouse, this);
			//sell button
			var rentalhousesellbutton = game.add.button(3+304, 126+41+41+41+41, 'sell', sellRentalhouse, this);
		
		//bedandbreakfast
			//title
			bedandbreakfasttitle = game.add.text(130+304, 110+41+41+41+41+41, globalGameObj["bedandbreakfast"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			bedandbreakfastprice = game.add.text(40+304, 120+41+41+41+41+41, 'Cost: ' + globalGameObj["bedandbreakfast"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			bedandbreakfastincome = game.add.text(120+304, 120+41+41+41+41+41, 'Income / Day: ' + globalGameObj["bedandbreakfast"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			bedandbreakfastqtyowned = game.add.text(40+304, 132+41+41+41+41+41, 'Qty Owned:' + globalGameObj["bedandbreakfast"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var bedandbreakfastbuybutton = game.add.button(3+304, 108+41+41+41+41+41, 'buy', buyBedandbreakfask, this);
			//sell button
			var bedandbreakfastsellbutton = game.add.button(3+304, 126+41+41+41+41+41, 'sell', sellBedandbreakfask, this);
			
		//icerink
			//title
			icerinktitle = game.add.text(130+304, 110+41+41+41+41+41+41, globalGameObj["icerink"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			icerinkprice = game.add.text(40+304, 120+41+41+41+41+41+41, 'Cost: ' + globalGameObj["icerink"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			icerinkincome = game.add.text(120+304, 120+41+41+41+41+41+41, 'Income / Day: ' + globalGameObj["icerink"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			icerinkqtyowned = game.add.text(40+304, 132+41+41+41+41+41+41, 'Qty Owned:' + globalGameObj["icerink"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var icerinkbuybutton = game.add.button(3+304, 108+41+41+41+41+41+41, 'buy', buyIcerink, this);
			//sell button
			var icerinksellbutton = game.add.button(3+304, 126+41+41+41+41+41+41, 'sell', sellIcerink, this);

	//Panel 3
		//hotel
			//title
			hoteltitle = game.add.text(130, 110+507, globalGameObj["hotel"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			hotelprice = game.add.text(40, 120+507, 'Cost: ' + globalGameObj["hotel"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			hotelincome = game.add.text(120, 120+507, 'Income / Day: ' + globalGameObj["hotel"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			hotelqtyowned = game.add.text(40, 132+507, 'Qty Owned:' + globalGameObj["hotel"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var hotelbuybutton = game.add.button(3, 108+507, 'buy', buyHotel, this);
			//sell button
			var hotelsellbutton = game.add.button(3, 126+507, 'sell', sellHotel, this);
			
		//spa
			spatitle = game.add.text(130, 110+41+507, globalGameObj["spa"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			spaprice = game.add.text(40, 120+41+507, 'Cost: ' + globalGameObj["spa"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			spaincome = game.add.text(120, 120+41+507, 'Income / Day: ' + globalGameObj["spa"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			spaqtyowned = game.add.text(40, 132+41+507, 'Qty Owned:' + globalGameObj["spa"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var spabuybutton = game.add.button(3, 108+41+507, 'buy', buySpa, this);
			//sell button
			var spasellbutton = game.add.button(3, 126+41+507, 'sell', sellSpa, this);
			
		//golfcourse
			//title
			golfcoursetitle = game.add.text(130, 110+41+41+507, globalGameObj["golfcourse"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			golfcourseprice = game.add.text(40, 120+41+41+507, 'Cost: ' + globalGameObj["golfcourse"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			golfcourseincome = game.add.text(120, 120+41+41+507, 'Income / Day: ' + globalGameObj["golfcourse"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			golfcourseqtyowned = game.add.text(40, 132+41+41+507, 'Qty Owned:' + globalGameObj["golfcourse"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var golfcoursebuybutton = game.add.button(3, 108+41+41+507, 'buy', buyGolfcourse, this);
			//sell button
			var golfcoursesellbutton = game.add.button(3, 126+41+41+507, 'sell', sellGolfcourse, this);
		
		//healthclub
			//title
			healthclubtitle = game.add.text(130, 110+41+41+41+507, globalGameObj["healthclub"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			healthclubprice = game.add.text(40, 120+41+41+41+507, 'Cost: ' + globalGameObj["healthclub"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			healthclubincome = game.add.text(120, 120+41+41+41+507, 'Income / Day: ' + globalGameObj["healthclub"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			healthclubqtyowned = game.add.text(40, 132+41+41+41+507, 'Qty Owned:' + globalGameObj["healthclub"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var healthclubbuybutton = game.add.button(3, 108+41+41+41+507, 'buy', buyHealthclub, this);
			//sell button
			var healthclubsellbutton = game.add.button(3, 126+41+41+41+507, 'sell', sellHealthclub, this);
		
		//huntingestate
			//title
			huntingestatetitle = game.add.text(130, 110+41+41+41+41+507, globalGameObj["huntingestate"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			huntingestateprice = game.add.text(40, 120+41+41+41+41+507, 'Cost: ' + globalGameObj["huntingestate"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			huntingestateincome = game.add.text(120, 120+41+41+41+41+507, 'Income / Day: ' + globalGameObj["huntingestate"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			huntingestateqtyowned = game.add.text(40, 132+41+41+41+41+507, 'Qty Owned:' + globalGameObj["huntingestate"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var huntingestatebuybutton = game.add.button(3, 108+41+41+41+41+507, 'buy', buyHuntingestate, this);
			//sell button
			var huntingestatesellbutton = game.add.button(3, 126+41+41+41+41+507, 'sell', sellHuntingestate, this);
		
		//farm
			//title
			farmtitle = game.add.text(130, 110+41+41+41+41+41+507, globalGameObj["farm"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			farmprice = game.add.text(40, 120+41+41+41+41+41+507, 'Cost: ' + globalGameObj["farm"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			farmincome = game.add.text(120, 120+41+41+41+41+41+507, 'Income / Day: ' + globalGameObj["farm"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			farmqtyowned = game.add.text(40, 132+41+41+41+41+41+507, 'Qty Owned:' + globalGameObj["farm"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var farmbuybutton = game.add.button(3, 108+41+41+41+41+41+507, 'buy', buyFarm, this);
			//sell button
			var farmsellbutton = game.add.button(3, 126+41+41+41+41+41+507, 'sell', sellFarm, this);
			
		//supermarket
			//title
			supermarkettitle = game.add.text(130, 110+41+41+41+41+41+41+507, globalGameObj["supermarket"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			supermarketprice = game.add.text(40, 120+41+41+41+41+41+41+507, 'Cost: ' + globalGameObj["supermarket"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			supermarketincome = game.add.text(120, 120+41+41+41+41+41+41+507, 'Income / Day: ' + globalGameObj["supermarket"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			supermarketqtyowned = game.add.text(40, 132+41+41+41+41+41+41+507, 'Qty Owned:' + globalGameObj["supermarket"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var supermarketbuybutton = game.add.button(3, 108+41+41+41+41+41+41+507, 'buy', buySupermarket, this);
			//sell button
			var supermarketsellbutton = game.add.button(3, 126+41+41+41+41+41+41+507, 'sell', sellSupermarket, this);
			
	//Panel 4
		//museum
			//title
			museumtitle = game.add.text(130+304, 110+506, globalGameObj["museum"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			museumprice = game.add.text(40+304, 120+506, 'Cost: ' + globalGameObj["museum"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			museumincome = game.add.text(120+304, 120+506, 'Income / Day: ' + globalGameObj["museum"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			museumqtyowned = game.add.text(40+304, 132+506, 'Qty Owned:' + globalGameObj["museum"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var museumbuybutton = game.add.button(3+304, 108+506, 'buy', buyMuseum, this);
			//sell button
			var museumsellbutton = game.add.button(3+304, 126+506, 'sell', sellMuseum, this);
			
		//hourseracingtrack
			hourseracingtracktitle = game.add.text(130+304, 110+41+506, globalGameObj["hourseracingtrack"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			hourseracingtrackprice = game.add.text(40+304, 120+41+506, 'Cost: ' + globalGameObj["hourseracingtrack"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			hourseracingtrackincome = game.add.text(120+304, 120+41+506, 'Income / Day: ' + globalGameObj["hourseracingtrack"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			hourseracingtrackqtyowned = game.add.text(40+304, 132+41+506, 'Qty Owned:' + globalGameObj["hourseracingtrack"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var hourseracingtrackbuybutton = game.add.button(3+304, 108+41+506, 'buy', buyHourseracingtrack, this);
			//sell button
			var hourseracingtracksellbutton = game.add.button(3+304, 126+41+506, 'sell', sellHourseracingtrack, this);
			
		//confrencehall
			//title
			confrencehalltitle = game.add.text(130+304, 110+41+41+506, globalGameObj["confrencehall"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			confrencehallprice = game.add.text(40+304, 120+41+41+506, 'Cost: ' + globalGameObj["confrencehall"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			confrencehallincome = game.add.text(120+304, 120+41+41+506, 'Income / Day: ' + globalGameObj["confrencehall"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			confrencehallqtyowned = game.add.text(40+304, 132+41+41+506, 'Qty Owned:' + globalGameObj["confrencehall"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var confrencehallbuybutton = game.add.button(3+304, 108+41+41+506, 'buy', buyConfrencehall, this);
			//sell button
			var confrencehallsellbutton = game.add.button(3+304, 126+41+41+506, 'sell', sellConfrencehall, this);
		
		//oilandplastics
			//title
			oilandplasticstitle = game.add.text(130+304, 110+41+41+41+506, globalGameObj["oilandplastics"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			oilandplasticsprice = game.add.text(40+304, 120+41+41+41+506, 'Cost: ' + globalGameObj["oilandplastics"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			oilandplasticsincome = game.add.text(120+311, 120+41+41+41+506, 'Income / Day: ' + globalGameObj["oilandplastics"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			oilandplasticsqtyowned = game.add.text(40+304, 132+41+41+41+506, 'Qty Owned:' + globalGameObj["oilandplastics"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var oilandplasticsbuybutton = game.add.button(3+304, 108+41+41+41+506, 'buy', buyOilandplastics, this);
			//sell button
			var oilandplasticssellbutton = game.add.button(3+304, 126+41+41+41+506, 'sell', sellOilandplastics, this);
		
		//nuclearpowerstation
			//title
			nuclearpowerstationtitle = game.add.text(130+304, 110+41+41+41+41+506, globalGameObj["nuclearpowerstation"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			nuclearpowerstationprice = game.add.text(40+304, 120+41+41+41+41+506, 'Cost: ' + globalGameObj["nuclearpowerstation"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			nuclearpowerstationincome = game.add.text(120+318, 120+41+41+41+41+506, 'Income / Day: ' + globalGameObj["nuclearpowerstation"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			nuclearpowerstationqtyowned = game.add.text(40+304, 132+41+41+41+41+506, 'Qty Owned:' + globalGameObj["nuclearpowerstation"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var nuclearpowerstationbuybutton = game.add.button(3+304, 108+41+41+41+41+506, 'buy', buyNuclearpowerstation, this);
			//sell button
			var nuclearpowerstationsellbutton = game.add.button(3+304, 126+41+41+41+41+506, 'sell', sellNuclearpowerstation, this);
		
		//shipyard
			//title
			shipyardtitle = game.add.text(130+304, 110+41+41+41+41+41+506, globalGameObj["shipyard"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			shipyardprice = game.add.text(40+304, 120+41+41+41+41+41+506, 'Cost: ' + globalGameObj["shipyard"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			shipyardincome = game.add.text(120+318, 120+41+41+41+41+41+506, 'Income / Day: ' + globalGameObj["shipyard"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			shipyardqtyowned = game.add.text(40+304, 132+41+41+41+41+41+506, 'Qty Owned:' + globalGameObj["shipyard"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var shipyardbuybutton = game.add.button(3+304, 108+41+41+41+41+41+506, 'buy', buyShipyard, this);
			//sell button
			var shipyardsellbutton = game.add.button(3+304, 126+41+41+41+41+41+506, 'sell', sellShipyard, this);
			
		//army
			//title
			armytitle = game.add.text(130+304, 110+41+41+41+41+41+41+506, globalGameObj["army"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			armyprice = game.add.text(40+304, 120+41+41+41+41+41+41+506, 'Cost: ' + globalGameObj["army"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			armyincome = game.add.text(120+318, 120+41+41+41+41+41+41+506, 'Income / Day: ' + globalGameObj["army"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			armyqtyowned = game.add.text(40+304, 132+41+41+41+41+41+41+506, 'Qty Owned:' + globalGameObj["army"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var armybuybutton = game.add.button(3+304, 108+41+41+41+41+41+41+506, 'buy', buyArmy, this);
			//sell button
			var armysellbutton = game.add.button(3+304, 126+41+41+41+41+41+41+506, 'sell', sellArmy, this);

			
			
	//bank
			
	//Draw Bank
		//Content
			//banktitle = game.add.text(110,1100, "The Bank", { font: "20px Arial", fill: "#FFFFFF", align: "center" });
			//incomeperday
			bankincomeday = game.add.text(50,1050, "Income Per Day: " + incomeperday, { font: "15px Arial", fill: "#FFFFFF", align: "center" });
			//currentloan
			bankcurrentloan = game.add.text(50,1075, 'Current Loan: ' + currentloan, { font: "15px Arial", fill: "#FFFFFF", align: "center" });
			//maxloan
			bankmaxloan = game.add.text(50,1100, 'Max Loan: ' + maxloan, { font: "15px Arial", fill: "#FFFFFF", align: "center" });
			//availableloan
			bankavailableloan = game.add.text(50,1125, 'Max Loan: ' + (maxloan-currentloan), { font: "15px Arial", fill: "#FFFFFF", align: "center" });
			//nextrepayment
			banknextrepayment = game.add.text(50,1150, 'Next Repayment: ' + nextrepayment, { font: "15px Arial", fill: "#FFFFFF", align: "center" });
		//Buttons
			//borrow Max
			bankborrowmax = game.add.button(50,1200, 'maxloanborrow', bankBorrowMax, this);
			//borrow 50%
			bankborrow50 = game.add.button(50,1240, '50loanborrow', bankBorrow50, this);
			//borrow 25%
			bankborrow25 = game.add.button(50,1280, '25loanborrow', bankBorrow25, this);
			//payback 25%
			bankpayback25 = game.add.button(50+90,1200, '25loanrepay', bankPayback25, this);
			//payback 50%
			bankpayback50 = game.add.button(50+90,1240, '50loanrepay', bankPayback50, this);
			//payback Max
			bankpaybackmax = game.add.button(50+90,1280, 'maxloanrepay', bankPaybackMax, this);
			
			//bank text events
			bankcurrenteventtext1 = game.add.text(15, 1000+435, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
			bankcurrenteventtext2 = game.add.text(15, 1000+435+25, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
			
			
	//items
	
		//arvanisuit
			//title
			arvanisuittitle = game.add.text(130+304+304, 110, globalGameItems["arvanisuit"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			arvanisuitprice = game.add.text(40+304+304, 120, 'Cost: ' + globalGameItems["arvanisuit"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			arvanisuitincome = game.add.text(120+304+304, 120, 'Income / Day: ' + globalGameItems["arvanisuit"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			arvanisuitqtyowned = game.add.text(40+304+304, 132, 'Qty Owned:' + globalGameItems["arvanisuit"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var arvanisuitbuybutton = game.add.button(3+304+304, 108, 'buy', buyArvanisuit, this);
			//sell button
			var arvanisuitsellbutton = game.add.button(3+304+304, 126, 'sell', sellArvanisuit, this);
			
		//romexwatch
			romexwatchtitle = game.add.text(130+304+304, 110+41, globalGameItems["romexwatch"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			romexwatchprice = game.add.text(40+304+304, 120+41, 'Cost: ' + globalGameItems["romexwatch"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			romexwatchincome = game.add.text(120+304+304, 120+41, 'Income / Day: ' + globalGameItems["romexwatch"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			romexwatchqtyowned = game.add.text(40+304+304, 132+41, 'Qty Owned:' + globalGameItems["romexwatch"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var romexwatchbuybutton = game.add.button(3+304+304, 108+41, 'buy', buyRomexwatch, this);
			//sell button
			var romexwatchsellbutton = game.add.button(3+304+304, 126+41, 'sell', sellRomexwatch, this);
			
		//utv
			//title
			utvtitle = game.add.text(130+304+304, 110+41+41, globalGameItems["utv"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			utvprice = game.add.text(40+304+304, 120+41+41, 'Cost: ' + globalGameItems["utv"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			utvincome = game.add.text(120+304+304, 120+41+41, 'Income / Day: ' + globalGameItems["utv"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			utvqtyowned = game.add.text(40+304+304, 132+41+41, 'Qty Owned:' + globalGameItems["utv"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var utvbuybutton = game.add.button(3+304+304, 108+41+41, 'buy', buyUtv, this);
			//sell button
			var utvsellbutton = game.add.button(3+304+304, 126+41+41, 'sell', sellUtv, this);
		
		//rollsroyce
			//title
			rollsroycetitle = game.add.text(130+304+304, 110+41+41+41, globalGameItems["rollsroyce"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			rollsroyceprice = game.add.text(40+304+304, 120+41+41+41, 'Cost: ' + globalGameItems["rollsroyce"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			rollsroyceincome = game.add.text(120+304+320, 120+41+41+41, 'Income / Day: ' + globalGameItems["rollsroyce"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			rollsroyceqtyowned = game.add.text(40+304+304, 132+41+41+41, 'Qty Owned:' + globalGameItems["rollsroyce"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var rollsroycebuybutton = game.add.button(3+304+304, 108+41+41+41, 'buy', buyRollsroyce, this);
			//sell button
			var rollsroycesellbutton = game.add.button(3+304+304, 126+41+41+41, 'sell', sellRollsroyce, this);
		
		//yacht
			//title
			yachttitle = game.add.text(130+304+304, 110+41+41+41+41, globalGameItems["yacht"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			yachtprice = game.add.text(40+304+304, 120+41+41+41+41, 'Cost: ' + globalGameItems["yacht"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			yachtincome = game.add.text(120+304+320, 120+41+41+41+41, 'Income / Day: ' + globalGameItems["yacht"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			yachtqtyowned = game.add.text(40+304+304, 132+41+41+41+41, 'Qty Owned:' + globalGameItems["yacht"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var yachtbuybutton = game.add.button(3+304+304, 108+41+41+41+41, 'buy', buyYacht, this);
			//sell button
			var yachtsellbutton = game.add.button(3+304+304, 126+41+41+41+41, 'sell', sellYacht, this);
		
		//jet
			//title
			jettitle = game.add.text(130+304+304, 110+41+41+41+41+41, globalGameItems["jet"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			jetprice = game.add.text(40+304+304, 120+41+41+41+41+41, 'Cost: ' + globalGameItems["jet"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			jetincome = game.add.text(120+304+325, 120+41+41+41+41+41, 'Income / Day: ' + globalGameItems["jet"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			jetqtyowned = game.add.text(40+304+304, 132+41+41+41+41+41, 'Qty Owned:' + globalGameItems["jet"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var jetbuybutton = game.add.button(3+304+304, 108+41+41+41+41+41, 'buy', buyJet, this);
			//sell button
			var jetbutton = game.add.button(3+304+304, 126+41+41+41+41+41, 'sell', sellJet, this);
			
		//islandparadise
			//title
			islandparadisetitle = game.add.text(130+304+304, 110+41+41+41+41+41+41, globalGameItems["islandparadise"].objname, { font: "11px Arial", fill: "#000000", align: "center" });
			//price
			islandparadiseprice = game.add.text(40+304+304, 120+41+41+41+41+41+41, 'Cost: ' + globalGameItems["islandparadise"].objcurrentprice, { font: "11px Arial", fill: "#000000", align: "center" });
			//income
			islandparadiseincome = game.add.text(120+304+325, 120+41+41+41+41+41+41, 'Income / Day: ' + globalGameItems["islandparadise"].objincomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
			//qty owned
			islandparadiseqtyowned = game.add.text(40+304+304, 132+41+41+41+41+41+41, 'Qty Owned:' + globalGameItems["islandparadise"].quantityOwned, { font: "11px Arial", fill: "#000000", align: "center" });
			//buy button
			var islandparadisebuybutton = game.add.button(3+304+304, 108+41+41+41+41+41+41, 'buy', buyIslandparadise, this);
			//sell button
			var islandparadisesellbutton = game.add.button(3+304+304, 126+41+41+41+41+41+41, 'sell', sellIslandparadise, this);

//draw accounts	
	
		//income
			//title
			incometitle = game.add.text(130+304+200, 1000+110, 'Income', { font: "20px Arial", fill: "#000000", align: "center" });
			//ammount
			incomeprice = game.add.text(130+304+200, 1000+140, 'Ammount: ' + earningsperday, { font: "11px Arial", fill: "#000000", align: "center" });
			
		//expenditure
			//title
			expendituretitle = game.add.text(130+304+200, 1000+110+41, 'Expenditure', { font: "20px Arial", fill: "#000000", align: "center" });
			//price
			expenditureprice = game.add.text(130+304+200, 1000+140+41, 'Ammount: ' + expenditureperday, { font: "11px Arial", fill: "#000000", align: "center" });
		
		//totalincomeexpenditure
			//title
			totalincomeexpendituretitle = game.add.text(130+304+200, 1000+110+41+41+41, 'Total Income Per Day', { font: "20px Arial", fill: "#000000", align: "center" });
			//price
			totalincomeexpenditureprice = game.add.text(130+304+200, 1000+140+41+41+41, 'Ammount: ' + incomeperday, { font: "11px Arial", fill: "#000000", align: "center" });
		
		//retirebutton
		    var retirebutton = game.add.button(130+304+250, 1000+140+41+41+41+50, 'retirebutton', retireGame, this);

			//accounts text events
			accountscurrenteventtext1 = game.add.text(15+304+304, 1000+435, "No Current Event", { font: "14px Arial", fill: "#000000", align: "left" });
			accountscurrenteventtext2 = game.add.text(15+304+304, 1000+435+25, "No Current Event", { font: "14px Arial", fill: "#1F1F1F", align: "left" });
			

},
render: function() {
	

    // game.debug.text("Time until event: " + game.time.events.duration.toFixed(0), 32, 32);
    // game.debug.text("Next tick: " + game.time.events.next.toFixed(0), 32, 64);
	
	//Update Income
	updateIncome();
	//Update Camera Buttons
	cameraUpdateButtons();
	
	//Update Businesses
	//Panel 1
	//Header
    incometxt1.setText('Income Per Day: $' + incomeperday);
    moneytxt1.setText('Money: $' + money);
			
		//localgym
			//price
			localgymprice.setText('Cost: ' + globalGameObj["localgym"].objcurrentprice);
			//income
			localgymincome.setText('Income / Day: ' + globalGameObj["localgym"].objincomeperday);
			//qty owned
			localgymqtyowned.setText('Qty Owned:' + globalGameObj["localgym"].quantityOwned);
		//localnewsagent
			//price
			localnewsagentprice.setText('Cost: ' + globalGameObj["localnewsagent"].objcurrentprice);
			//income
			localnewsagentincome.setText('Income / Day: ' + globalGameObj["localnewsagent"].objincomeperday);
			//qty owned
			localnewsagentqtyowned.setText('Qty Owned:' + globalGameObj["localnewsagent"].quantityOwned);
		//takeaway
			//price
			takeawayprice.setText('Cost: ' + globalGameObj["takeaway"].objcurrentprice);
			//income
			takeawayincome.setText('Income / Day: ' + globalGameObj["takeaway"].objincomeperday);
			//qty owned
			takeawayqtyowned.setText('Qty Owned:' + globalGameObj["takeaway"].quantityOwned);
		//bakery
			//price
			bakeryprice.setText('Cost: ' + globalGameObj["bakery"].objcurrentprice);
			//income
			bakeryincome.setText('Income / Day: ' + globalGameObj["bakery"].objincomeperday);
			//qty owned
			bakeryqtyowned.setText('Qty Owned:' + globalGameObj["bakery"].quantityOwned);
		//butcher
			//price
			butcherprice.setText('Cost: ' + globalGameObj["butcher"].objcurrentprice);
			//income
			butcherincome.setText('Income / Day: ' + globalGameObj["butcher"].objincomeperday);
			//qty owned
			butcherqtyowned.setText('Qty Owned:' + globalGameObj["butcher"].quantityOwned);
		//pawnshop
			//price
			pawnshopprice.setText('Cost: ' + globalGameObj["pawnshop"].objcurrentprice);
			//income
			pawnshopincome.setText('Income / Day: ' + globalGameObj["pawnshop"].objincomeperday);
			//qty owned
			pawnshopqtyowned.setText('Qty Owned:' + globalGameObj["pawnshop"].quantityOwned);
		//restaurant
			//price
			restaurantprice.setText('Cost: ' + globalGameObj["restaurant"].objcurrentprice);
			//income
			restaurantincome.setText('Income / Day: ' + globalGameObj["restaurant"].objincomeperday);
			//qty owned
			restaurantqtyowned.setText('Qty Owned:' + globalGameObj["restaurant"].quantityOwned);

	//Panel 2
	//Header
    incometxt2.setText('Income Per Day: $' + incomeperday);
    moneytxt2.setText('Money: $' + money);
		
		//realestatestore
			//price
			realestatestoreprice.setText('Cost: ' + globalGameObj["realestatestore"].objcurrentprice);
			//income
			realestatestoreincome.setText('Income / Day: ' + globalGameObj["realestatestore"].objincomeperday);
			//qty owned
			realestatestoreqtyowned.setText('Qty Owned:' + globalGameObj["realestatestore"].quantityOwned);
		//rentalappartment
			//price
			rentalappartmentprice.setText('Cost: ' + globalGameObj["rentalappartment"].objcurrentprice);
			//income
			rentalappartmentincome.setText('Income / Day: ' + globalGameObj["rentalappartment"].objincomeperday);
			//qty owned
			rentalappartmentqtyowned.setText('Qty Owned:' + globalGameObj["rentalappartment"].quantityOwned);
		//highendrestaurant
			//price
			highendrestaurantprice.setText('Cost: ' + globalGameObj["highendrestaurant"].objcurrentprice);
			//income
			highendrestaurantincome.setText('Income / Day: ' + globalGameObj["highendrestaurant"].objincomeperday);
			//qty owned
			highendrestaurantqtyowned.setText('Qty Owned:' + globalGameObj["highendrestaurant"].quantityOwned);
		//electricalretailer
			//price
			electricalretailerprice.setText('Cost: ' + globalGameObj["electricalretailer"].objcurrentprice);
			//income
			electricalretailerincome.setText('Income / Day: ' + globalGameObj["electricalretailer"].objincomeperday);
			//qty owned
			electricalretailerqtyowned.setText('Qty Owned:' + globalGameObj["electricalretailer"].quantityOwned);
		//rentalhouse
			//price
			rentalhouseprice.setText('Cost: ' + globalGameObj["rentalhouse"].objcurrentprice);
			//income
			rentalhouseincome.setText('Income / Day: ' + globalGameObj["rentalhouse"].objincomeperday);
			//qty owned
			rentalhouseqtyowned.setText('Qty Owned:' + globalGameObj["rentalhouse"].quantityOwned);
		//bedandbreakfast
			//price
			bedandbreakfastprice.setText('Cost: ' + globalGameObj["bedandbreakfast"].objcurrentprice);
			//income
			bedandbreakfastincome.setText('Income / Day: ' + globalGameObj["bedandbreakfast"].objincomeperday);
			//qty owned
			bedandbreakfastqtyowned.setText('Qty Owned:' + globalGameObj["bedandbreakfast"].quantityOwned);
		//icerink
			//price
			icerinkprice.setText('Cost: ' + globalGameObj["icerink"].objcurrentprice);
			//income
			icerinkincome.setText('Income / Day: ' + globalGameObj["icerink"].objincomeperday);
			//qty owned
			icerinkqtyowned.setText('Qty Owned:' + globalGameObj["icerink"].quantityOwned);
			
	//Panel 3
	//Header
    incometxt3.setText('Income Per Day: $' + incomeperday);
    moneytxt3.setText('Money: $' + money);
		
		//hotel
			//price
			hotelprice.setText('Cost: ' + globalGameObj["hotel"].objcurrentprice);
			//income
			hotelincome.setText('Income / Day: ' + globalGameObj["hotel"].objincomeperday);
			//qty owned
			hotelqtyowned.setText('Qty Owned:' + globalGameObj["hotel"].quantityOwned);
		//spa
			//price
			spaprice.setText('Cost: ' + globalGameObj["spa"].objcurrentprice);
			//income
			spaincome.setText('Income / Day: ' + globalGameObj["spa"].objincomeperday);
			//qty owned
			spaqtyowned.setText('Qty Owned:' + globalGameObj["spa"].quantityOwned);
		//golfcourse
			//price
			golfcourseprice.setText('Cost: ' + globalGameObj["golfcourse"].objcurrentprice);
			//income
			golfcourseincome.setText('Income / Day: ' + globalGameObj["golfcourse"].objincomeperday);
			//qty owned
			golfcourseqtyowned.setText('Qty Owned:' + globalGameObj["golfcourse"].quantityOwned);
		//healthclub
			//price
			healthclubprice.setText('Cost: ' + globalGameObj["healthclub"].objcurrentprice);
			//income
			healthclubincome.setText('Income / Day: ' + globalGameObj["healthclub"].objincomeperday);
			//qty owned
			healthclubqtyowned.setText('Qty Owned:' + globalGameObj["healthclub"].quantityOwned);
		//huntingestate
			//price
			huntingestateprice.setText('Cost: ' + globalGameObj["huntingestate"].objcurrentprice);
			//income
			huntingestateincome.setText('Income / Day: ' + globalGameObj["huntingestate"].objincomeperday);
			//qty owned
			huntingestateqtyowned.setText('Qty Owned:' + globalGameObj["huntingestate"].quantityOwned);
		//farm
			//price
			farmprice.setText('Cost: ' + globalGameObj["farm"].objcurrentprice);
			//income
			farmincome.setText('Income / Day: ' + globalGameObj["farm"].objincomeperday);
			//qty owned
			farmqtyowned.setText('Qty Owned:' + globalGameObj["farm"].quantityOwned);
		//supermarket
			//price
			supermarketprice.setText('Cost: ' + globalGameObj["supermarket"].objcurrentprice);
			//income
			supermarketincome.setText('Income / Day: ' + globalGameObj["supermarket"].objincomeperday);
			//qty owned
			supermarketqtyowned.setText('Qty Owned:' + globalGameObj["supermarket"].quantityOwned);
			
			
			
	//Panel 4
	//Header
    incometxt4.setText('Income Per Day: $' + incomeperday);
    moneytxt4.setText('Money: $' + money);
		
		//museum
			//price
			museumprice.setText('Cost: ' + globalGameObj["museum"].objcurrentprice);
			//income
			museumincome.setText('Income / Day: ' + globalGameObj["museum"].objincomeperday);
			//qty owned
			museumqtyowned.setText('Qty Owned:' + globalGameObj["museum"].quantityOwned);
		//hourseracingtrack
			//price
			hourseracingtrackprice.setText('Cost: ' + globalGameObj["hourseracingtrack"].objcurrentprice);
			//income
			hourseracingtrackincome.setText('Income / Day: ' + globalGameObj["hourseracingtrack"].objincomeperday);
			//qty owned
			hourseracingtrackqtyowned.setText('Qty Owned:' + globalGameObj["hourseracingtrack"].quantityOwned);
		//confrencehall
			//price
			confrencehallprice.setText('Cost: ' + globalGameObj["confrencehall"].objcurrentprice);
			//income
			confrencehallincome.setText('Income / Day: ' + globalGameObj["confrencehall"].objincomeperday);
			//qty owned
			confrencehallqtyowned.setText('Qty Owned:' + globalGameObj["confrencehall"].quantityOwned);
		//oilandplastics
			//price
			oilandplasticsprice.setText('Cost: ' + globalGameObj["oilandplastics"].objcurrentprice);
			//income
			oilandplasticsincome.setText('Income / Day: ' + globalGameObj["oilandplastics"].objincomeperday);
			//qty owned
			oilandplasticsqtyowned.setText('Qty Owned:' + globalGameObj["oilandplastics"].quantityOwned);
		//nuclearpowerstation
			//price
			nuclearpowerstationprice.setText('Cost: ' + globalGameObj["nuclearpowerstation"].objcurrentprice);
			//income
			nuclearpowerstationincome.setText('Income / Day: ' + globalGameObj["nuclearpowerstation"].objincomeperday);
			//qty owned
			nuclearpowerstationqtyowned.setText('Qty Owned:' + globalGameObj["nuclearpowerstation"].quantityOwned);
		//shipyard
			//price
			shipyardprice.setText('Cost: ' + globalGameObj["shipyard"].objcurrentprice);
			//income
			shipyardincome.setText('Income / Day: ' + globalGameObj["shipyard"].objincomeperday);
			//qty owned
			shipyardqtyowned.setText('Qty Owned:' + globalGameObj["shipyard"].quantityOwned);
		//army
			//price
			armyprice.setText('Cost: ' + globalGameObj["army"].objcurrentprice);
			//income
			armyincome.setText('Income / Day: ' + globalGameObj["army"].objincomeperday);
			//qty owned
			armyqtyowned.setText('Qty Owned:' + globalGameObj["army"].quantityOwned);
			
		
//Update Bank
		//Heading
			//banktitle = game.add.text(110,1100, "The Bank", { font: "20px Arial", fill: "#FFFFFF", align: "center" });
			//incomeperday
			bankincomeday.setText('Income Per Day: ' + incomeperday);
			//currentloan
			bankcurrentloan.setText('Current Loan: ' + currentloan);
			//maxloan
			bankmaxloan.setText('Max Loan: ' + maxloan);
			//availableloan
			availableloan = game.math.roundTo(maxloan-currentloan,-2);
			bankavailableloan.setText('Available Loan: ' + availableloan);
			//nextrepayment
			banknextrepayment.setText('Next Repayment: ' + nextrepayment);


	//Items
	//Header
    incometxtitems.setText('Income Per Day: $' + incomeperday);
    moneytxtitems.setText('Money: $' + money);
		
		//arvanisuit
			//price
			arvanisuitprice.setText('Cost: ' + globalGameItems["arvanisuit"].objcurrentprice);
			//income
			arvanisuitincome.setText('Income / Day: ' + globalGameItems["arvanisuit"].objincomeperday);
			//qty owned
			arvanisuitqtyowned.setText('Qty Owned:' + globalGameItems["arvanisuit"].objownership);
		//romexwatch
			//price
			romexwatchprice.setText('Cost: ' + globalGameItems["romexwatch"].objcurrentprice);
			//income
			romexwatchincome.setText('Income / Day: ' + globalGameItems["romexwatch"].objincomeperday);
			//qty owned
			romexwatchqtyowned.setText('Qty Owned:' + globalGameItems["romexwatch"].objownership);
		//utv
			//price
			utvprice.setText('Cost: ' + globalGameItems["utv"].objcurrentprice);
			//income
			utvincome.setText('Income / Day: ' + globalGameItems["utv"].objincomeperday);
			//qty owned
			utvqtyowned.setText('Qty Owned:' + globalGameItems["utv"].objownership);
		//rollsroyce
			//price
			rollsroyceprice.setText('Cost: ' + globalGameItems["rollsroyce"].objcurrentprice);
			//income
			rollsroyceincome.setText('Income / Day: ' + globalGameItems["rollsroyce"].objincomeperday);
			//qty owned
			rollsroyceqtyowned.setText('Qty Owned:' + globalGameItems["rollsroyce"].objownership);
		//yacht
			//price
			yachtprice.setText('Cost: ' + globalGameItems["yacht"].objcurrentprice);
			//income
			yachtincome.setText('Income / Day: ' + globalGameItems["yacht"].objincomeperday);
			//qty owned
			yachtqtyowned.setText('Qty Owned:' + globalGameItems["yacht"].objownership);
		//jet
			//price
			jetprice.setText('Cost: ' + globalGameItems["jet"].objcurrentprice);
			//income
			jetincome.setText('Income / Day: ' + globalGameItems["jet"].objincomeperday);
			//qty owned
			jetqtyowned.setText('Qty Owned:' + globalGameItems["jet"].objownership);
		//islandparadise
			//price
			islandparadiseprice.setText('Cost: ' + globalGameItems["islandparadise"].objcurrentprice);
			//income
			islandparadiseincome.setText('Income / Day: ' + globalGameItems["islandparadise"].objincomeperday);
			//qty owned
			islandparadiseqtyowned.setText('Qty Owned:' + globalGameItems["islandparadise"].objownership);

//update accounts			
			//income ammount
			incomeprice.setText('Ammount: ' + earningsperday);
			//expenditure ammount
			expenditureprice.setText('Ammount: ' + expenditureperday);
			//totalincomeexpenditure ammount
			totalincomeexpenditureprice.setText('Ammount: ' + incomeperday);
}
};

function tick() {
	
	if(bankruptcydays>0){
	game.state.start('lose');
	}

	//game time
	gamehrs--;
    counter++;
	
	//update money
	
	money = money + (incomeperday/(240));
	
	money = game.math.roundTo(money,-2);
	
	currentloan = game.math.roundTo(currentloan,-2);
	maxloan = game.math.roundTo(maxloan,-2);
	nextrepayment = game.math.roundTo(nextrepayment,-2);
	
	//update loan available
	if(currentloan<0){
	currentloan=0;
	}
	maxloan = incomeperday * 20;
	
	//game day timer
	if(gamehrs<1){
		gameday++;
		gamedaytxt1.setText('Game Day: ' + gameday);
		gamedaytxt2.setText('Game Day: ' + gameday);
		gamedaytxt3.setText('Game Day: ' + gameday);
		gamedaytxt4.setText('Game Day: ' + gameday);
		gamedaytxtitems.setText('Game Day: ' + gameday);
		gamehrs = 240;
		paybackLoan();
	}
	
}

function news(){
	
	function resetFirst(){
		if (typeof currentevent != 'undefined'){
		
		console.log("begin reset current event");
		console.log("old income:" + globalGameObj[currentevent.objAffected].objincomeperday);
		
		globalGameObj[currentevent.objAffected].objincomeperday = defGlobalGame[currentevent.objAffected].objincomeperday;
		
		console.log("reset income:" + defGlobalGame[currentevent.objAffected].objincomeperday);
		console.log("obj reset");

		}else{
		console.log("no current event");
		}
		currentevent = null;
	}
	function event1(){
		var nextrandomeventno = Math.floor((Math.random() * 68) + 1);
		
		console.log("random number complete");
		
		currentevent = globalGameNews[nextrandomeventno];
		
		console.log("next event" + currentevent.evtName);
		console.log("value of event" + currentevent.evtValue);
		
		var item = currentevent.objAffected;		
		globalGameObj[item].objincomeperday = currentevent.evtValue;
			console.log("item current value = " + globalGameObj[item].objincomeperday);
			console.log("item new value = " + currentevent.evtValue);
				if (typeof p1currenteventtext2 == 'undefined'){
				}else{				
		p1currenteventtext2.setText(p1currenteventtext1.text);
		p2currenteventtext2.setText(p1currenteventtext1.text);
		p3currenteventtext2.setText(p1currenteventtext1.text);
		p4currenteventtext2.setText(p1currenteventtext1.text);
		incomecurrenteventtext2.setText(p1currenteventtext1.text);
		bankcurrenteventtext2.setText(p1currenteventtext1.text);
		accountscurrenteventtext2.setText(p1currenteventtext1.text);
				}
		p1currenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		p2currenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		p3currenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		p4currenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		incomecurrenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		bankcurrenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		accountscurrenteventtext1.setText("Event: "+ currentevent.evtName + " ~ " + currentevent.objAffected);
		}
	
	resetFirst();
	event1();	
	
}

function updateIncome(){
earningsperday = dailyEarnings();
expenditureperday = dailyExpenditure();
incomeperday = 0;
incomeperday = (expenditureperday)+earningsperday;
return incomeperday;
}

function dailyEarnings(){
var earnings;
		
var panel1 = (globalGameObj["localgym"].objincomeperday*globalGameObj["localgym"].quantityOwned)+(globalGameObj["localnewsagent"].objincomeperday*globalGameObj["localnewsagent"].quantityOwned)+(globalGameObj["takeaway"].objincomeperday*globalGameObj["takeaway"].quantityOwned)+(globalGameObj["bakery"].objincomeperday*globalGameObj["bakery"].quantityOwned)+(globalGameObj["butcher"].objincomeperday*globalGameObj["butcher"].quantityOwned)+(globalGameObj["pawnshop"].objincomeperday*globalGameObj["pawnshop"].quantityOwned)+(globalGameObj["restaurant"].objincomeperday*globalGameObj["restaurant"].quantityOwned);
			
var panel2 = (globalGameObj["realestatestore"].objincomeperday*globalGameObj["realestatestore"].quantityOwned)+(globalGameObj["rentalappartment"].objincomeperday*globalGameObj["rentalappartment"].quantityOwned)+(globalGameObj["highendrestaurant"].objincomeperday*globalGameObj["highendrestaurant"].quantityOwned)+(globalGameObj["electricalretailer"].objincomeperday*globalGameObj["electricalretailer"].quantityOwned)+(globalGameObj["rentalhouse"].objincomeperday*globalGameObj["rentalhouse"].quantityOwned)+(globalGameObj["bedandbreakfast"].objincomeperday*globalGameObj["bedandbreakfast"].quantityOwned)+(globalGameObj["icerink"].objincomeperday*globalGameObj["icerink"].quantityOwned);
			
var panel3 = (globalGameObj["hotel"].objincomeperday*globalGameObj["hotel"].quantityOwned)+(globalGameObj["spa"].objincomeperday*globalGameObj["spa"].quantityOwned)+(globalGameObj["golfcourse"].objincomeperday*globalGameObj["golfcourse"].quantityOwned)+(globalGameObj["healthclub"].objincomeperday*globalGameObj["healthclub"].quantityOwned)+(globalGameObj["huntingestate"].objincomeperday*globalGameObj["huntingestate"].quantityOwned)+(globalGameObj["farm"].objincomeperday*globalGameObj["farm"].quantityOwned)+(globalGameObj["supermarket"].objincomeperday*globalGameObj["supermarket"].quantityOwned);
			
var panel4 = (globalGameObj["museum"].objincomeperday*globalGameObj["museum"].quantityOwned)+(globalGameObj["hourseracingtrack"].objincomeperday*globalGameObj["hourseracingtrack"].quantityOwned)+(globalGameObj["confrencehall"].objincomeperday*globalGameObj["confrencehall"].quantityOwned)+(globalGameObj["oilandplastics"].objincomeperday*globalGameObj["oilandplastics"].quantityOwned)+(globalGameObj["nuclearpowerstation"].objincomeperday*globalGameObj["nuclearpowerstation"].quantityOwned)+(globalGameObj["shipyard"].objincomeperday*globalGameObj["shipyard"].quantityOwned)+(globalGameObj["army"].objincomeperday*globalGameObj["army"].quantityOwned);

earnings = panel1+panel2+panel3+panel4;

return earnings;
}

function dailyExpenditure(){
var expenditure = 0;
		
		if(globalGameItems["arvanisuit"].objownership==true){
		expenditure = expenditure+globalGameItems["arvanisuit"].objincomeperday;
		}
		if(globalGameItems["romexwatch"].objownership==true){
		expenditure = expenditure+globalGameItems["romexwatch"].objincomeperday;
		}
		if(globalGameItems["utv"].objownership==true){
		expenditure = expenditure+globalGameItems["utv"].objincomeperday;
		}
		if(globalGameItems["rollsroyce"].objownership==true){
		expenditure = expenditure+globalGameItems["rollsroyce"].objincomeperday;
		}
		if(globalGameItems["yacht"].objownership==true){
		expenditure = expenditure+globalGameItems["yacht"].objincomeperday;
		}
		if(globalGameItems["jet"].objownership==true){
		expenditure = expenditure+globalGameItems["jet"].objincomeperday;
		}
		if(globalGameItems["islandparadise"].objownership==true){
		expenditure = expenditure+globalGameItems["islandparadise"].objincomeperday;
		}

return expenditure;
}

function buyClick(objectname) {
	var obj = globalGameObj[objectname];
	if(money>obj.objcurrentprice){
		money = money-obj.objcurrentprice;
		globalGameObj[objectname].quantityOwned++;
	}
}



function sellClick(objectname) {
	var obj = globalGameObj[objectname];
	if(obj.quantityOwned<1){
	}else{
	money = money+obj.objcurrentprice;
    game.debug.text("sellclicked" , 32, 96);
	globalGameObj[objectname].quantityOwned--;
	}
}

function buyItem(objectname) {
	console.log(objectname);
	var obj = globalGameItems[objectname];
	if(money>obj.objcurrentprice){
	if(obj.objownership==false){
	money = money-obj.objcurrentprice;
	globalGameItems[objectname].purchase;
	//incomeperday = globalGameItems[objectname].incomeperday*globalGameItems[objectname].quantityOwned;
	globalGameItems[objectname].objownership = true;
	}
	}
}
function sellItem(objectname) {
	 console.log(objectname);
	var obj = globalGameItems[objectname];
	if(obj.objownership==false){
	}else{
	money = money+obj.objcurrentprice;
    game.debug.text("sellclicked" , 32, 96);
	globalGameItems[objectname].objownership = false;
	}
}

function borrowLoan(loanammount){
	if(currentloan<maxloan+1){
		console.log("success 1");
		if(loanammount<(maxloan-currentloan)+1){
			money = money+loanammount;
			currentloan = currentloan+loanammount;
			maxloan = incomeperday * 10;
			nextrepayment = currentloan / 10;
			console.log("success 2");
		}
	}
}
function paybackLoan(loanammount2){
	if(currentloan>0){
		if(typeof loanammount2 != 'undefined'){
			if(money>loanammount2){
				if(loanammount2>currentloan){
				}
				else{
				missedpayment = 0;
				money = money - loanammount2;
				currentloan = currentloan - loanammount2;
				currentloan = currentloan * currentintrest;
				nextrepayment = currentloan / 10;
				maxloan = incomeperday * 10;
				console.log("payment made");
				bankruptcydays = 0;
			}
			}else{
				if(nextrepayment<currentloan){
				missedpayment = (currentloan / 10)*1.2;
				nextrepayment = nextrepayment + missedpayment;
				console.log(nextrepayment + " next missed repayment");
				console.log(currentloan + " current loan");
				}else{
				bankruptcydays = bankruptcydays+1;
				console.log("bankruptcy");
				}
			}
		}else{
			if(money>nextrepayment){
				console.log(nextrepayment+" payment accepted");
				missedpayment = 0;
				console.log(nextrepayment+" is the next repayment");
				if(currentloan<500 && money>currentloan){
				nextrepayment = currentloan;
				}
				if(nextrepayment==currentloan){
				money = money - nextrepayment;
				currentloan = 0;
				nextrepayment = 0;
				maxloan = incomeperday * 10;
				bankruptcydays = 0;
				}
				else{
				money = money - nextrepayment;
				currentloan = currentloan - nextrepayment;
				currentloan = currentloan * currentintrest;
				nextrepayment = currentloan / 10;
				maxloan = incomeperday * 10;
				bankruptcydays = 0;
				}
			}
			else{
				if(nextrepayment<currentloan){
				missedpayment = (currentloan / 10)*1.2;
				nextrepayment = nextrepayment + missedpayment;
				console.log("missedpayment");
				console.log(nextrepayment + " next repayment");
				console.log(currentloan);
				bankruptcydays = 0;
				}
				else{
				bankruptcydays = bankruptcydays+1;
				console.log("bankruptcy");
				}
			}
		}
	}
	
}



//buy/sell Click Handlers
	
	//Panel 1
	
		//Gym
		function buyGym(){
			buyClick("localgym");
		}
		function sellGym(){
			sellClick("localgym");
		}
		//News
		function buyLocalNews(){
			buyClick("localnewsagent");
		}
		function sellLocalNews(){
			sellClick("localnewsagent");
		}
		//Takeaway
		function buyTakeaway(){
			buyClick("takeaway");
		}
		function sellTakeaway(){
			sellClick("takeaway");
		}
		//Bakery
		function buyBakery(){
			buyClick("bakery");
		}
		function sellBakery(){
			sellClick("bakery");
		}
		//Butcher
		function buyButcher(){
			buyClick("butcher");
		}
		function sellButcher(){
			sellClick("butcher");
		}	
		//Pawnshop
		function buyPawnshop(){
			buyClick("pawnshop");
		}
		function sellPawnshop(){
			sellClick("pawnshop");
		}	
		//Restaurant
		function buyRestaurant(){
			buyClick("restaurant");
		}
		function sellRestaurant(){
			sellClick("restaurant");
		}	
	
	//Panel 2
	
		//Real Estate Store
		function buyRealestatestore(){
			buyClick("realestatestore");
		}
		function sellRealestatestore(){
			sellClick("realestatestore");
		}
		//Rentalappartment
		function buyRentalappartment(){
			buyClick("rentalappartment");
		}
		function sellRentalappartment(){
			sellClick("rentalappartment");
		}
		//Highendrestaurant
		function buyHighendrestaurant(){
			buyClick("highendrestaurant");
		}
		function sellHighendrestaurant(){
			sellClick("highendrestaurant");
		}
		//electricalretailer
		function buyElectricalretailer(){
			buyClick("electricalretailer");
		}
		function sellElectricalretailer(){
			sellClick("electricalretailer");
		}
		//rentalhouse
		function buyRentalhouse(){
			buyClick("rentalhouse");
		}
		function sellRentalhouse(){
			sellClick("rentalhouse");
		}
		//bedandbreakfast
		function buyBedandbreakfask(){
			buyClick("bedandbreakfast");
		}
		function sellBedandbreakfask(){
			sellClick("bedandbreakfast");
		}
		//icerink
		function buyIcerink(){
			buyClick("icerink");
		}
		function sellIcerink(){
			sellClick("icerink");
		}

	//Panel 3
	
		//hotel
		function buyHotel(){
			buyClick("hotel");
		}
		function sellHotel(){
			sellClick("hotel");
		}
		//spa
		function buySpa(){
			buyClick("spa");
		}
		function sellSpa(){
			sellClick("spa");
		}
		//golfcourse
		function buyGolfcourse(){
			buyClick("golfcourse");
		}
		function sellGolfcourse(){
			sellClick("golfcourse");
		}
		//healthclub
		function buyHealthclub(){
			buyClick("healthclub");
		}
		function sellHealthclub(){
			sellClick("healthclub");
		}
		//huntingestate
		function buyHuntingestate(){
			buyClick("huntingestate");
		}
		function sellHuntingestate(){
			sellClick("huntingestate");
		}
		//farm
		function buyFarm(){
			buyClick("farm");
		}
		function sellFarm(){
			sellClick("farm");
		}
		//supermarket
		function buySupermarket(){
			buyClick("supermarket");
		}
		function sellSupermarket(){
			sellClick("supermarket");
		}
		
	//Panel 4
	
		//museum
		function buyMuseum(){
			buyClick("museum");
		}
		function sellMuseum(){
			sellClick("museum");
		}
		//hourseracingtrack
		function buyHourseracingtrack(){
			buyClick("hourseracingtrack");
		}
		function sellHourseracingtrack(){
			sellClick("hourseracingtrack");
		}
		//confrencehall
		function buyConfrencehall(){
			buyClick("confrencehall");
		}
		function sellConfrencehall(){
			sellClick("confrencehall");
		}
		//oilandplastics
		function buyOilandplastics(){
			buyClick("oilandplastics");
		}
		function sellOilandplastics(){
			sellClick("oilandplastics");
		}
		//nuclearpowerstation
		function buyNuclearpowerstation(){
			buyClick("nuclearpowerstation");
		}
		function sellNuclearpowerstation(){
			sellClick("nuclearpowerstation");
		}
		//shipyard
		function buyShipyard(){
			buyClick("shipyard");
		}
		function sellShipyard(){
			sellClick("shipyard");
		}
		//army
		function buyArmy(){
			buyClick("army");
		}
		function sellArmy(){
			sellClick("army");
		}
		
//update camera controls
function cameraUpdateButtons(){

	//Button 1
		//Businesses
			buttonBusiness.x = game.camera.x+260;
			buttonBusiness.y = game.camera.y+100;
	//Button 2
		//Bank
			buttonBank.x = game.camera.x+260;
			buttonBank.y = game.camera.y+150;
	//Button 3
		//Items
			buttonItems.x = game.camera.x+260;
			buttonItems.y = game.camera.y+200;
	//Button 4
		//Accounts
			buttonAccounts.x = game.camera.x+260;
			buttonAccounts.y = game.camera.y+250;


}
//Camera Click Handlers
	function cameraBusiness(){
			currentbizcam++;
			//panel 1
			if(currentbizcam==1){
			game.camera.x = 0;
			game.camera.y = 0;}
			//panel 2
			if(currentbizcam==2){
			game.camera.x = 300;
			game.camera.y = 0;
			}
			//panel 3
			if(currentbizcam==3){
			game.camera.x = 0;
			game.camera.y = 500;
			}
			//panel 4
			if(currentbizcam==4){
			game.camera.x = 300;
			game.camera.y = 500;
			currentbizcam=0;
			}

	}
	function cameraBank(){
	game.camera.x = 0;
	game.camera.y = 1100;
	}
	function cameraItems(){
	game.camera.x = 600;
	game.camera.y = 0;
	}
	function cameraAccounts(){
	game.camera.x = 600;
	game.camera.y = 1100;
	}
	
//bank click handlers
		//bankBorrowMax
		function bankBorrowMax(){
			borrowLoan(maxloan);
		}
		//bankBorrow50
		function bankBorrow50(){
			borrowLoan((maxloan)/2);
		}
		//bankBorrow25
		function bankBorrow25(){
					borrowLoan((maxloan)/4);
		}
		//bankPayback25
		function bankPayback25(){
				if(money>(currentloan/4)){
				paybackLoan(currentloan/4);
				}
				else{
				paybackLoan(money/4);
				}					
		}
		//bankPayback50
		function bankPayback50(){
				if(money>(currentloan/2)){
				paybackLoan(currentloan/2);
				}
				else{
				paybackLoan(money/2);
				}
		}
		//bankPaybackMax
		function bankPaybackMax(){
				if(money>currentloan){
				paybackLoan(currentloan);
				}
				else{
				paybackLoan(money);
				}
		}
	
	//items
	
		//arvanisuit
		function buyArvanisuit(){
			buyItem("arvanisuit");
		}
		function sellArvanisuit(){
			sellItem("arvanisuit");
		}
		//romexwatch
		function buyRomexwatch(){
			buyItem("romexwatch");
		}
		function sellRomexwatch(){
			sellItem("romexwatch");
		}
		//utv
		function buyUtv(){
			buyItem("utv");
		}
		function sellUtv(){
			sellItem("utv");
		}
		//rollsroyce
		function buyRollsroyce(){
			buyItem("rollsroyce");
		}
		function sellRollsroyce(){
			sellItem("rollsroyce");
		}
		//yacht
		function buyYacht(){
			buyItem("yacht");
		}
		function sellYacht(){
			sellItem("yacht");
		}
		//jet
		function buyJet(){
			buyItem("jet");
		}
		function sellJet(){
			sellItem("jet");
		}
		//islandparadise
		function buyIslandparadise(){
			buyItem("islandparadise");
		}
		function sellIslandparadise(){
			sellItem("islandparadise");
		}


//wingame		
function retireGame(){

//positive income
if(incomeperday>0){
	//suit
	if(globalGameItems['arvanisuit'].objownership==true){
		//romexwatch
		if(globalGameItems['romexwatch'].objownership==true){
			//utv
			if(globalGameItems['utv'].objownership==true){
				//rollsroyce
				if(globalGameItems['rollsroyce'].objownership==true){
					//yacht
					if(globalGameItems['yacht'].objownership==true){
						//jet
						if(globalGameItems['jet'].objownership==true){
							//islandparadise
							if(globalGameItems['islandparadise'].objownership==true){
								game.state.start('win');
							}
							else{console.log('No Win');}
						}
						else{console.log('No Win');}
					}
					else{console.log('No Win');}
				}
				else{console.log('No Win');}
			}
			else{console.log('No Win');}
		}
		else{console.log('No Win');}
	}
	else{console.log('No Win');}
}
else{console.log('No Win');}

}
