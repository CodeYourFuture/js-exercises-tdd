function sales(carsSold) {
   const totals = {};
    carsSold.forEach(carSold => {
        var total = totals.hasOwnProperty(carSold.make) ? totals[carSold.make] : 0;
        total += carSold.price;
        totals[carSold.make] = total;
    });

    return totals;
  var fordPrice = 0,
    hondaPrice = 0,
    toyotaPrice = 0,
    landPrice = 0;
  for (var i = 0; i < carsSold.length; i++) {
    if (carsSold[i].make === "Ford") {
      fordPrice += carsSold[i].price;
    } else if (carsSold[i].make === "Toyota") {
      toyotaPrice += carsSold[i].price;
    } else if (carsSold[i].make === "Land Rover") {
      landPrice += carsSold[i].price;
    } else {
      hondaPrice += carsSold[i].price;
    }
  }
  totall.Ford = fordPrice;
  totall.Honda = hondaPrice;
  totall["Land Rover"] = landPrice;
  totall.Toyota = toyotaPrice;
  return totall;
}
module.exports = sales;
