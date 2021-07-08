function sales(carsSold) {
  let result = {};
  carsSold.map((element) => {
    if (result.hasOwnProperty(element.make)) {
      result[element.make] = result[element.make] + element.price;
    } else result[element.make] = element.price;
  });
  return result;
}
module.exports = sales;
