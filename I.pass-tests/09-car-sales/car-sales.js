let sales = cars => {
  var totalFordPrice = 0;
  var totalHondaPrice = 0;
  var totalLandRoverPrice = 0;
  var totalToyotaPrice = 0;

  cars.forEach(function(carObject) {
    if (carObject.make === "Ford") {
      totalFordPrice = totalFordPrice + carObject.price;
    } else if (carObject.make === "Honda") {
      totalHondaPrice = totalHondaPrice + carObject.price;
    } else if (carObject.make === "Land Rover") {
      totalLandRoverPrice = totalLandRoverPrice + carObject.price;
    } else if (carObject.make === "Toyota") {
      totalToyotaPrice = totalToyotaPrice + carObject.price;
    }
  });

  var totals = {
    Ford: totalFordPrice,
    Honda: totalHondaPrice,
    "Land Rover": totalLandRoverPrice,
    Toyota: totalToyotaPrice
  };

  return totals;
};

module.exports = sales;
