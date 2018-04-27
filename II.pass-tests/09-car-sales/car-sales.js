function sales(cars) {
    var fordPrice = 0;
    var hondaPrice = 0;
    var landRoverPrice = 0;
    var toyotaPrice = 0;

    cars.forEach(car => {
        switch (car.make) {
			case "Ford":
				fordPrice += car.price;
				break;
			case "Honda":
				hondaPrice += car.price;
				break;
			case "Land Rover":
				landRoverPrice += car.price;
				break;
			case "Toyota":
				toyotaPrice += car.price;
				break;
		}
    });

    var totals = { Ford: fordPrice, Honda: hondaPrice, "Land Rover": landRoverPrice, Toyota: toyotaPrice };
    return totals;
}

module.exports = sales;
