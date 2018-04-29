function sales(carSales) {
  totals = {};

  carSales.forEach(cars => {
    if (totals.hasOwnProperty(cars.make)) {
      totals[cars.make] += cars.price;
    } else {
      totals[cars.make] = cars.price;
    }
  });
  return totals;
}

module.exports = sales;
