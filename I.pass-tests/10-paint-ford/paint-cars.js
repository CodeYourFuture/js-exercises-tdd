function paintShop(cars, color) {
  var cars2 = JSON.parse(JSON.stringify(cars)); // clone cars
  var res = [];
  cars2.forEach(elemento => {
    if (elemento.make === "Ford") {
      elemento.colour = color;
      res.push(elemento);
    } else {
      res.push(elemento);
    }
  });
  return res;
}
module.exports = paintShop;
