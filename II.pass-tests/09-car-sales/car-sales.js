module.exports = function(carsSold) {
  var totals = {
    Ford: 0,
    Honda: 0,
    "Land Rover": 0,
    Toyota: 0
  };

  carsSold.forEach(car => {
    if (car["make"] == "Ford") {
      totals["Ford"] += car["price"];
    } else if (car["make"] == "Honda") {
      totals["Honda"] += car["price"];
    } else if (car["make"] == "Land Rover") {
      totals["Land Rover"] += car["price"];
    } else if (car["make"] == "Toyota") {
      totals["Toyota"] += car["price"];
    }
  });
  return totals;
};
