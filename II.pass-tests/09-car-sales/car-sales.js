function sales(carsSold) {
  const result = {};
    carsSold.forEach(function(element) {
        if (result[element.make] == undefined) result[element.make] = 0;
        result[element.make] += element.price;
    });
  return result;

}

module.exports = sales;