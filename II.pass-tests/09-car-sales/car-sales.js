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

var carsSold = [
	{ make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
	{ make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
	{ make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
	{ make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
	{ make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
	{ make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
	{ make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
];
console.log(sales(carsSold));
module.exports = sales;
