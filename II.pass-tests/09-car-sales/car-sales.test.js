var sales = require("./car-sales");

test("Car sales", function() {
  var carsSold = [
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    { make: "Ferrari", model: "F50", colour: "red", price: 5000 }
  ];

  var totals = {
    Ford: 22999,
    Honda: 8000,
    "Land Rover": 21000,
    Toyota: 6500,
    Ferrari: 5000
  };

  var output = sales(carsSold);

  expect(output).toEqual(totals);
});
