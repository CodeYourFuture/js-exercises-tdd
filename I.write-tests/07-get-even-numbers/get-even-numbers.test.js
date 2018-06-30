test("Get Even Numbers", function() {
  var getEvenNumber = require("./get-even-numbers");
  var numbers = [22, 13, 73, 82, 4];

  var result = getEvenNumber(numbers);

  expect(result).toEqual([22, 82, 4]);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
