function carSales(product) {
  let keeper = {};
  for (let value of product) {
    if (keeper.hasOwnProperty(value.make)) {
      keeper[value.make] = keeper[value.make] + value.price;
    } else {
      keeper[value.make] = value.price;
    }
  }
  return keeper;
}

module.exports = carSales;
