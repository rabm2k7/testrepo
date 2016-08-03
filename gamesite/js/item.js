var globalGameItems = 	{	arvanisuit:new itemObj("arvanisuit", 500000, -50000),
							romexwatch:new itemObj("romexwatch", 2500000, -250000),
							utv:new itemObj("utv", 7500000, -750000),
							rollsroyce:new itemObj("rollsroyce", 60000000, -6000000),
							yacht:new itemObj("yacht", 150000000, -15000000),
							jet:new itemObj("jet", 200000000, -20000000),
							islandparadise:new itemObj("islandparadise", 10000000000, -1000000000)
						};

						
function itemObj(objname, objcurrentprice, objincomeperday) {
    this.objname = objname;  
    this.objcurrentprice = objcurrentprice;
    this.objincomeperday = objincomeperday;
    this.objownership = false;	
    this.purchase = function () {
		this.objownership = true;
	}
}