var globalGameObj = 	{	localgym:new gameObj("Local Gym", 10000, 1.01, 500),
							localnewsagent:new gameObj("Local Newsagent", 10000, 1.01, 500),
							takeaway:new gameObj("Takeaway", 10000, 1.01, 500),
							bakery:new gameObj("bakery", 10000, 1.01, 500),
							butcher:new gameObj("butcher", 10000, 1.01, 500),
							pawnshop:new gameObj("pawnshop", 12000, 1.01, 720),
							restaurant:new gameObj("restaurant", 25000, 1.01, 1800),
							
							realestatestore:new gameObj("realestatestore", 50000, 1.01, 3000),
							rentalappartment:new gameObj("rentalappartment", 60000, 1.01, 3600),
							highendrestaurant:new gameObj("highendrestaurant", 100000, 1.01, 6000),
							electricalretailer:new gameObj("electricalretailer", 150000, 1.01, 9000),
							rentalhouse:new gameObj("rentalhouse", 200000, 1.01, 13000),
							bedandbreakfast:new gameObj("bedandbreakfast", 250000, 1.01, 16250),
							icerink:new gameObj("icerink", 1000000, 1.01, 65000),
							
							hotel:new gameObj("hotel", 1500000, 1.01, 97500),
							spa:new gameObj("spa", 2000000, 1.01, 130000),
							golfcourse:new gameObj("golfcourse", 3000000, 1.01, 240000),
							healthclub:new gameObj("healthclub", 4000000, 1.01, 280000),
							huntingestate:new gameObj("huntingestate", 5000000, 1.01, 350000),
							farm:new gameObj("farm", 5000000, 1.01, 400000),
							supermarket:new gameObj("supermarket", 5000000, 1.01, 450000),
							
							museum:new gameObj("museum", 8500000, 1.01, 1300000),							
							hourseracingtrack:new gameObj("hourseracingtrack", 10000000, 1.01, 1500000),
							confrencehall:new gameObj("confrencehall", 12000000, 1.01, 2100000),
							oilandplastics:new gameObj("oilandplastics", 12000000, 1.01, 2160000),
							nuclearpowerstation:new gameObj("nuclearpowerstation", 50000000, 1.01, 10000000),
							shipyard:new gameObj("shipyard", 150000000, 1.01, 45000000),
							army:new gameObj("army", 1000000000, 1.01, 200000000)
							
						};

function gameObj(objname, objcurrentprice, objvolatility, objincomeperday) {
    this.objname = objname;  
    this.objcurrentprice = objcurrentprice;
    this.objvolatility = objvolatility;
    this.objincomeperday = objincomeperday;
    this.changeCurrentPrice = function (price) {
        this.objcurrentprice = price;
    }
	this.changeVolatility = function (volatility) {
        this.objvolatility = volatility;
    }
    this.changeIncomePerDay = function (newincome) {
        this.objincomeperday = newincome;
    }
	this.quantityOwned = 0;
	
}
