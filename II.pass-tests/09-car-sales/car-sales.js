module.exports = function sale(carsSold) {
  var ford = carsSold.filter(car => car.make == "Ford");
  var fordPrice = ford.map(fordCar => fordCar.price).reduce((a, b) => a + b, 0);

  var honda = carsSold.filter(car => car.make == "Honda");
  var hondaPrice = honda
    .map(hondaCar => hondaCar.price)
    .reduce((a, b) => a + b, 0);

  var landRover = carsSold.filter(car => car.make == "Land Rover");
  var landRoverPrice = landRover
    .map(landRover => landRover.price)
    .reduce((a, b) => a + b, 0);

  var toyota = carsSold.filter(car => car.make == "Toyota");
  var toyotaPrice = toyota
    .map(toyotaCar => toyotaCar.price)
    .reduce((a, b) => a + b, 0);

  var totals = {
    Ford: fordPrice,
    Honda: hondaPrice,
    "Land Rover": landRoverPrice,
    Toyota: toyotaPrice
  };

  return totals;
};
