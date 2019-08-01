function sales(carsSold) {
  var totall = new Object();
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
