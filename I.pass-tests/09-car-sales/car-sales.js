function sales(carsSold) {
  obj = {};
  var ford = 0;
  var honda = 0;
  var landRover = 0;
  var toyota = 0;
  // -------------------------------
  carsSold.forEach(elemento => {
    if (elemento.make === "Ford") {
      ford += elemento.price;
    }
  });
  obj.Ford = ford;
  // -------------------------------
  carsSold.forEach(elemento => {
    if (elemento.make === "Honda") {
      honda += elemento.price;
    }
  });
  obj.Honda = honda;
  // -------------------------------
  carsSold.forEach(elemento => {
    if (elemento.make === "Land Rover") {
      landRover += elemento.price;
    }
  });
  obj["Land Rover"] = landRover;
  // -------------------------------
  carsSold.forEach(elemento => {
    if (elemento.make === "Toyota") {
      toyota += elemento.price;
    }
  });
  obj.Toyota = toyota;
  // -------------------------------
  return obj;
}
module.exports = sales;
