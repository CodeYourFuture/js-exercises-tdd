function sales(carSold) {
  totalSales = {};
  carSold.forEach(function(car) {
    if (car["make"] in totalSales) {
      totalSales[car["make"]] += car["price"];
    } else {
      totalSales[car["make"]] = car["price"];
    }
  });
  return totalSales;
}

module.exports = sales;
