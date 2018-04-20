function carSolded(array) {
  var carName = ["Ford", "Honda", "Land Rover", "Toyota"];
  var total = {};
  for (i = 0; i < carName.length; i++) {
    var num = 0;
    for (k = 0; k < array.length; k++) {
      if (array[k].make === carName[i]) {
        num = num + array[k].price;
      }
    }
    total[carName[i]] = num;
  }
  return total;
}
module.exports = carSolded;
